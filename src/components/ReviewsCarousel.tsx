"use client";

import { useRef } from "react";
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

  const average =
    reviews.reduce((total, review) => total + Number(review.score), 0) / reviews.length;

  const scrollBy = (direction: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    const card = node.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(node).columnGap || "20") || 20;
    const stepWidth = card.offsetWidth + gap;
    const perView = Math.max(1, Math.round(node.clientWidth / stepWidth));
    node.scrollBy({ left: direction * stepWidth * perView, behavior: "smooth" });
  };

  return (
    <div>
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

        <div className="flex items-center gap-2">
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
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-3 pt-1"
      >
        {reviews.map((review) => (
          <blockquote
            key={review.name}
            className="soft-card flex w-[calc(100%-0.5rem)] shrink-0 snap-start flex-col rounded-[24px] p-6 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.9rem)]"
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
    </div>
  );
}
