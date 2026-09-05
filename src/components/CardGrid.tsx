"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Cards that swipe one-per-screen on phones with dots underneath, and lay out
 * as a grid from md up — so a four-card section costs one screen on mobile.
 */
export function CardGrid({
  children,
  cols = 3,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
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
        const card = node.firstElementChild as HTMLElement | null;
        if (!card) return;
        const step = card.offsetWidth + 16;
        setActive(Math.round(node.scrollLeft / step));
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
    const card = node?.firstElementChild as HTMLElement | null;
    if (!node || !card) return;
    node.scrollTo({ left: index * (card.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className={`no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:gap-6 ${grid}`}
      >
        {items.map((child, index) => (
          <div key={index} className="w-full shrink-0 snap-center md:w-auto">
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex justify-center gap-2 md:hidden">
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
