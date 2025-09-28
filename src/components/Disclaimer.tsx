import copys from "@/data/copys.json";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="pt-12 bg-foreground text-background mt-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start space-x-6">
            <AlertCircle className="h-16 w-16 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">{copys.disclaimer.header}</h3>
              <p className="text-sm leading-relaxed">{copys.disclaimer.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
