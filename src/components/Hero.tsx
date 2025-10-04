"use client";

import copys from "@/data/copys.json";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Hero = () => {
  const scrollToWaitlist = useCallback(() => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  const [displayText, setDisplayText] = useState("");

  const { typewriterPhrases, typewriterComplement } = copys.hero;

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = typewriterPhrases[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
          setTypeSpeed(Math.random() * 10 + 50); // Velocidad variable para más realismo
        } else {
          // Pausa antes de empezar a borrar
          setTypeSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Borrando
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          setTypeSpeed(50);
        } else {
          // Cambiar a la siguiente frase
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typewriterPhrases.length);
          setTypeSpeed(600); // Pausa antes de empezar la nueva frase
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, typeSpeed, typewriterPhrases]);

  return (
    <section
      id="hero"
      className="pt-28 pb-16 bg-gradient-to-br from-brand-light to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in">
                <span className="hover:text-brand-primary-dark">
                  {displayText}
                </span>
                <span
                  className="animate-pulse"
                  style={{
                    display: typewriterPhrases.includes(displayText)
                      ? "none"
                      : "inline",
                  }}
                >
                  |
                </span>
                <br />
                <span className="hover:text-brand-primary-dark">
                  {typewriterComplement.split("**")[0]}{" "}
                </span>
                <span className="text-brand-primary hover:text-brand-primary-dark">
                  {typewriterComplement.split("**")[1]}
                </span>
                <span className="hover:text-brand-primary-dark">
                  {typewriterComplement.split("**")[2]}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 hover:text-foreground">
                {copys.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <button
                onClick={scrollToWaitlist}
                className="bg-brand-primary-dark hover:bg-brand-primary-dark/90 text-white px-8 py-3 text-lg rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary-dark focus:ring-offset-2 h-11"
                type="button"
              >
                {copys.hero.cta}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up [animation-delay:300ms]">
            <div className="rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="/assets/Google_AI_Studio_2025-09-18T02_51_35.110Z.jpg"
                alt="Credit cards and deals illustration"
                className="w-full h-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-110"
                priority
                width={800}
                height={800}
              />
            </div>
            <div className="hidden -bottom-4 -right-4 bg-brand-primary-dark text-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-semibold">Ahorra hasta 30%</p>
              <p className="text-xs opacity-90">en cada compra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
