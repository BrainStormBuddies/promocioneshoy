"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromotionCard from "@/components/PromotionCard";
import PromotionModal from "@/components/PromotionModal";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export interface MediaItem {
  id: string;
  file_url: string;
  media_type: string;
  alt_text: string | null;
  original_source_url: string;
}

export interface Promotion {
  id: string;
  status: string;
  title: string;
  description: string;
  terms: string;
  start_date: string;
  end_date: string;
  source_url: string;
  source_email: string | null;
  promo_type: string;
  source_type: string;
  image_url: string | null;
  media: MediaItem[];
  expired?: boolean;
}

interface PromotionsResponse {
  data: Promotion[];
}

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(
    null
  );

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/promotions?status=published");

        if (!response.ok) {
          throw new Error("Failed to fetch promotions");
        }

        const data: PromotionsResponse = await response.json();
        setPromotions(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching promotions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  const handleCardClick = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
  };

  const handleCloseModal = () => {
    setSelectedPromotion(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Promociones
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre las mejores ofertas y descuentos disponibles para tus
              tarjetas de crédito
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-destructive font-semibold mb-2">
                  Error al cargar promociones
                </p>
                <p className="text-sm text-muted-foreground">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && promotions.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No hay promociones disponibles en este momento
              </p>
            </div>
          )}

          {!loading && !error && promotions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promotion) => (
                <PromotionCard
                  key={promotion.id}
                  promotion={promotion}
                  onClick={() => handleCardClick(promotion)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedPromotion && (
        <PromotionModal
          promotion={selectedPromotion}
          onClose={handleCloseModal}
        />
      )}

      <Footer />
    </div>
  );
}
