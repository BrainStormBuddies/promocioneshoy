import { Filter, Heart, Search } from "lucide-react";
import copys from "@/data/copys.json";

// Icon mapping for dynamic icons
const iconMap = {
  search: Search,
  filter: Filter,
  heart: Heart,
} as const;

const steps = copys.howItWorks.steps.map((step) => ({
  icon: step.dynamicIcon.toLowerCase() as keyof typeof iconMap,
  number: step.number,
  title: step.title,
  subtitle: step.subtitle,
}));

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {copys.howItWorks.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div
                  key={index}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-in-out hover:bg-brand-primary/80 hover:scale-105 cursor-pointer">
                    <IconComponent className="h-8 w-8 text-white transition-all duration-300 ease-in-out hover:scale-110" />
                  </div>
                  <div className="flex items-center justify-center mb-2 gap-2">
                    <span className="text-xl font-bold text-brand-primary">
                      {step.number}.
                    </span>
                    <h3 className="text-xl font-semibold text-foreground m-0">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
