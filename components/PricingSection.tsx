"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Receipt, Shield, CheckCircle2, XCircle } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter", description: "Perfect for new businesses", price: isAnnual ? 79 : 99, popular: false,
      features: [
        { name: "5-Page Professional Website", included: true },
        { name: "Mobile Responsive Design", included: true },
        { name: "Contact Form & Google Maps", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Social Media Links", included: true },
        { name: "SSL Certificate", included: true },
        { name: "Online Ordering System", included: false },
        { name: "QR Code Features", included: false },
        { name: "Payment Integration", included: false },
        { name: "Email Marketing", included: false },
      ],
      cta: "Get Started", gradient: "from-gray-600 to-gray-700",
    },
    {
      name: "Professional", description: "Most popular — complete solution", price: isAnnual ? 179 : 219, popular: true,
      features: [
        { name: "10-Page Custom Website", included: true },
        { name: "Mobile Responsive Design", included: true },
        { name: "Online Ordering System", included: true },
        { name: "QR Code Menu & Ordering", included: true },
        { name: "Payment Integration (Stripe)", included: true },
        { name: "Email Marketing Setup", included: true },
        { name: "Google Business Optimization", included: true },
        { name: "Advanced SEO", included: true },
        { name: "Analytics Dashboard", included: true },
        { name: "Priority Support", included: true },
      ],
      cta: "Start Free Trial", gradient: "from-violet-600 to-cyan-600",
    },
    {
      name: "Enterprise", description: "Full-scale digital transformation", price: isAnnual ? 349 : 449, popular: false,
      features: [
        { name: "Unlimited Pages", included: true },
        { name: "Custom App Development", included: true },
        { name: "Advanced Ordering System", included: true },
        { name: "Multi-location Support", included: true },
        { name: "Custom QR Solutions", included: true },
        { name: "Full Payment Suite", included: true },
        { name: "Email & SMS Automation", included: true },
        { name: "Loyalty Program", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "White-label Options", included: true },
      ],
      cta: "Contact Sales", gradient: "from-amber-600 to-orange-600",
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 bg-black">
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
            <Receipt className="w-4 h-4" />
            Simple Pricing
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Invest in Your Business Growth
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Transparent pricing, no hidden fees.
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? "bg-violet-600" : "bg-white/20"}`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 rounded-full bg-white"
                animate={{ left: isAnnual ? "28px" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-500"}`}>
              Annual <span className="text-violet-400">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-violet-600/10 to-cyan-600/10 border-violet-500/30 shadow-xl shadow-violet-500/10"
                  : "bg-gradient-to-br from-white/[0.02] to-white/[0.01] border-white/[0.06]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <div className="text-xs text-gray-500 mt-1">Billed annually</div>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li
                    key={feature.name}
                    className="flex items-start gap-3 text-sm"
                  >
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                    <span
                      className={feature.included ? "text-gray-300" : "text-gray-600"}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-violet-500/25"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            30-day money-back guarantee • No long-term contracts • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
