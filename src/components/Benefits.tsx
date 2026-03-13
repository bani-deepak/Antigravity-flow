"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Infinity, PauseCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 relative bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why choose <span className="text-gradient">BANI?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              We replace unreliable freelancers and expensive traditional agencies with a transparent, predictable subscription model.
            </p>

            <ul className="space-y-6">
              {[
                { icon: <Zap className="text-yellow-400" />, text: "Lightning fast delivery, usually within 48 hours." },
                { icon: <Infinity className="text-blue-400" />, text: "Unlimited requests and revisions until you're 100% happy." },
                { icon: <PauseCircle className="text-purple-400" />, text: "Pause or cancel your subscription anytime, no contracts." },
                { icon: <CheckCircle2 className="text-green-400" />, text: "Top-tier quality from senior designers and developers." }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-300 font-medium">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bento Box Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="glass rounded-3xl p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4" />
              <div className="text-2xl font-bold">Fixed<br/>Monthly<br/>Rate</div>
            </div>
            <div className="glass rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-lg font-medium text-gray-400">Requests</div>
            </div>
            <div className="col-span-2 glass rounded-3xl p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 flex items-center justify-between overflow-hidden">
              <div>
                <div className="text-3xl font-bold mb-2">Asynchronous</div>
                <div className="text-gray-400">No more endless meetings.</div>
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border-4 border-white/20 animate-spin-slow" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
