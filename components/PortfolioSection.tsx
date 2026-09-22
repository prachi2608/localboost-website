"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UtensilsCrossed, Scissors, Dumbbell, Coffee,
  TrendingUp, Award, ExternalLink,
} from "lucide-react";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { name: "Mario's Italian Kitchen", type: "Restaurant", image: "from-orange-600 to-red-700", icon: UtensilsCrossed, result: "+247% online orders", features: ["QR Menu", "Online Ordering", "Delivery", "Payments"] },
    { name: "Glow Beauty Salon", type: "Beauty & Wellness", image: "from-pink-600 to-rose-700", icon: Scissors, result: "+180% bookings", features: ["Online Booking", "Gallery", "Reviews", "Gift Cards"] },
    { name: "FitZone Gym", type: "Fitness Center", image: "from-violet-600 to-purple-700", icon: Dumbbell, result: "+95% new members", features: ["Class Schedule", "Membership", "Trainer Profiles", "App"] },
    { name: "Sweet Dreams Bakery", type: "Bakery & Café", image: "from-amber-600 to-orange-700", icon: Coffee, result: "+312% pre-orders", features: ["Custom Orders", "Menu", "Delivery", "Loyalty"] },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-black">
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
            <Award className="w-4 h-4" />
            Our Work
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Websites That Drive Results
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.image} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative p-8 h-full min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm">{project.type}</div>
                      <div className="text-white font-semibold text-lg">
                        {project.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-4"
                  >
                    <TrendingUp className="w-4 h-4" />
                    {project.result}
                  </motion.div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, j) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white font-medium"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
