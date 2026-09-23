"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

function FloatingDot({ index }: { index: number }) {
  return (
    <motion.div
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
    >
      &nbsp;
    </motion.div>
  );
}

function StepDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="w-2 h-2 rounded-full bg-violet-500"
    >
      &nbsp;
    </motion.div>
  );
}

function SparkDot({
  x,
  y,
  delay,
  size,
}: {
  x: number;
  y: number;
  delay: number;
  size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-violet-400/30"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -15, -30],
      }}
      transition={{
        delay: delay,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeOut",
      }}
    >
      &nbsp;
    </motion.div>
  );
}

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Restaurants", "Salons", "Gyms", "Clinics", "Shops", "Cafés"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sparkDots = [
    { x: -20, y: -15, delay: 1.8, size: 3 },
    { x: 180, y: -10, delay: 2.0, size: 2 },
    { x: 50, y: 20, delay: 2.2, size: 4 },
    { x: 200, y: 15, delay: 1.9, size: 2 },
    { x: -10, y: 18, delay: 2.3, size: 3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />

      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingDot key={i} index={i} />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            Trusted by Local Businesses
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 mb-4"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <StepDot key={i} index={i} />
            ))}
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Share Your Requirements
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-12 px-8 rounded-full border border-border text-sm font-semibold hover:bg-accent transition-colors flex items-center text-foreground"
          >
            See How It Works
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <motion.div
            className="w-32 h-px mb-6 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          >
            &nbsp;
          </motion.div>

          <div className="relative flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-gray-400">
              <motion.span
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
              >
                No templates.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
              >
                No guesswork.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.7, duration: 0.6, ease: "easeOut" }}
              >
                We build a strategy around
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.9,
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.5,
                }}
                className="relative inline-block"
              >
                <span className="relative z-10 text-white font-bold text-base">
                  your
                </span>
                <motion.span
                  className="absolute -inset-x-2 -inset-y-1 bg-violet-500/20 rounded-md"
                  style={{ zIndex: -1, originX: 0 }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 2.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  &nbsp;
                </motion.span>
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 2.1, duration: 0.6, ease: "easeOut" }}
              >
                business.
              </motion.span>
            </div>

            <svg
              width="220"
              height="12"
              viewBox="0 0 220 12"
              className="overflow-visible"
            >
              <motion.path
                d="M2 8 C40 2, 80 2, 110 6 S180 10, 218 4"
                stroke="rgb(139, 92, 246)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
              />
            </svg>

            <div className="absolute -inset-8 pointer-events-none">
              {sparkDots.map((dot, i) => (
                <SparkDot key={i} x={dot.x} y={dot.y} delay={dot.delay} size={dot.size} />
              ))}
            </div>
          </div>

          <motion.div
            className="w-32 h-px mt-6 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          >
            &nbsp;
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
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
