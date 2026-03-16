import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Check configuration
    const hasResend = process.env.RESEND_API_KEY && process.env.LEADS_TO_EMAIL;
    const hasSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!hasResend && !hasSupabase) {
        console.error("Missing email or database configuration.");
        return NextResponse.json(
            { error: 'Server configuration error. Please try again later.' },
            { status: 500 }
          );
    }

    // 1. Save to Supabase (Database)
    let dbError = null;
    if (hasSupabase) {
      const { error } = await supabase
        .from('leads')
        .insert([{ name, email, message, status: 'new' }]);
      dbError = error;
      if (error) console.error("Supabase Error:", error);
    }

    // 2. Send email using Resend
    let emailError = null;
    if (hasResend) {
      const { error } = await resend.emails.send({
        from: 'Antigravityflow mail <onboarding@resend.dev>',
        to: [process.env.LEADS_TO_EMAIL as string],
        replyTo: email,
        subject: `New Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
      emailError = error;
      if (error) console.error("Resend Error:", error);
    }

    // Determine overall success
    if (dbError && emailError) {
      return NextResponse.json(
        { error: 'Failed to process inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
        success: true, 
        savedToDb: !dbError && hasSupabase,
        emailSent: !emailError && hasResend 
    });
  } catch (error) {
    console.error("Contact Route Error:", error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
