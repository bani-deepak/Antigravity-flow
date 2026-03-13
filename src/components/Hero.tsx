"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Available for new requests</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Premium Design as a <br />
            <span className="text-gradient">Subscription.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Get unlimited design and development requests for a flat monthly fee. Fast turnaround. Pause or cancel anytime. Stop paying by the hour.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              See Pricing <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg glass glass-hover transition-all text-white"
            >
              View Recent Work
            </a>
          </div>
        </motion.div>

        {/* Abstract 3D-like floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-20 w-64 h-64 glass rounded-3xl border border-white/20 bg-gradient-to-br from-purple-500/20 to-transparent p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="w-full h-1/2 bg-white/10 rounded-xl mb-4" />
            <div className="w-3/4 h-4 bg-white/10 rounded-full mb-2" />
            <div className="w-1/2 h-4 bg-white/10 rounded-full" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 w-72 h-48 glass rounded-3xl border border-white/20 bg-gradient-to-tr from-blue-500/20 to-transparent p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              <div>
                <div className="w-24 h-4 bg-white/20 rounded-full mb-2" />
                <div className="w-16 h-3 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="w-full h-8 bg-white/5 rounded-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
