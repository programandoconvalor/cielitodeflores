
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
        flex
        min-h-10
        w-full
        min-w-0
        items-center
        justify-center
        gap-1.5
        rounded-full
        bg-[#22c55e]
        px-2
        py-2
        text-center
        text-[10px]
        font-bold
        leading-tight
        text-white
        shadow-[0_6px_14px_rgba(29,200,90,0.30)]
        transition-colors
        duration-200
        hover:bg-[#16a34a]
        hover:shadow-[0_10px_20px_rgba(29,200,90,0.42)]
        active:scale-[0.99]
        sm:gap-2
        sm:px-3
        sm:text-[11px]
        md:text-xs
      "
    >
      <img
        src="/images/shared/whatsapp.png"
        alt=""
        aria-hidden="true"
        className="h-4 w-4 shrink-0 object-contain"
      />

      <span className="min-w-0 whitespace-normal">
        PEDIR POR WHATSAPP
      </span>
    </a>
  );
}
