"use client";

import { useEffect, useRef, useState } from "react";

type Category = {
  id: string;
  label: string;
};

type Branding = {
  businessType: string;
  businessName: string;
  sectionLabel: string;
  logoSrc: string;
};

type Props = {
  title?: string;
  branding: Branding;
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
};

function renderCategoryIcon(categoryId: string) {
  const baseProps = {
    className: "h-3.5 w-3.5 text-[#F7769B] md:h-4 md:w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (categoryId) {
    case "all":
      return (
        <svg {...baseProps}>
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z" />
        </svg>
      );

    case "rosas":
      return (
        <svg {...baseProps}>
          <path d="M12 14c-3.8 0-6-2-6-4.6A5.8 5.8 0 0 1 12 3.5a5.8 5.8 0 0 1 6 5.9c0 2.6-2.2 4.6-6 4.6Z" />
          <path d="M12 11.5c-1.6 0-2.5-.8-2.5-1.9A2.5 2.5 0 0 1 12 7a2.5 2.5 0 0 1 2.5 2.6c0 1.1-.9 1.9-2.5 1.9Zm0 2.5v7m0-3c-1.8-2-3.8-2.2-5.2-1.3 1.1 2.2 3 3 5.2 2.4m0-1.1c1.8-2 3.8-2.2 5.2-1.3-1.1 2.2-3 3 5.2 2.4" />
        </svg>
      );

    case "gerberas":
      return (
        <svg {...baseProps}>
          <ellipse cx="12" cy="5.3" rx="1.5" ry="3" />
          <ellipse cx="12" cy="18.7" rx="1.5" ry="3" />
          <ellipse cx="5.3" cy="12" rx="3" ry="1.5" />
          <ellipse cx="18.7" cy="12" rx="3" ry="1.5" />

          <ellipse
            cx="7.3"
            cy="7.3"
            rx="1.4"
            ry="2.8"
            transform="rotate(-45 7.3 7.3)"
          />

          <ellipse
            cx="16.7"
            cy="16.7"
            rx="1.4"
            ry="2.8"
            transform="rotate(-45 16.7 16.7)"
          />

          <ellipse
            cx="16.7"
            cy="7.3"
            rx="1.4"
            ry="2.8"
            transform="rotate(45 16.7 7.3)"
          />

          <ellipse
            cx="7.3"
            cy="16.7"
            rx="1.4"
            ry="2.8"
            transform="rotate(45 7.3 16.7)"
          />

          <circle cx="12" cy="12" r="2.4" />
        </svg>
      );

    case "corazones":
      return (
        <svg {...baseProps}>
          <path d="M20.8 8.8c0 4.1-8.8 10.2-8.8 10.2S3.2 12.9 3.2 8.8A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.8 2.8Z" />
        </svg>
      );

    case "girasoles":
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="11" r="4" />
          <circle cx="12" cy="11" r="1.6" />
          <path d="M12 1.8v2m0 14.4v2m10.2-9.2h-2m-16.4 0h-2m17.4-7.2-1.4 1.4M6.2 16.8l-1.4 1.4m14.4 0-1.4-1.4M6.2 5.2 4.8 3.8M12 15v7m0-3c-1.8-2-3.8-2.2-5.2-1.3 1.1 2.2 3 3 5.2 2.4m0-1.1c1.8-2 3.8-2.2-5.2 2.4" />
        </svg>
      );

    case "combinados":
      return (
        <svg {...baseProps}>
          <circle cx="7" cy="6.5" r="1.2" />
          <circle cx="4.8" cy="6.5" r="1" />
          <circle cx="9.2" cy="6.5" r="1" />
          <circle cx="7" cy="4.3" r="1" />
          <circle cx="7" cy="8.7" r="1" />

          <circle cx="17" cy="6.5" r="1.2" />
          <circle cx="14.8" cy="6.5" r="1" />
          <circle cx="19.2" cy="6.5" r="1" />
          <circle cx="17" cy="4.3" r="1" />
          <circle cx="17" cy="8.7" r="1" />

          <path d="M12 5v3m-5 2 5 9m5-9-5 9m-5-9 5 5 5-5m-5 9v2m-2-4h4" />
        </svg>
      );

    default:
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

export default function CatalogHeader({
  branding,
  categories,
  activeId,
  onSelect,
}: Props) {
  const categoryScrollRef = useRef<HTMLDivElement | null>(null);

  const [categoryScrollEdges, setCategoryScrollEdges] = useState({
    left: false,
    right: false,
  });

  const [hasScrolledCategories, setHasScrolledCategories] = useState(false);

  useEffect(() => {
    const scrollContainer = categoryScrollRef.current;

    if (!scrollContainer) return;

    const updateScrollEdges = () => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      setCategoryScrollEdges({
        left: scrollContainer.scrollLeft > 1,
        right: maxScrollLeft - scrollContainer.scrollLeft > 1,
      });
    };

    updateScrollEdges();

    scrollContainer.addEventListener("scroll", updateScrollEdges, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollEdges);

    const resizeObserver = new ResizeObserver(updateScrollEdges);

    resizeObserver.observe(scrollContainer);

    if (scrollContainer.firstElementChild) {
      resizeObserver.observe(scrollContainer.firstElementChild);
    }

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollEdges);
      window.removeEventListener("resize", updateScrollEdges);
      resizeObserver.disconnect();
    };
  }, [categories.length]);

  const scrollCategories = (direction: -1 | 1) => {
    const scrollContainer = categoryScrollRef.current;

    if (!scrollContainer) return;

    scrollContainer.scrollBy({
      left: direction * Math.max(160, scrollContainer.clientWidth * 0.7),
      behavior: "smooth",
    });
  };

  return (
    <header
      className="sticky top-0 z-40 border-b border-[#FCE7F3] bg-white backdrop-blur-sm"
      style={{ boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)" }}
    >
      <div className="mx-auto flex max-w-[1460px] items-center justify-between gap-2 px-4 py-3 md:gap-4 md:px-10 md:py-7">
        <div className="flex min-w-0 items-center gap-2 md:gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden border border-[#FCE7F3] bg-white shadow-[0_0_0_1px_rgba(247,118,155,0.08)] md:h-[78px] md:w-[78px]">
            <img
              src={branding.logoSrc}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#64748B] md:text-[12px] md:tracking-[0.42em]">
              {branding.businessType}
            </p>

            <h1 className="truncate text-[1.35rem] font-semibold leading-none text-[#0F172A] md:text-[clamp(1.5rem,5vw,3.2rem)]">
              {branding.businessName}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1460px] px-4 pb-3 md:px-10 md:pb-6">
        <div className="mt-2 flex items-center justify-between md:mt-4">
          <div>
            <h5
              className="font-sans font-medium text-[#1F2937]"
              style={{ fontSize: "clamp(1.25rem, 5vw, 1.25rem)" }}
            >
              Colecciones
            </h5>

            <div className="mt-2 h-0.5 w-14 rounded bg-[#F7769B] md:mt-3" />
          </div>
        </div>

        <div className="mt-2 px-0 md:mt-4">
          <div className="relative mt-1 w-full py-0.5 md:mt-2 md:py-2">
            <div
              ref={categoryScrollRef}
              role="region"
              aria-label="Categorías del catálogo. Desplázate horizontalmente para ver más categorías."
              tabIndex={0}
              onScroll={() => setHasScrolledCategories(true)}
              onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return;

                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  scrollCategories(-1);
                } else if (event.key === "ArrowRight") {
                  event.preventDefault();
                  scrollCategories(1);
                }
              }}
              className="overflow-x-auto no-scrollbar focus-visible:outline-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex w-max min-w-full items-center justify-start gap-2 whitespace-nowrap pl-0 md:gap-3 md:pl-2">
                {categories.map((cat) => {
                  const isActive = cat.id === activeId;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => onSelect(cat.id)}
                      className={`group inline-flex items-center gap-1.5 rounded-[20px] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 md:gap-2 md:px-4 md:py-2 md:text-xs lg:text-sm ${
                        isActive
                          ? "border-2 border-[#F7769B] bg-[#FCE7F3] text-[#F7769B] shadow-[0_2px_8px_rgba(247,118,155,0.18)]"
                          : "border border-[#FBCFE8] bg-white text-[#64748B] shadow-[0_1px_3px_rgba(15,23,42,0.05)] hover:border-[#F7769B] hover:bg-[#FFF7FA] hover:text-[#F7769B] hover:shadow-[0_2px_6px_rgba(247,118,155,0.12)]"
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      {renderCategoryIcon(cat.id)}

                      <span className="whitespace-nowrap">
                        {cat.label.toUpperCase()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-white to-transparent transition-opacity ${
                categoryScrollEdges.left ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-white to-transparent transition-opacity ${
                categoryScrollEdges.right ? "opacity-100" : "opacity-0"
              }`}
            />

            <button
              type="button"
              aria-label="Desplazar categorías a la izquierda"
              onClick={() => scrollCategories(-1)}
              disabled={!categoryScrollEdges.left}
              className={`absolute left-0 top-1/2 z-10 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center text-[#F7769B] transition-opacity disabled:pointer-events-none ${
                categoryScrollEdges.left ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Desplazar categorías a la derecha"
              onClick={() => scrollCategories(1)}
              disabled={!categoryScrollEdges.right}
              className={`absolute right-0 top-1/2 z-10 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center text-[#F7769B] transition-opacity disabled:pointer-events-none ${
                categoryScrollEdges.right ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {!hasScrolledCategories && categoryScrollEdges.right && (
            <div className="mt-1 flex items-center justify-center gap-1.5 text-[10px] text-[#F7769B]/70 md:hidden">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 motion-safe:animate-pulse motion-reduce:animate-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 12V5a1.5 1.5 0 0 1 3 0v6-2a1.5 1.5 0 0 1 3 0v2-1a1.5 1.5 0 0 1 3 0v5c0 3.3-2.2 5.5-5.5 5.5h-1c-1.8 0-3.1-.8-4.2-2.2L4.8 16a1.5 1.5 0 0 1 2.4-1.8L8 15" />
              </svg>

              <span>Desliza para ver más categorías</span>

              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 motion-safe:animate-pulse motion-reduce:animate-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}