"use client";

import copys from "@/data/copys.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleWaitlistClick = () => {
    // If we're on the main page, scroll to the section
    if (pathname === "/") {
      scrollToSection("waitlist");
    } else {
      // If we're on another page, navigate to main page with hash
      router.push("/#waitlist");
    }
    setIsMenuOpen(false);
  };

  const handleSectionNavigation = (sectionId: string) => {
    // If we're on the main page, scroll to the section
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      // If we're on another page, navigate to main page with hash
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center -mt-2">
              <img src="/favicon.svg" alt="Logo" className="h-10 w-12" />
            </div>
            <button
              onClick={() => router.push("/")}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {copys.navigation.brand}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => handleSectionNavigation("features")}
            >
              Características
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSectionNavigation("faqs")}
            >
              Preguntas Frecuentes
            </Button>
            <Button
              onClick={handleWaitlistClick}
              className="bg-brand-primary-dark hover:bg-brand-primary-dark/90 text-white"
            >
              Lista de Espera
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => handleSectionNavigation("features")}
            >
              Características
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => handleSectionNavigation("faqs")}
            >
              Preguntas Frecuentes
            </Button>
            <Button
              className="w-full bg-brand-primary-dark hover:bg-brand-primary-dark/90 text-white"
              onClick={handleWaitlistClick}
            >
              Lista de Espera
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
