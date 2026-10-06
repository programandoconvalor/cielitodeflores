"use client";

import React from "react";
import ProductCard from "./ProductCard";
import type { CatalogProduct } from "@/data/site/catalogProducts";

type Props = {
  products: CatalogProduct[];
  activeImageByCard: Record<string, number>;
  onPrevImage: (cardId: string) => void;
  onNextImage: (cardId: string) => void;
  onOpenPreview: (cardId: string, index: number) => void;
  getDisplayPrice: (productId: number) => number;
};

export default function ProductGrid({
  products,
  activeImageByCard,
  onPrevImage,
  onNextImage,
  onOpenPreview,
  getDisplayPrice,
}: Props) {
  return (
    <div
      className="
        mx-auto
        grid
        w-full
        max-w-[1460px]
        grid-cols-2
        gap-3
        px-3
        sm:gap-4
        sm:px-4
        md:gap-6
        md:px-6
        lg:gap-8
        lg:px-8
      "
    >
      {products.map((product) => {
        const cardId = String(product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            activeImageIndex={activeImageByCard[cardId] ?? 0}
            onPrevImage={() => onPrevImage(cardId)}
            onNextImage={() => onNextImage(cardId)}
            onOpenPreview={(index) =>
              onOpenPreview(cardId, index)
            }
            displayPrice={getDisplayPrice(product.id)}
          />
        );
      })}
    </div>
  );
}