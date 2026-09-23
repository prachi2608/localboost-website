"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UtensilsCrossed, Scissors, Dumbbell, Coffee,
  TrendingUp, Award, ExternalLink,
} from "lucide-react";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { name: "Mario's Italian Kitchen", type: "Restaurant", image: "from-orange-600 to-red-700", icon: UtensilsCrossed, result: "+247% online orders", features: ["QR Menu", "Online Ordering", "Delivery", "Payments"] },
    { name: "Glow Beauty Salon", type: "Beauty & Wellness", image: "from-pink-600 to-rose-700", icon: Scissors, result: "+180% bookings", features: ["Online Booking", "Gallery", "Reviews", "Gift Cards"] },
    { name: "FitZone Gym", type: "Fitness Center", image: "from-violet-600 to-purple-700", icon: Dumbbell, result: "+95% new members", features: ["Class Schedule", "Membership", "Trainer Profiles", "App"] },
    { name: "Sweet Dreams Bakery", type: "Bakery & Café", image: "from-amber-600 to-orange-700", icon: Coffee, result: "+312% pre-orders", features: ["Custom Orders", "Menu", "Delivery", "Loyalty"] },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-black">
  
    </section>
  );
};

export default PortfolioSection;
