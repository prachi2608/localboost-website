"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  QrCode,
  CreditCard,
  Mail,
  Search,
  Check,
  Layers,
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Professional Websites",
      description:
        "Custom-designed, mobile-responsive websites that make your business look professional and trustworthy.",
      color: "from-violet-500 to-purple-600",
      features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "Custom Design"],
    },
    {
      icon: ShoppingCart,
      title: "Online Ordering System",
      description:
        "Let customers order directly from your website. Perfect for restaurants, bakeries, and food businesses.",
      color: "from-orange-500 to-red-600",
      features: ["Real-time Orders", "Menu Management", "Order Tracking", "No Commissions"],
    },
    {
      icon: QrCode,
      title: "Smart QR Code Solutions",
      description:
        "Unique QR codes for menus, ordering, payments, and more. Customers scan and interact — simple.",
      color: "from-cyan-500 to-blue-600",
      features: ["Dynamic QR Codes", "Scan Analytics", "Branded Design", "Menu Integration"],
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Accept payments online securely. Stripe, PayPal, and more. Recurring billing and invoices.",
      color: "from-green-500 to-emerald-600",
      features: ["Secure Checkout", "Multiple Gateways", "Auto Invoicing", "Subscription Billing"],
    },
    {
      icon: Mail,
      title: "Email Marketing & Automation",
      description:
        "Build your customer list and send beautiful email campaigns. Automated welcome emails and promotions.",
      color: "from-pink-500 to-rose-600",
      features: ["Email Campaigns", "Auto Sequences", "Templates", "Analytics"],
    },
    {
      icon: Search,
      title: "Google & SEO Setup",
      description:
        "Get found on Google when locals search. Google Business Profile setup and local SEO included.",
      color: "from-yellow-500 to-amber-600",
      features: ["Google My Business", "Local SEO", "Maps Listing", "Review Management"],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-4"
          >
            <Layers className="w-4 h-4" />
            Our Services
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything Your Business{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Needs Online
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We handle everything from design to deployment. You focus on running
            your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <Check className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
