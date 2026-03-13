"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$3,495",
    description: "Perfect for growing companies needing consistent design output.",
    features: [
      "One request at a time",
      "Average 48 hour delivery",
      "Unlimited brands",
      "Unlimited users",
      "Unlimited stock photos",
      "Pause or cancel anytime"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$4,995",
    description: "Double the output for companies looking to move fast.",
    features: [
      "Two requests at a time",
      "Average 48 hour delivery",
      "Unlimited brands",
      "Unlimited users",
      "Priority support",
      "Pause or cancel anytime"
    ],
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h2>
          <p className="text-xl text-gray-400">
            Simple, predictable pricing. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto align-middle items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-[40px] p-8 md:p-12 relative ${
                plan.popular ? "border-purple-500/50 shadow-2xl shadow-purple-500/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-8 max-w-sm">{plan.description}</p>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl md:text-6xl font-bold">{plan.price}</span>
                <span className="text-xl text-gray-400">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 ${
                  plan.popular ? "bg-white text-black" : "glass text-white border-white/20"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-gray-400">
          <p>Book a call to learn more about how it works.</p>
          <a href="#contact" className="text-white font-semibold underline mt-2 inline-block">Book a 15-min intro call</a>
        </div>
      </div>
    </section>
  );
}
