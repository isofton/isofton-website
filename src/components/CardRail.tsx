"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";

/**
 * A horizontal card rail: one card per screen on phones with dots underneath,
 * two or three per view from tablet up, with arrows. Scrolls by whole pages so
 * a card is never left half-cut.
 */
export function CardRail({
  children,
  ariaLabel,
  perView = 3,
}: {
  children: ReactNode;
  ariaLabel: string;
  perView?: 2 | 3 | 4;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);

  const width = {
    2: "w-full sm:w-[calc(50%-0.625rem)]",
    3: "w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.9rem)]",
    4: "w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.94rem)]",
  }[perView];

  const step = () => {
    const node = trackRef.current;
    const card = node?.firstElementChild as HTMLElement | null;
    if (!node || !card) return 0;
    const gap = parseFloat(getComputedStyle(node).columnGap || "20") || 20;
    return card.offsetWidth + gap;
  };

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const size = step();
        if (size) setActive(Math.round(node.scrollLeft / size));
      });
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      node.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const node = trackRef.current;
    const size = step();
    if (!node || !size) return;
    const pages = Math.max(1, Math.round(node.clientWidth / size));
    node.scrollBy({ left: direction * size * pages, behavior: "smooth" });
  };

  const goTo = (index: number) => {
    const node = trackRef.current;
    const size = step();
    if (!node || !size) return;
    node.scrollTo({ left: index * size, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4 hidden justify-end gap-2 sm:flex">
        {([-1, 1] as const).map((direction) => (
          <button
            key={direction}
            type="button"
            onClick={() => scrollByPage(direction)}
            aria-label={direction === -1 ? `Previous ${ariaLabel}` : `More ${ariaLabel}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3dbf1] bg-white text-ink-soft transition hover:border-[#d8ccec] hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d={direction === -1 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-3 pt-1 sm:mx-0 sm:px-1 xl:gap-6"
        role="region"
        aria-label={ariaLabel}
      >
        {items.map((child, index) => (
          <div key={index} className={`${width} shrink-0 snap-center sm:snap-start`}>
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex justify-center gap-2 sm:hidden">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${ariaLabel} ${index + 1}`}
              aria-current={index === active}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-6 bg-lavender-deep" : "w-2 bg-[#ddd6ec]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
