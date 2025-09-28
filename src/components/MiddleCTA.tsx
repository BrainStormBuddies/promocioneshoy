"use client";

import copys from "@/data/copys.json";

const MiddleCTA = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {copys.middleCta.motivationalText}
          </h2>
          <button
            onClick={scrollToWaitlist}
            className="bg-white text-brand-primary hover:bg-white/90 px-8 py-3 text-lg rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 h-11"
            type="button"
          >
            {copys.middleCta.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiddleCTA;
