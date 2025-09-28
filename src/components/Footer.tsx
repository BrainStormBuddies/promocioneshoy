import {
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import copys from "@/data/copys.json";

const Footer = () => {
  const { footer } = copys;

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 border-y border-background/20 py-12 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-brand-primary rounded-lg">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">{footer.brand}</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              {footer.description}
            </p>
            <div className="hidden space-x-4">
              <a
                href="#"
                className="text-background/60 hover:text-brand-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-brand-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-brand-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-brand-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {copys.navigation.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="hidden space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-primary" />
                <span className="text-background/80">
                  hola@promocioneshoy.com
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-background/60">
                  Horarios de Soporte:
                </p>
                <p className="text-sm text-background/80">
                  Lunes - Viernes: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-background/60">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
