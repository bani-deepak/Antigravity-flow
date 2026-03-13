"use client";
import { motion } from "framer-motion";
import { Layout, Palette, Code, Smartphone } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Stunning user interfaces and seamless experiences designed for conversion and engagement.",
    icon: <Layout className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Brand Identity",
    description: "Cohesive visual identity, logos, and brand guidelines that make you stand out.",
    icon: <Palette className="w-8 h-8 text-pink-400" />
  },
  {
    title: "Web Development",
    description: "High-performance, SEO-optimized web applications built with modern frameworks.",
    icon: <Code className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Mobile Apps",
    description: "Intuitive and beautiful mobile applications for both iOS and Android platforms.",
    icon: <Smartphone className="w-8 h-8 text-green-400" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What you get</h2>
          <p className="text-xl text-gray-400">
            A full-stack design and development team at your fingertips. Request anything you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl glass-hover transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
