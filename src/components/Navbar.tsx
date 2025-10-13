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

  const handleLinkClick = (href: string) => {
    // Check if it's a hash link (section scroll)
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      if (pathname === "/") {
        scrollToSection(sectionId);
      } else {
        router.push(`/${href}`);
      }
    } else {
      // It's a regular page route
      router.push(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center -mt-2">
              <img src="/favicon.svg" alt="Logo" className="h-10 w-12" />
            </div>
            <button
              onClick={() => router.push("/")}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {copys.navigation.brand}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {copys.navigation.links.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                onClick={() => handleLinkClick(link.href)}
                className="cursor-pointer"
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={handleWaitlistClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground ml-2 cursor-pointer"
            >
              Lista de Espera
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer"
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
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {copys.navigation.links.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="w-full justify-start cursor-pointer"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Button>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
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
