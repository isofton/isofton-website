"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";

/**
 * One full-width card on phones with optional tabs + dots; grid from md up.
 */
export function CardGrid({
  children,
  cols = 3,
  tabs,
  ariaLabel = "Cards",
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  /** Short labels for mobile tabs (same length as children). */
  tabs?: string[];
  ariaLabel?: string;
}) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const grid = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[cols];

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = node.clientWidth;
        if (!width) return;
        setActive(Math.round(node.scrollLeft / width));
      });
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      node.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index: number) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollTo({ left: index * node.clientWidth, behavior: "smooth" });
    setActive(index);
  };

  const showTabs = tabs && tabs.length === items.length;

  return (
    <div className="min-w-0 w-full">
      {showTabs && (
        <div
          className="mb-5 grid gap-1.5 rounded-2xl border border-[#ebe4f4] bg-white/80 p-1.5 md:hidden"
          style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
          role="tablist"
          aria-label={ariaLabel}
        >
          {tabs.map((label, index) => {
            const selected = index === active;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => goTo(index)}
                className={`rounded-xl px-1 py-2.5 text-center text-[12px] leading-tight transition sm:text-sm ${
                  selected
                    ? "bg-[#6f5b9a] font-medium text-white shadow-sm"
                    : "text-ink-soft"
                }`}
              >
                <span className="block text-[10px] opacity-70">{index + 1}</span>
                {label}
              </button>
            );
          })}
        </div>
      )}

      <div
        ref={trackRef}
        className={`no-scrollbar flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth md:grid md:gap-5 md:overflow-visible xl:gap-6 ${grid}`}
        role="region"
        aria-label={ariaLabel}
      >
        {items.map((child, index) => (
          <div key={index} className="w-full min-w-full shrink-0 snap-start md:min-w-0 md:w-auto">
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to card ${index + 1}`}
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
