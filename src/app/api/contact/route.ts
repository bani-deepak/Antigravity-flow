import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// It will fallback to a dummy if not defined so build doesn't fail, but it won't work in prod without the real key
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

    if (!process.env.RESEND_API_KEY || !process.env.LEADS_TO_EMAIL) {
        console.error("Missing RESEND_API_KEY or LEADS_TO_EMAIL in environment variables.");
        return NextResponse.json(
            { error: 'Server configuration error. Contact form is currently unavailable.' },
            { status: 500 }
          );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'BANI Contact Form <onboarding@resend.dev>', // Usually onboarding@resend.dev works for testing
      to: [process.env.LEADS_TO_EMAIL as string],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact Route Error:", error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
