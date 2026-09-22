"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MessageSquare, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "How long does it take to build my website?", answer: "Most websites are completed within 1-2 weeks. Simple sites in 5 business days. Complex projects with ordering systems may take 2-3 weeks." },
    { question: "Do I need any technical knowledge?", answer: "Absolutely not! We handle everything technical. We'll train you on basic content updates and we're always available to help." },
    { question: "How does the QR code ordering work?", answer: "We create custom-branded QR codes that customers scan with their phone. They browse your menu, customize items, and place orders directly. No app needed!" },
    { question: "What payment processors do you integrate?", answer: "We primarily use Stripe, but also support PayPal, Square, and other major providers. We handle all setup and PCI compliance." },
    { question: "Can I update the menu/content myself?", answer: "Yes! We build an easy admin panel where you can update menus, prices, photos, and hours without any coding." },
    { question: "What's included in ongoing support?", answer: "All plans include hosting, SSL, security updates, backups, and email support. Professional plans include priority support and monthly strategy calls." },
    { question: "Is there a contract or can I cancel anytime?", answer: "No long-term contracts! All plans are month-to-month. You can cancel anytime. We also offer a 30-day money-back guarantee." },
    { question: "Do you help with Google and online marketing?", answer: "Yes! Every website includes basic SEO and Google Business Profile setup. Professional plans include advanced SEO and email marketing." },
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <MessageSquare className="w-4 h-4" />
            FAQ
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Got Questions?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
