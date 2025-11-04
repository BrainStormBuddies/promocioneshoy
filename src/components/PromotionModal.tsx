"use client";

import type { Promotion } from "@/app/promotions/page";
import { Button } from "@/components/ui/button";
import { formatPeriod } from "@/lib/utils";
import { Calendar, ExternalLink, Mail, Tag, X } from "lucide-react";
import { useEffect } from "react";

interface PromotionModalProps {
  promotion: Promotion;
  onClose: () => void;
}

const PromotionModal = ({ promotion, onClose }: PromotionModalProps) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Add escape key listener
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const getPromotionTypeBadge = (type: string) => {
    const types: { [key: string]: { label: string; color: string } } = {
      descuento: { label: "Descuento", color: "bg-primary/10 text-primary" },
      cashback: { label: "Cashback", color: "bg-blue-500/10 text-blue-600" },
      puntos: { label: "Puntos", color: "bg-purple-500/10 text-purple-600" },
      "2x1": { label: "2x1", color: "bg-orange-500/10 text-orange-600" },
    };

    const typeInfo = types[type] || {
      label: type,
      color: "bg-gray-500/10 text-gray-600",
    };

    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold ${typeInfo.color}`}
      >
        <Tag className="h-4 w-4" />
        {typeInfo.label}
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative">
          {promotion.image_url && (
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-muted">
              <img
                src={promotion.image_url}
                alt={promotion.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title and Badge */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              {promotion.title}
            </h2>

            {/* Date */}
            <div className="flex items-center justify-between gap-2 text-sm text-green-900">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  Válido:{" "}
                  {formatPeriod(promotion.start_date, promotion.end_date)}
                </span>
              </div>
              {/* Expired Badge */}
              {promotion.expired && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
                  Expirado
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Descripción
            </h3>
            <div
              className="text-green-900 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: promotion.description }}
            />
          </div>

          {/* Promotion Type Badge */}
          <div className="mb-3">
            {getPromotionTypeBadge(promotion.promo_type)}
          </div>

          {/* Terms and Conditions */}
          {promotion.terms && (
            <div className="my-6 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                ℹ️ Términos y Condiciones
              </h3>
              <div
                className="text-sm text-green-900 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: promotion.terms }}
              />
            </div>
          )}

          {/* Source Info */}
          <div className="flex flex-col sm:flex-row gap-3">
            {promotion.source_url && (
              <Button asChild className="flex-1">
                <a
                  href={promotion.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver en sitio oficial
                </a>
              </Button>
            )}

            {promotion.source_email && (
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={`mailto:${promotion.source_email}`}
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contactar
                </a>
              </Button>
            )}
          </div>

          {/* Additional Images */}
          {promotion.media && promotion.media.length > 1 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Imágenes adicionales
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {promotion.media.slice(1).map((media) => (
                  <div
                    key={media.id}
                    className="relative h-32 rounded-lg overflow-hidden bg-muted"
                  >
                    <img
                      src={media.file_url}
                      alt={media.alt_text || promotion.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
