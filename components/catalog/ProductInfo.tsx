"use client";

import React from "react";

type Props = {
  product: any;
  subtitle?: string;
};

export default function ProductInfo({
  product,
  subtitle: subtitleProp,
}: Props) {
  const title: string =
    product?.baseTitle ??
    product?.title ??
    "";

  const subtitle: string | undefined =
    subtitleProp ?? product?.subtitle ?? undefined;

  return (
    <div className="min-w-0">
      {/* Product title */}
      <h3
        className="
          line-clamp-2
          w-full
          text-left
          text-[13px]
          font-medium
          leading-[1.35]
          text-[#4a4a4a]
          break-words
          md:text-[14px]
        "
        title={title}
      >
        {title}
      </h3>

      {/* Optional product subtitle */}
      {subtitle && (
        <p
          className="
            mt-0.5
            w-full
            text-left
            text-[10px]
            font-normal
            leading-[1.25]
            text-[#64748B]
            break-words
          "
          title={subtitle}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}