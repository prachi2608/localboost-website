"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  ShoppingCart,
  Shield,
  QrCode,
  UtensilsCrossed,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Restaurants", "Salons", "Gyms", "Clinics", "Shops", "Cafés"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
          animate={{
            y: [0, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            Trusted by 500+ Local Businesses
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 mb-4"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="w-2 h-2 rounded-full bg-violet-500"
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight"
        >
          We Build Websites
          <br />
          That Help{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          Sell More
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-10"
        >
          End-to-end website solutions with{" "}
          <span className="text-white font-medium">online ordering</span>,{" "}
          <span className="text-white font-medium">QR code menus</span>,{" "}
          <span className="text-white font-medium">payment integration</span>,
          and{" "}
          <span className="text-white font-medium">email automation</span> —
          everything your local business needs to thrive online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            See Our Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "500+", label: "Businesses Served" },
            { value: "95%", label: "Client Retention" },
            { value: "3x", label: "Avg. Sales Increase" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/[0.06] p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Mario's Italian Kitchen</div>
                <div className="text-sm text-gray-500">
                  Authentic Italian cuisine, delivered to your door
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium rounded-lg"
              >
                Order Online
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg flex items-center justify-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                Scan Menu
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Margherita Pizza",
                "Pasta Carbonara",
                "Tiramisu",
                "Caesar Salad",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                >
                  <span className="text-sm text-gray-300">{item}</span>
                  <span className="text-sm text-white font-medium">
                    ${(12 + i * 3).toFixed(2)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -right-4 top-20 bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <div>
                <div className="text-xs text-gray-400">Monthly Revenue</div>
                <div className="text-sm font-semibold text-green-400">+247%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="absolute -right-4 bottom-20 bg-violet-500/20 border border-violet-500/30 rounded-lg px-4 py-2"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-violet-400" />
              <div>
                <div className="text-xs text-gray-400">New Orders Today</div>
                <div className="text-sm font-semibold text-violet-400">+38</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-500 text-sm flex flex-col items-center gap-2"
        >
          Scroll to explore
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
