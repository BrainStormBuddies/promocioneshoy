"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import type { Promotion } from "@/app/promotions/page";

interface PromotionCardProps {
  promotion: Promotion;
  onClick: () => void;
}

const PromotionCard = ({ promotion, onClick }: PromotionCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getPromotionTypeBadge = (type: string) => {
    const types: { [key: string]: { label: string; color: string } } = {
      descuento: { label: "Descuento", color: "bg-primary/10 text-primary" },
      cashback: { label: "Cashback", color: "bg-blue-500/10 text-blue-600" },
      puntos: { label: "Puntos", color: "bg-purple-500/10 text-purple-600" },
      "2x1": { label: "2x1", color: "bg-orange-500/10 text-orange-600" },
    };

    const typeInfo = types[type] || { label: type, color: "bg-gray-500/10 text-gray-600" };

    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${typeInfo.color}`}>
        <Tag className="h-3 w-3" />
        {typeInfo.label}
      </span>
    );
  };

  const primaryImage = promotion.media?.[0]?.file_url || "/placeholder.svg";

  return (
    <Card
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1 group"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img
          src={primaryImage}
          alt={promotion.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
          {promotion.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-green-900 line-clamp-3 mb-4">
          {promotion.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-green-900">
          <Calendar className="h-4 w-4" />
          <span>
            {formatDate(promotion.start_date)}
            {promotion.end_date && promotion.end_date !== promotion.start_date && (
              <> - {formatDate(promotion.end_date)}</>
            )}
          </span>
        </div>
      </CardContent>

      <div className="mx-4 mb-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-sm font-medium text-primary group-hover:underline">
          Ver detalles →
        </span>
        {getPromotionTypeBadge(promotion.promo_type)}
      </div>
    </Card>
  );
};

export default PromotionCard;
