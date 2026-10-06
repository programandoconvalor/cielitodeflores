"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  activeIndex: number;
  productTitle: string;
  sku: string;
  priceMxn: number;
  selectedSizeLabel?: string | undefined;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onChangeIndex: (index: number) => void;
};

export default function ProductImageLightbox({
  images,
  activeIndex,
  productTitle,
  sku,
  priceMxn,
  selectedSizeLabel,
  isOpen,
  onClose,
  onPrev,
  onNext,
  onChangeIndex,
}: Props) {
  const [index, setIndex] = useState(activeIndex ?? 0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastTouch = useRef<{ x: number; y: number } | null>(null);
  const pinchStart = useRef<number | null>(null);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  /**
   * Keep local image index synchronized with parent.
   */
  useEffect(() => {
    setIndex(activeIndex ?? 0);
  }, [activeIndex]);

  /**
   * Reset zoom when changing image or opening lightbox.
   */
  useEffect(() => {
    if (!isOpen) return;

    setScale(1);
    setTranslate({
      x: 0,
      y: 0,
    });
  }, [index, isOpen]);

  /**
   * Keyboard navigation.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (scale !== 1) return;

      if (event.key === "ArrowLeft") {
        prev();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, scale, index]);

  /**
   * Change image index.
   */
  const setImageIndex = (newIndex: number) => {
    if (images.length === 0) return;

    const boundedIndex = Math.max(
      0,
      Math.min(newIndex, images.length - 1),
    );

    setIndex(boundedIndex);
    onChangeIndex(boundedIndex);
  };

  /**
   * Previous image.
   */
  const prev = () => {
    if (index <= 0) return;

    setImageIndex(index - 1);
    onPrev();
  };

  /**
   * Next image.
   */
  const next = () => {
    if (index >= images.length - 1) return;

    setImageIndex(index + 1);
    onNext();
  };

  /**
   * Touch start:
   * - Swipe
   * - Pinch zoom
   */
  const onTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 1) {
      lastTouch.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };

      return;
    }

    if (event.touches.length === 2) {
      const [first, second] = [
        event.touches[0],
        event.touches[1],
      ];

      const dx = first.clientX - second.clientX;
      const dy = first.clientY - second.clientY;

      pinchStart.current = Math.hypot(dx, dy);
    }
  };

  /**
   * Touch move:
   * - Horizontal swipe
   * - Pinch zoom
   */
  const onTouchMove = (event: React.TouchEvent) => {
    if (
      event.touches.length === 1 &&
      lastTouch.current &&
      scale === 1
    ) {
      const dx =
        event.touches[0].clientX -
        lastTouch.current.x;

      const dy =
        event.touches[0].clientY -
        lastTouch.current.y;

      if (
        Math.abs(dx) > 30 &&
        Math.abs(dx) > Math.abs(dy)
      ) {
        if (dx > 0) {
          prev();
        } else {
          next();
        }

        lastTouch.current = null;
      }

      return;
    }

    if (event.touches.length === 2) {
      const [first, second] = [
        event.touches[0],
        event.touches[1],
      ];

      const dx = first.clientX - second.clientX;
      const dy = first.clientY - second.clientY;

      const distance = Math.hypot(dx, dy);

      if (pinchStart.current) {
        const ratio =
          distance / pinchStart.current;

        setScale((currentScale) =>
          Math.max(
            1,
            Math.min(
              4,
              currentScale * ratio,
            ),
          ),
        );
      }

      pinchStart.current = distance;
    }
  };

  /**
   * Touch end.
   */
  const onTouchEnd = () => {
    lastTouch.current = null;
    pinchStart.current = null;

    if (scale <= 1.01) {
      setScale(1);

      setTranslate({
        x: 0,
        y: 0,
      });
    }
  };

  /**
   * Ctrl + mouse wheel zoom.
   */
  const onWheel = (event: React.WheelEvent) => {
    if (!event.ctrlKey) return;

    event.preventDefault();

    const delta = -event.deltaY / 500;

    setScale((currentScale) =>
      Math.max(
        1,
        Math.min(
          4,
          currentScale + delta,
        ),
      ),
    );
  };

  if (!isOpen || images.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista previa de ${productTitle}`}
      className="
        fixed
        inset-0
        z-50
        flex
        flex-col
        overflow-hidden
        bg-gray-900
      "
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onWheel={onWheel}
    >
      {/* =====================================================
          CLOSE BUTTON
      ===================================================== */}
      <button
        type="button"
        aria-label="Cerrar galería"
        onClick={onClose}
        className="
          absolute
          right-4
          top-4
          z-30
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-pink-400
          text-2xl
          font-light
          leading-none
          text-white
          shadow-md
          transition
          hover:bg-pink-500
          active:scale-95
          sm:right-6
          sm:top-6
          sm:h-12
          sm:w-12
        "
      >
        <span className="-mt-0.5">×</span>
      </button>

      {/* =====================================================
          MAIN CONTENT
          IMAGE + PRODUCT INFORMATION
      ===================================================== */}
      <main
        className="
          flex
          min-h-0
          flex-1
          items-center
          justify-center
          overflow-y-auto
          bg-gray-900
          px-4
          py-8
          sm:px-8
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[900px]
            flex-col
            items-center
            justify-center
          "
        >
          {/* =================================================
              IMAGE
          ================================================= */}
          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center
            "
          >
            <img
              src={images[index]}
              alt={productTitle}
              className="
                max-h-[65vh]
                max-w-full
                select-none
                object-contain
                transition-transform
                duration-150
                sm:max-h-[68vh]
              "
              style={{
                transform: `
                  scale(${scale})
                  translate(
                    ${translate.x}px,
                    ${translate.y}px
                  )
                `,
              }}
              draggable={false}
            />

            {/* ===============================================
                PREVIOUS IMAGE
            =============================================== */}
            {images.length > 1 && index > 0 && (
              <button
                type="button"
                aria-label="Imagen anterior"
                onClick={prev}
                className="
                  absolute
                  left-0
                  top-1/2
                  hidden
                  h-12
                  w-12
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-3xl
                  font-light
                  text-gray-800
                  shadow-lg
                  transition
                  hover:bg-gray-100
                  md:flex
                "
              >
                ‹
              </button>
            )}

            {/* ===============================================
                NEXT IMAGE
            =============================================== */}
            {images.length > 1 &&
              index < images.length - 1 && (
                <button
                  type="button"
                  aria-label="Imagen siguiente"
                  onClick={next}
                  className="
                    absolute
                    right-0
                    top-1/2
                    hidden
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-3xl
                    font-light
                    text-gray-800
                    shadow-lg
                    transition
                    hover:bg-gray-100
                    md:flex
                  "
                >
                  ›
                </button>
              )}
          </div>

          {/* =================================================
              PRODUCT INFORMATION
              BELOW THE IMAGE
          ================================================= */}
          <div
            className="
              mt-4
              w-full
              text-center
            "
          >
            {/* Product title */}
            <h2
              className="
                text-base
                font-semibold
                leading-tight
                text-white
                sm:text-lg
              "
            >
              {productTitle}
            </h2>

            {/* SKU */}
            {sku && (
              <p
                className="
                  mt-1
                  text-xs
                  text-gray-300
                "
              >
                {sku}
              </p>
            )}

            {/* Selected size */}
            {selectedSizeLabel && (
              <p
                className="
                  mt-2
                  text-sm
                  text-gray-300
                "
              >
                {selectedSizeLabel}
              </p>
            )}

            {/* Price */}
            <p
              className="
                mt-2
                text-xl
                font-bold
                text-white
              "
            >
              ${priceMxn.toLocaleString("es-MX")}
            </p>

            {/* =================================================
                IMAGE INDICATORS
            ================================================= */}
            {images.length > 1 && (
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {images.map((_, imageIndex) => (
                  <button
                    key={imageIndex}
                    type="button"
                    aria-label={`Ver imagen ${
                      imageIndex + 1
                    }`}
                    onClick={() =>
                      setImageIndex(imageIndex)
                    }
                    className={`
                      h-2
                      rounded-full
                      transition-all
                      ${
                        imageIndex === index
                          ? "w-6 bg-pink-400"
                          : "w-2 bg-gray-500 hover:bg-gray-400"
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}