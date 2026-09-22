"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone, Mail, MapPin, Send,
  Instagram, Facebook, Twitter, Linkedin,
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", business: "", message: "", businessType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-4"
            >
              <Send className="w-4 h-4" />
              Get in Touch
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Get a free consultation and website mockup. No commitment, no pressure.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, title: "Call Us", detail: "(555) 123-4567", sub: "Mon-Fri, 9am-6pm" },
                { icon: Mail, title: "Email Us", detail: "hello@localboost.com", sub: "We reply within 2 hours" },
                { icon: MapPin, title: "Visit Us", detail: "123 Main Street, Your City", sub: "By appointment only" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-gray-400">{item.detail}</div>
                    <div className="text-sm text-gray-500">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="text-white font-semibold mb-4">Follow us:</div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/[0.06]"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                    placeholder="john@business.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Business Name</label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm"
                    placeholder="Mario's Kitchen"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Business Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm appearance-none"
                >
                  <option value="">Select your industry</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="salon">Salon / Spa</option>
                  <option value="gym">Gym / Fitness</option>
                  <option value="retail">Retail Shop</option>
                  <option value="clinic">Clinic / Health</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Tell us about your project</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all text-sm resize-none"
                  placeholder="What features do you need? What's your timeline?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send & Get Free Quote
              </motion.button>
              <p className="text-xs text-gray-600 text-center mt-4">
                We'll respond within 2 hours. Your information is secure.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
