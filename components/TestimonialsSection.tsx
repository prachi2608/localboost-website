"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    { name: "Marco Rossi", role: "Owner, Marco's Pizzeria", content: "Our online orders went up 300% in the first month! The QR code ordering system is a game-changer.", rating: 5, avatar: "MR", gradient: "from-orange-500 to-red-500" },
    { name: "Sarah Chen", role: "Founder, Glow Beauty Spa", content: "The booking system is incredible. We went from constant phone calls to 80% online bookings.", rating: 5, avatar: "SC", gradient: "from-pink-500 to-rose-500" },
    { name: "James Miller", role: "Manager, FitZone Gym", content: "Professional website, easy membership sign-ups. Our member retention increased by 45%.", rating: 5, avatar: "JM", gradient: "from-violet-500 to-purple-500" },
    { name: "Lisa Park", role: "Owner, Sweet Bloom Bakery", content: "The custom order system is exactly what we needed. Pre-orders tripled!", rating: 5, avatar: "LP", gradient: "from-amber-500 to-orange-500" },
    { name: "David Thompson", role: "Owner, Thompson Auto Shop", content: "New customer inquiries doubled and the payment system saves us hours every week.", rating: 5, avatar: "DT", gradient: "from-cyan-500 to-blue-500" },
    { name: "Maria Garcia", role: "Owner, Casa Verde Restaurant", content: "They handled everything — website, QR codes, ordering, email marketing. Like a full tech team.", rating: 5, avatar: "MG", gradient: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-black">
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
            <Star className="w-4 h-4" />
            Testimonials
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Loved by Local Business Owners
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-6">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-semibold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
