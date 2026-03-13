"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "E-Commerce App",
    category: "Mobile App",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "SaaS Landing Page",
    category: "Web Development",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Eco Brand Identity",
    category: "Branding",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Work</h2>
          <p className="text-xl text-gray-400">
            A glimpse into the premium quality we deliver day in and day out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group glass rounded-3xl overflow-hidden cursor-pointer flex flex-col h-[400px] border border-white/10 bg-gradient-to-br ${project.color}`}
            >
              <div className="p-8 pb-0">
                <span className="text-sm font-semibold tracking-wider text-gray-300 uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              </div>
              
              <div className="flex-1 w-full bg-white/5 mt-auto rounded-tl-3xl border-t border-l border-white/10 group-hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-x-8 top-8 bottom-[-40px] bg-black/50 rounded-t-xl border border-white/10 shadow-2xl flex flex-col p-4 transform group-hover:-translate-y-4 transition-transform duration-500">
                  {/* Mock wireframe lines */}
                  <div className="w-full flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="w-1/2 h-8 bg-white/10 rounded-md mb-4" />
                  <div className="h-4 w-3/4 bg-white/5 rounded block mb-2" />
                  <div className="h-4 w-full bg-white/5 rounded block mb-2" />
                  <div className="h-4 w-5/6 bg-white/5 rounded block mb-8" />
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="h-20 bg-white/5 rounded-lg" />
                    <div className="h-20 bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full font-bold text-lg glass glass-hover transition-all text-white">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
}
