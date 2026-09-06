"use client";

import { useEffect, useRef, useState } from "react";
import { Initials } from "@/components/BrandTile";
import { reviews } from "@/lib/data";

function Stars({ score, size = 14 }: { score: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={`${score} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, score - i));
        const id = `star-${i}-${Math.round(fill * 100)}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden>
            <defs>
              <linearGradient id={id}>
                <stop offset={`${fill * 100}%`} stopColor="#e8a33d" />
                <stop offset={`${fill * 100}%`} stopColor="#e6e1ef" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.6z"
              fill={`url(#${id})`}
            />
          </svg>
        );
      })}
    </span>
  );
}

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const average =
    reviews.reduce((total, review) => total + Number(review.score), 0) / reviews.length;

  const step = () => {
    const node = trackRef.current;
    const card = node?.firstElementChild as HTMLElement | null;
    if (!node || !card) return 0;
    const gap = parseFloat(getComputedStyle(node).columnGap || "0") || 0;
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

  const scrollBy = (direction: 1 | -1) => {
    const node = trackRef.current;
    const size = step();
    if (!node || !size) return;
    const perView = Math.max(1, Math.round(node.clientWidth / size));
    node.scrollBy({ left: direction * size * perView, behavior: "smooth" });
  };

  const goTo = (index: number) => {
    const node = trackRef.current;
    const size = step();
    if (!node || !size) return;
    node.scrollTo({ left: index * size, behavior: "smooth" });
  };

  return (
    <div className="min-w-0 w-full">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">
            What clients say
          </h2>
          <div className="mt-3 flex items-center gap-3">
            <Stars score={average} size={16} />
            <p className="text-sm text-ink-soft">
              <span className="font-medium text-ink">{average.toFixed(1)}</span> average ·{" "}
              {reviews.length} reviews
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3dbf1] bg-white text-ink-soft transition hover:border-[#d8ccec] hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="More reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3dbf1] bg-white text-ink-soft transition hover:border-[#d8ccec] hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-8 flex w-full min-w-0 snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain scroll-smooth sm:gap-5"
      >
        {reviews.map((review) => (
          <blockquote
            key={review.name}
            className="soft-card flex w-full min-w-full shrink-0 snap-start flex-col rounded-[22px] p-5 sm:min-w-0 sm:w-[calc(50%-0.75rem)] sm:rounded-[24px] sm:p-6 lg:w-[calc(33.333%-0.9rem)]"
          >
            <Stars score={Number(review.score)} />
            <p className="mt-4 flex-1 leading-7 text-ink-soft">“{review.quote}”</p>
            <footer className="mt-5 flex items-center gap-3 border-t border-[#efe8f6] pt-4">
              <Initials name={review.name} className="h-10 w-10" />
              <div className="text-sm">
                <p className="font-medium">{review.name}</p>
                <p className="text-ink-muted">{review.role}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 sm:hidden">
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to review ${index + 1}`}
            aria-current={index === active}
            className={`h-2 rounded-full transition-all ${
              index === active ? "w-6 bg-lavender-deep" : "w-2 bg-[#ddd6ec]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
