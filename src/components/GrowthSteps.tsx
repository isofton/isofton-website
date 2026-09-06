"use client";

import { useEffect, useRef, useState } from "react";
import { BrandTile, type TileIcon, type TileTone } from "@/components/BrandTile";
import { Reveal } from "@/components/Reveal";

const stages: {
  title: string;
  body: string;
  role: string;
  gain: string;
  icon: TileIcon;
  tone: TileTone;
  tab: string;
}[] = [
  {
    tab: "Find",
    title: "We find what is slowing you down",
    body: "A week with your team, counting where the hours go and which handoffs leak.",
    role: "We write a costed plan before anyone writes code.",
    gain: "You know what to build first — and what not to pay for.",
    icon: "board",
    tone: "lavender",
  },
  {
    tab: "Build",
    title: "We build the tool that carries the work",
    body: "The app, portal, or dashboard your team opens every morning instead of a spreadsheet.",
    role: "We design, build, and demo it every Friday.",
    gain: "The same team gets through more, without new hires.",
    icon: "saas",
    tone: "cyan",
  },
  {
    tab: "AI",
    title: "We add AI only where it saves hours",
    body: "An assistant on your own data — drafting quotes, reading documents, answering the first pass.",
    role: "We ground it in your content and check its answers.",
    gain: "Repeat typing stops being someone's whole afternoon.",
    icon: "ai",
    tone: "coral",
  },
  {
    tab: "Grow",
    title: "We stay while it grows",
    body: "The first weeks after launch decide whether a product sticks, so we watch them with you.",
    role: "We cut what missed and extend what worked.",
    gain: "A system that grows into new teams, branches, or markets.",
    icon: "ml",
    tone: "lavender",
  },
];

const lift = ["lg:mt-16", "lg:mt-11", "lg:mt-6", "lg:mt-0"];

export function GrowthSteps() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = node.clientWidth;
        if (!width) return;
        setActive(Math.min(stages.length - 1, Math.max(0, Math.round(node.scrollLeft / width))));
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

  return (
    <div className="min-w-0 w-full">
      {/* Mobile: stage tabs */}
      <div
        className="mb-5 grid grid-cols-4 gap-1.5 rounded-2xl border border-[#ebe4f4] bg-white/80 p-1.5 md:hidden"
        role="tablist"
        aria-label="Growth stages"
      >
        {stages.map((stage, index) => {
          const selected = index === active;
          return (
            <button
              key={stage.tab}
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
              {stage.tab}
            </button>
          );
        })}
      </div>

      {/* Mobile: one full-width card; desktop: grid */}
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth md:grid md:grid-cols-2 md:gap-5 md:overflow-visible lg:grid-cols-4 lg:items-end xl:gap-6"
        role="region"
        aria-label="How we grow with you"
      >
        {stages.map((stage, index) => (
          <Reveal
            key={stage.title}
            className={`relative w-full min-w-full shrink-0 snap-start md:min-w-0 md:w-auto ${lift[index]}`}
            delay={index * 90}
          >
            {index < stages.length - 1 && (
              <span
                className="absolute -right-[18px] top-[68px] z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-[#e6dff3] bg-white text-lavender-deep shadow-sm lg:flex"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M5 12h13M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
            <article className="soft-card flex h-full flex-col overflow-hidden rounded-[22px] sm:rounded-[24px]">
              <BrandTile icon={stage.icon} tone={stage.tone} className="h-24 sm:h-32" />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-lavender-deep">
                  Stage {index + 1} of {stages.length}
                </p>
                <h3 className="mt-2 font-display text-[19px] font-medium leading-snug text-ink sm:text-xl">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{stage.body}</p>

                <dl className="mt-5 space-y-3 border-t border-[#efe8f6] pt-4 text-sm">
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                      Our part
                    </dt>
                    <dd className="mt-1 leading-6 text-ink-soft">{stage.role}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                      What changes for you
                    </dt>
                    <dd className="mt-1 flex gap-2 leading-6 text-ink">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4aa8d4]"
                        aria-hidden
                      />
                      {stage.gain}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Mobile dots */}
      <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
        {stages.map((stage, index) => (
          <button
            key={stage.tab}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to stage ${index + 1}`}
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
