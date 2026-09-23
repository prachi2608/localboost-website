import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { RequirementsSection } from "@/components/sections/requirements-section";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesShowcase />
      <IndustriesSection />
      <ProcessSection />
      <RequirementsSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
