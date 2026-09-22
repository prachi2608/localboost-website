"use client";

import {
  Rocket, Send,
  Instagram, Facebook, Twitter, Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LocalBoost</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              We help local businesses thrive online with professional websites and digital solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {["Website Design", "Online Ordering", "QR Code Solutions", "Payment Setup", "Email Marketing", "SEO & Google"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Portfolio", "Testimonials", "Pricing", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Get tips on growing your local business online.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500/50"
              />
              <button className="px-4 py-2.5 bg-violet-600 rounded-lg text-white text-sm font-medium hover:bg-violet-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} LocalBoost. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
