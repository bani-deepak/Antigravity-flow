"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4 shadow-lg shadow-black/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          BANI<span className="text-purple-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#benefits" className="hover:text-white transition-colors">Benefits</Link>
          <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <Link
          href="#pricing"
          className="hidden md:flex bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
        >
          Subscribe
        </Link>
      </div>
    </motion.nav>
  );
}
