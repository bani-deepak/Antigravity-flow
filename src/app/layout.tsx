import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BANI | Premium Design & Development Subscription",
  description: "BANI is a premium subscription agency offering top-tier design and development services. Build the know, like, and trust factor and reach out to us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#030303] text-white selection:bg-purple-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
