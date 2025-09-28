import Disclaimer from "@/components/Disclaimer";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MiddleCTA from "@/components/MiddleCTA";
import Navbar from "@/components/Navbar";
import PainPromise from "@/components/PainPromise";
import Waitlist from "@/components/Waitlist";
import CSSTestComponent from "@/components/CSSTestComponent"; // Added for debugging

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* CSS Test Component - Remove this after debugging */}

      <Navbar />
      <Hero />
      <PainPromise />
      <Features />
      <HowItWorks />
      <MiddleCTA />
      <FAQ />
      <Waitlist />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
