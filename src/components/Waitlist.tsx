import { Card, CardContent } from "@/components/ui/card";
import copys from "@/data/copys.json";

const Waitlist = () => {
  return (
    <section
      id="waitlist"
      className="py-16 bg-gradient-to-br from-brand-primary/5 to-brand-light/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-200 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {copys.waitlist.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {copys.waitlist.subtitle}
                  </p>
                </div>

                <div className="max-w-xl mx-auto">
                  <iframe
                    src={process.env.NEXT_PUBLIC_GETFORM_FORM_URL}
                    width="100%"
                    height="720"
                    style={{ border: "none" }}
                    className=""
                    title="Formulario de lista de espera"
                  />
                </div>

                <div className="md:grid-cols-3 gap-6 mt-12 hidden">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-2">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Promociones activas
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Comercios aliados
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-2">
                      30%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ahorro promedio
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
