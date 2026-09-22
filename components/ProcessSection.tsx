"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Palette, Code2, Rocket, Clock } from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { number: "01", title: "Discovery Call", description: "We learn about your business, goals, and what you need. Completely free.", icon: Phone, duration: "30 min call" },
    { number: "02", title: "Design & Strategy", description: "We create mockups and plan your website features and user experience.", icon: Palette, duration: "3-5 days" },
    { number: "03", title: "Build & Integrate", description: "We develop your site with all features — ordering, payments, QR codes, email.", icon: Code2, duration: "1-2 weeks" },
    { number: "04", title: "Launch & Support", description: "We launch, train your team, set up analytics, and provide ongoing support.", icon: Rocket, duration: "Ongoing" },
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-4"
          >
            <Rocket className="w-4 h-4" />
            Our Process
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From Idea to Launch in Days
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our streamlined process means you get a professional website fast.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent hidden lg:block" />
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`relative ${i % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:ml-auto"}`}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-violet-500/30 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
