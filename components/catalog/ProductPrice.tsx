"use client";

import React from "react";

type Props = {
  price: number;
};

export default function ProductPrice({ price }: Props) {
  return (
    <div className="min-w-0">
      <p
        className="
          mt-1
          whitespace-nowrap
          text-[17px]
          font-bold
          leading-none
          text-[#1a1a1a]
          md:text-[18px]
        "
      >
        ${price.toLocaleString("es-MX")}
        <sup className="text-[9px] font-semibold">00</sup>

        <span className="ml-0.5 text-[9px] font-medium text-[#888]">
          {" "}mxn
        </span>
      </p>
    </div>
  );
}