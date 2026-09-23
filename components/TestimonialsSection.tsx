"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Clock, Target, Sparkles, Store } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-9xl text-white/5 font-serif">"</div>
      <div className="absolute bottom-20 right-10 text-9xl text-white/5 font-serif">"</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 rounded-3xl blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/[0.06] rounded-3xl p-8 md:p-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              A Note from Our Team
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We're a new firm, and we know that means we have to work twice as hard
                to earn your trust. We don't have hundreds of testimonials yet — but
                we have a dedicated team that treats every single client like our first
                and most important one. Your business deserves that kind of attention.
              </p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 pt-6 border-t border-white/[0.06]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  LB
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">The LocalBoost Team</div>
                  <div className="text-sm text-gray-500">Building something great, one business at a time</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: 'Passionate',
                  desc: 'We genuinely care about your growth',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Responsive',
                  desc: 'Fast replies, real human support',
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: 'Focused',
                  desc: 'Every strategy custom-built for you',
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-5 hover:border-white/[0.08] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-3">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
