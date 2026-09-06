"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { end: 0, suffix: value };
  return { end: Number(match[1]), suffix: match[2] };
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}

function useCountUp(end: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(end * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration]);

  return value;
}

function StatValue({
  value,
  active,
  className,
}: {
  value: string;
  active: boolean;
  className: string;
}) {
  const { end, suffix } = parseStat(value);
  const count = useCountUp(end, active);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
}

/** Figures come from site.stats — update them there, not here. */
export function TrustBand() {
  const stats = site.stats;
  const { ref, active } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full rounded-[22px] bg-white sm:rounded-[28px]">
      <div className="overflow-hidden rounded-[22px] sm:rounded-[28px]">
        {/* Phones: stacked rows */}
        <ul className="divide-y divide-[#f1ecf8] sm:hidden">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 px-5 py-4"
            >
              <StatValue
                value={stat.value}
                active={active}
                className="font-display text-[22px] font-semibold tabular-nums leading-none text-lavender-deep"
              />
              <span className="text-[13px] leading-5 text-ink-muted">{stat.label}</span>
            </li>
          ))}
        </ul>

        {/* Tablet and up */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center bg-white px-4 py-7 text-center ${
                index === stats.length - 1 ? "sm:col-span-3 lg:col-span-1" : ""
              } ${index > 0 ? "sm:border-l sm:border-[#ece7f5]" : ""} ${
                index >= 3 ? "sm:border-t lg:border-t-0" : ""
              }`}
            >
              <StatValue
                value={stat.value}
                active={active}
                className="font-display text-3xl font-semibold tabular-nums leading-none text-lavender-deep lg:text-[32px]"
              />
              <p className="mt-2 max-w-[10rem] text-[13px] leading-5 text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
