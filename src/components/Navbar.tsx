"use client";

import copys from "@/data/copys.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            <h1 className="text-xl font-bold text-foreground">
              {copys.navigation.brand}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Preguntas Frecuentes
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-brand-primary-dark hover:bg-brand-primary-dark/90 text-white px-6"
            >
              Lista de Espera
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Preguntas Frecuentes
            </button>
            <Button
              className="w-full bg-brand-primary-dark hover:bg-brand-primary-dark/90 text-white"
              onClick={() => scrollToSection("waitlist")}
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
