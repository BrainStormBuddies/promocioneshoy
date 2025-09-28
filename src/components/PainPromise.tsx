import copys from "@/data/copys.json";
import { AlertTriangle, CheckCircle } from "lucide-react";

const PainPromise = () => {
  return (
    <section className="py-16 bg-brand-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Pain Section */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                {copys.painPromise.problemTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {copys.painPromise.problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-red-50 border border-red-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-red-100 hover:-translate-y-1 hover:border-red-300 cursor-pointer"
                >
                  <p className="text-red-800 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promise Section */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-brand-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {copys.painPromise.solutionTitle}
              </h2>
            </div>
            <div className="bg-brand-light/50 border border-brand-primary/20 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1 hover:border-brand-primary/30 cursor-pointer">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                {copys.painPromise.solution.split("**")[0]}
                <span className="font-bold text-brand-primary">
                  {copys.painPromise.solution.split("**")[1]}
                </span>
                {copys.painPromise.solution.split("**")[2].split(".")[0]}.
              </p>
              <p className="text-muted-foreground">
                {copys.painPromise.solution.split(".")[1].trim()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPromise;
