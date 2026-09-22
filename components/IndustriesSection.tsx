"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UtensilsCrossed, Scissors, Dumbbell, Heart, Store, Coffee,
  Target, ArrowRight,
} from "lucide-react";

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { icon: UtensilsCrossed, name: "Restaurants & Cafés", description: "Online ordering, QR menus, reservations, delivery tracking", gradient: "from-orange-500 to-red-500", stats: "3x more online orders" },
    { icon: Scissors, name: "Salons & Spas", description: "Online booking, service menu, staff scheduling, reminders", gradient: "from-pink-500 to-rose-500", stats: "60% fewer no-shows" },
    { icon: Dumbbell, name: "Gyms & Fitness", description: "Class schedules, membership portal, online payments", gradient: "from-violet-500 to-purple-500", stats: "45% more memberships" },
    { icon: Heart, name: "Clinics & Health", description: "Patient portal, appointment booking, secure forms", gradient: "from-red-500 to-pink-500", stats: "80% digital bookings" },
    { icon: Store, name: "Retail Shops", description: "E-commerce, inventory, click-and-collect, loyalty programs", gradient: "from-cyan-500 to-blue-500", stats: "2.5x revenue growth" },
    { icon: Coffee, name: "Bakeries & Food", description: "Pre-orders, custom cake builder, delivery management", gradient: "from-amber-500 to-orange-500", stats: "200% more pre-orders" },
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
            <Target className="w-4 h-4" />
            Industries We Serve
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Perfect for Every Local Business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-semibold text-violet-400 mb-2">
                  {industry.stats}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm text-white font-medium"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
