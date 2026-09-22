"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  UtensilsCrossed,
  QrCode,
  CreditCard,
  Mail,
  Zap,
  Shield,
  ScanLine,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const RestaurantMockup = () => (
  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/[0.06] p-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-white font-semibold">🍕 Mario's Kitchen</div>
        <div className="text-sm text-gray-500">Online Ordering Dashboard</div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-400">Live</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[
        { label: "Active Orders", value: "12", color: "text-orange-400" },
        { label: "Today Revenue", value: "$1,847", color: "text-green-400" },
        { label: "Avg. Order", value: "$34.50", color: "text-cyan-400" },
      ].map((stat, i) => (
        <div key={stat.label} className="text-center">
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="space-y-3">
      {[
        { name: "Table 5 - Margherita x2", status: "Preparing", time: "5 min" },
        { name: "Online - Delivery #238", status: "Ready", time: "2 min" },
        { name: "Table 12 - Full Order", status: "New", time: "Just now" },
      ].map((order, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
        >
          <div>
            <div className="text-sm text-white">{order.name}</div>
            <div className="text-xs text-gray-500">{order.time}</div>
          </div>
          <div
            className={`text-xs px-2 py-1 rounded-full ${
              order.status === "New"
                ? "bg-violet-500/20 text-violet-400"
                : order.status === "Preparing"
                ? "bg-orange-500/20 text-orange-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {order.status}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const QRCodeMockup = () => (
  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/[0.06] p-6">
    <div className="flex gap-6">
      <div className="w-32 h-32 bg-white rounded-lg p-2">
        <div className="w-full h-full grid grid-cols-7 gap-0.5">
          {[...Array(49)].map((_, i) => (
            <div
              key={i}
              className={`rounded-sm ${Math.random() > 0.4 ? "bg-gray-900" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="text-white font-semibold mb-2">Scan to view menu & order</div>
        <div className="flex gap-2 flex-wrap">
          {["Menu", "Order", "Pay", "Review"].map((action, i) => (
            <span
              key={action}
              className="px-3 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full"
            >
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
      <div className="flex items-center gap-2">
        <ScanLine className="w-4 h-4 text-cyan-400" />
        <div>
          <div className="text-xs text-gray-400">Total Scans Today</div>
          <div className="text-sm font-semibold text-cyan-400">247</div>
        </div>
      </div>
    </div>
  </div>
);

const PaymentMockup = () => (
  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/[0.06] p-6">
    <div className="text-white font-semibold mb-4">Payment Summary</div>
    <div className="space-y-3 mb-4">
      {[
        { item: "Margherita Pizza x2", price: "$28.00" },
        { item: "Pasta Carbonara", price: "$16.00" },
        { item: "Delivery Fee", price: "$3.99" },
      ].map((item, i) => (
        <div key={i} className="flex justify-between text-sm">
          <span className="text-gray-400">{item.item}</span>
          <span className="text-white">{item.price}</span>
        </div>
      ))}
      <div className="border-t border-white/[0.06] pt-3 flex justify-between">
        <span className="text-white font-semibold">Total</span>
        <span className="text-white font-bold">$47.99</span>
      </div>
    </div>
    <div className="mb-4">
      <div className="text-sm text-gray-400 mb-2">Pay with</div>
      <div className="flex gap-2">
        {["💳 Card", "📱 Apple Pay", "🅿️ PayPal"].map((method, i) => (
          <button
            key={method}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
          >
            {method}
          </button>
        ))}
      </div>
    </div>
    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg">
      Pay $47.99 Securely
    </button>
    <div className="mt-3 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
      <Shield className="w-3 h-3" />
      Encrypted & Secure with Stripe
    </div>
  </div>
);

const EmailMockup = () => (
  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/[0.06] p-6">
    <div className="flex items-center justify-between mb-4">
      <div>
        <div className="text-white font-semibold">Welcome Email</div>
        <div className="text-sm text-gray-500">
          Sent automatically to new customers
        </div>
      </div>
      <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-xs text-green-400">
        Active
      </div>
    </div>
    <div className="p-4 bg-white/5 rounded-lg mb-4">
      <div className="text-sm text-gray-300">
        Hi {"{{first_name}}"}! 👋<br />
        Welcome to Mario's Kitchen! Here's 15% off your first order...
      </div>
    </div>
    <div className="space-y-2">
      {[
        { name: "Order Confirm", sent: "1,247", rate: "98%" },
        { name: "Promo Campaign", sent: "3,892", rate: "42%" },
        { name: "Review Request", sent: "856", rate: "35%" },
        { name: "Birthday Deal", sent: "234", rate: "67%" },
      ].map((email, i) => (
        <div
          key={email.name}
          className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
        >
          <div className="text-sm text-white">{email.name}</div>
          <div className="text-xs text-gray-500">
            Sent: {email.sent} • Open: {email.rate}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FeaturesShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: UtensilsCrossed,
      title: "Restaurant Ordering System",
      description: "Complete online ordering with real-time kitchen updates, table-side QR ordering, delivery tracking, and tip management.",
      highlights: ["Digital Menu with Photos", "Real-time Order Notifications", "Table-side QR Ordering", "Delivery Zone Management", "Tip & Split Bill", "Kitchen Display System"],
    },
    {
      icon: QrCode,
      title: "Smart QR Code System",
      description: "Dynamic QR codes that can be updated without reprinting. Track scans, customize designs, and connect to any action.",
      highlights: ["Dynamic & Updateable", "Branded with Logo", "Scan Analytics Dashboard", "Multi-action QR Codes", "Print-ready Templates", "WiFi QR Codes"],
    },
    {
      icon: CreditCard,
      title: "Seamless Payment Setup",
      description: "Accept online payments from day one. We set up Stripe, handle PCI compliance, and enable recurring billing.",
      highlights: ["Stripe & PayPal Integration", "One-click Checkout", "Recurring Subscriptions", "Automated Invoicing", "Refund Management", "Revenue Dashboard"],
    },
    {
      icon: Mail,
      title: "Email & Notification System",
      description: "Automated email sequences for new customers, order confirmations, promotions, and re-engagement.",
      highlights: ["Welcome Sequences", "Order Confirmations", "Promotional Campaigns", "Birthday Emails", "Review Automation", "SMS Notifications"],
    },
  ];

  const mockups = [<RestaurantMockup />, <QRCodeMockup />, <PaymentMockup />, <EmailMockup />];

  return (
    <section id="features" ref={ref} className="py-24 bg-black">
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
            <Zap className="w-4 h-4" />
            Powerful Features
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for Real Results
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every feature is designed to help your local business attract more customers and increase revenue.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.button
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveFeature(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${activeFeature === i ? "bg-white/[0.06] border-violet-500/30 shadow-lg shadow-violet-500/5" : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <AnimatePresence>
                      {activeFeature === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-gray-400"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {mockups[activeFeature]}
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 p-5 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/[0.06]"
            >
              <div className="text-sm font-semibold text-white mb-3">
                Key Capabilities
              </div>
              <div className="grid grid-cols-2 gap-2">
                {features[activeFeature].highlights.map((h, i) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <CheckCircle2 className="w-4 h-4 text-violet-400" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
