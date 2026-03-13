"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass rounded-[40px] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something amazing.</h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to elevate your brand? Book a quick intro call or send us a message to get started.
              </p>
              
              {/* Cal.com Placeholder */}
              <div className="w-full h-[400px] glass rounded-3xl border border-white/10 flex items-center justify-center p-6 mb-8 text-center text-gray-400">
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">Book a call</div>
                    <p className="mb-4 text-sm">Find a time that works for you.</p>
                    {/* The placeholder requested by user */}
                    <div className="inline-flex glass px-4 py-2 rounded-lg text-sm bg-black/50">
                       Integration Placeholder: youtube.com
                    </div>
                  </div>
              </div>
            </div>

            <div className="bg-black/40 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>
              <form action={async (formData) => {
                 // Resend API will be connected here
                 console.log("Form submitted. Connect Resend here via Server Actions.");
              }} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
