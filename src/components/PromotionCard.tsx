"use client";

import type { Promotion } from "@/app/promotions/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPeriod } from "@/lib/utils";
import { Calendar, Tag } from "lucide-react";

interface PromotionCardProps {
  promotion: Promotion;
  onClick: () => void;
}

const PromotionCard = ({ promotion, onClick }: PromotionCardProps) => {
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
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${typeInfo.color}`}
      >
        <Tag className="h-3 w-3" />
        {typeInfo.label}
      </span>
    );
  };

  const primaryImage = promotion.image_url || "/placeholder.svg";

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
        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {promotion.title}
        </CardTitle>

        {/* Date */}
        <div className="flex items-center justify-between gap-2 text-xs text-green-900">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {formatPeriod(promotion.start_date, promotion.end_date, "-")}
            </span>
          </div>
          {/* Expired Badge */}
          {promotion.expired && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white">
              Expirado
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <div
          dangerouslySetInnerHTML={{ __html: promotion.description }}
          className="mb-4 text-sm text-muted-foreground h-16 overflow-hidden"
        />

        {/* Promotion Type Badge */}
        <div className="flex">
          {getPromotionTypeBadge(promotion.promo_type)}
        </div>
      </CardContent>
    </Card>
  );
};

export default PromotionCard;
