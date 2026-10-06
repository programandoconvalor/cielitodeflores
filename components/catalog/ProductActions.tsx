"use client";

import React from "react";

type Props = {
  sku: string;
  title: string;
  selectedSize?: string | null;
};

export default function ProductActions({
  sku,
  title,
  selectedSize,
}: Props) {
  const sizeText = selectedSize
    ? ` - Tamaño: ${selectedSize.toUpperCase()}`
    : "";

  const href = `https://wa.me/?text=${encodeURIComponent(
    `Hola, quiero solicitar información sobre ${title} (${sku})${sizeText}`,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Pedir información sobre ${title}`}
      className="
        inline-flex
        h-10
        w-full
        items-center
        justify-center
        gap-2
        rounded-full
        whitespace-nowrap
        bg-[#22c55e]
        px-2.5
        text-center
        text-[11px]
        font-semibold
        text-white
        shadow-[0_6px_14px_rgba(29,200,90,0.35)]
        transition-colors
        duration-200
        hover:bg-[#16a34a]
        hover:shadow-[0_10px_20px_rgba(29,200,90,0.42)]
        active:scale-[0.99]
        sm:px-4
        sm:text-[12px]
      "
    >
      <img
        src="/images/shared/whatsapp.png"
        alt=""
        aria-hidden="true"
        className="h-4 w-4 shrink-0 object-contain"
      />
      <span className="whitespace-nowrap">
        Pedir información
      </span>
    </a>
  );
}