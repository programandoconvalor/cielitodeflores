"use client";

import React, { useEffect, useState } from "react";

type Props = {
  sku: string;
  title: string;
  price: number;
  fallbackPrice?: number;
  selectedSize?: string | null;
  imageUrl?: string;
};

export default function ProductActions({
  sku,
  title,
  price,
  fallbackPrice,
  selectedSize,
  imageUrl,
}: Props) {
  const phoneNumber = "527225141995";
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const validPrice = [price, fallbackPrice].find(
    (value) =>
      value !== null &&
      value !== undefined &&
      Number.isFinite(Number(value)) &&
      Number(value) > 0,
  );

  const formattedPrice =
    validPrice !== undefined
      ? new Intl.NumberFormat("es-MX", {
          style: "currency",
          currency: "MXN",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(Number(validPrice))
      : "Precio por confirmar";

  const lines = [
    "Hola, quiero solicitar información sobre este producto:",
    "",
    `Producto: ${title}`,
    `Código: ${sku}`,
    `Precio: ${formattedPrice}`,
  ];

  if (selectedSize) {
    lines.push(`Tamaño: ${selectedSize}`);
  }

  if (imageUrl) {
    const absoluteImageUrl = imageUrl.startsWith("http")
      ? imageUrl
      : origin
        ? new URL(imageUrl, origin).href
        : imageUrl;

    lines.push("", `Imagen: ${absoluteImageUrl}`);
  }

  const message = lines.join("\n");

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
