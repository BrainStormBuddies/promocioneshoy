import { Card, CardContent } from "@/components/ui/card";
import copys from "@/data/copys.json";

const features = copys.features.list;

const Features = () => {
  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ✨ ¿Qué encontrarás en nuestra plataforma?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-card hover:bg-brand-light/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
