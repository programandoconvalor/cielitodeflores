"use client";

import React, { useState, useEffect } from "react";

import ProductImageCarousel from "./ProductImageCarousel";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";

import type { CatalogProduct } from "@/data/site/catalogProducts";

type Props = {
  product: CatalogProduct;
  activeImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onOpenPreview: (index: number) => void;
  displayPrice: number;
};

export default function ProductCard({
  product,
  activeImageIndex,
  onPrevImage,
  onNextImage,
  onOpenPreview,
  displayPrice,
}: Props) {
  /*
   * Normal catalog UI configuration.
   */
  const ui = product.ui;

  const showProductSizes = ui.showProductSizes !== false;
  const showStandard = ui.showStandard !== false;
  const showPremium = ui.showPremium !== false;
  const showLuxury = ui.showLuxury !== false;

  /**
   * Map product size ids to a known type.
   */
  const sizeKind = (id: string) => {
    const key = id.toLowerCase();

    if (key.includes("premium")) {
      return "premium";
    }

    if (
      key.includes("estandar") ||
      key.includes("standard") ||
      key.includes("estándar")
    ) {
      return "estandar";
    }

    if (key.includes("luxury") || key.includes("luxe")) {
      return "luxury";
    }

    return key;
  };

  /**
   * Build the visible sizes while preserving
   * the original productSizes order.
   */
  const visibleSizes = (product.productSizes ?? []).filter((size) => {
    const kind = sizeKind(size.id);

    if (kind === "premium") {
      return showPremium;
    }

    if (kind === "estandar") {
      return showStandard;
    }

    if (kind === "luxury") {
      return showLuxury;
    }

    return showProductSizes;
  });

  /**
   * Select the initial size.
   */
  const pickInitial = (): string | undefined => {
    if (!showProductSizes) {
      return undefined;
    }

    const findByKind = (kind: string) =>
      visibleSizes.find((size) => sizeKind(size.id) === kind)?.id;

    return (
      findByKind("premium") ??
      findByKind("estandar") ??
      findByKind("luxury") ??
      visibleSizes[0]?.id
    );
  };

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    pickInitial(),
  );

  /**
   * Synchronize selected size when
   * visibility configuration changes.
   */
  useEffect(() => {
    const next = pickInitial();

    if (next !== selectedSize) {
      setSelectedSize(next);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    showProductSizes,
    showStandard,
    showPremium,
    showLuxury,
    product.productSizes?.length,
  ]);

  const selectedSizeData = selectedSize
    ? product.productSizes?.find((size) => size.id === selectedSize)
    : undefined;

  /**
   * Calculate the price shown on the normal catalog.
   */
  const priceToShow =
    product.productSizes &&
    product.productSizes.length > 0 &&
    selectedSizeData
      ? selectedSizeData.priceMxn
      : product.productSizes &&
          product.productSizes.length > 0 &&
          !selectedSizeData &&
          visibleSizes.length > 0
        ? visibleSizes[0].priceMxn
        : displayPrice && displayPrice > 0
          ? displayPrice
          : product.basePriceMxn ?? 0;

  /**
   * Product badge.
   *
   * The value comes directly from catalogProducts:
   * badgeLabel: "EXCLUSIVO"
   */
  const showBadge = Boolean(
    product.badgeLabel || product.badge,
  );

  const badgeText =
    product.badgeLabel ||
    product.badge ||
    "EXCLUSIVO";

  return (
    <article
      className="
        group
        relative
        flex
        min-w-0
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-black/8
        bg-white
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* =======================================================
          PRODUCT BADGE
          Value comes from product.badgeLabel
      ======================================================= */}
      {showBadge && (
        <div
          className="
            absolute
            left-2.5
            top-2.5
            z-30
            sm:left-3
            sm:top-3
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              bg-[#FCE7F3]
              px-2.5
              py-1
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[#EC5F8C]
              shadow-[0_2px_6px_rgba(247,118,155,0.16)]
              sm:px-3
              sm:py-1.5
              sm:text-[10px]
            "
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 2l1.9 4.3L18.5 8l-3.8 2.9L15 15l-3-2-3 2 .3-4.1L3.5 8l4.6-1.7L12 2z"
                fill="currentColor"
              />
            </svg>

            <span>{badgeText}</span>
          </div>
        </div>
      )}

      {/* Product content */}
      <div className="flex min-h-0 flex-1 flex-col">
        {/* Product image */}
        <div className="w-full shrink-0">
          <ProductImageCarousel
            images={product.defaultImages}
            sku={product.sku}
            activeIndex={activeImageIndex}
            onPrev={onPrevImage}
            onNext={onNextImage}
            onOpen={onOpenPreview}
          />
        </div>

        {/* Product information */}
        <div
          className="
            flex
            flex-1
            min-w-0
            flex-col
            px-3
            pb-4
            pt-2.5
            md:px-3.5
          "
        >
          {/* Product name */}
          <ProductInfo
            product={product}
            subtitle={
              selectedSizeData?.subtitle ?? product.subtitle
            }
          />

          {/* Product price */}
          <div className="mt-1">
            <ProductPrice price={priceToShow} />
          </div>

          {/* Product sizes */}
          {showProductSizes && visibleSizes.length > 0 && (
            <div className="mt-3 sm:mt-4">
              <div
                className="
                  mb-2
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-[#94A3B8]
                  sm:mb-2.5
                  sm:text-[10px]
                "
              >
                TAMAÑO
              </div>

              <div
                role="tablist"
                aria-label="Seleccionar tamaño"
                className="
                  grid
                  grid-cols-3
                  gap-1.5
                  sm:gap-2
                "
              >
                {visibleSizes.map((size) => {
                  const active = selectedSize === size.id;

                  return (
                    <button
                      key={size.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-pressed={active}
                      onClick={() =>
                        setSelectedSize(size.id)
                      }
                      className="
                        min-h-[32px]
                        rounded-full
                        px-1
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.04em]
                        transition-all
                        duration-200
                        sm:min-h-[38px]
                        sm:px-2
                        sm:text-[10px]
                      "
                      style={{
                        color: active
                          ? "#EC5F8C"
                          : "#64748B",
                        border: active
                          ? "1.5px solid #F7769B"
                          : "1px solid #E5E7EB",
                        background: active
                          ? "#FFF1F5"
                          : "#FFFFFF",
                      }}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* WhatsApp action */}
          <div
            className="
              mt-auto
              w-full
              pt-7
            "
          >
            <ProductActions
              sku={product.sku}
              title={product.baseTitle}
              selectedSize={
                selectedSize
                  ? product.productSizes?.find(
                      (size) => size.id === selectedSize,
                    )?.label ?? selectedSize
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </article>
  );
}