"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Product = {
  id: "erp" | "crm" | "app";
  tab: string;
  image: string;
  alt: string;
  title: string;
  points: string[];
  code: { text: string; tone?: "key" | "str" | "fn" | "mute" }[][];
};

const products: Product[] = [
  {
    id: "erp",
    tab: "ERP",
    image: "/images/photos/service-ml.jpg",
    alt: "An ERP dashboard showing stock and order data",
    title: "One system for stock, orders and billing",
    points: [
      "Live stock across every branch",
      "Order to invoice in one flow",
      "No more parallel spreadsheets",
    ],
    code: [
      [
        { text: "const", tone: "key" },
        { text: " low = " },
        { text: "await", tone: "key" },
        { text: " stock." },
        { text: "belowReorder", tone: "fn" },
        { text: "()" },
      ],
      [
        { text: "await", tone: "key" },
        { text: " purchase." },
        { text: "draft", tone: "fn" },
        { text: "(low)" },
      ],
    ],
  },
  {
    id: "crm",
    tab: "CRM",
    image: "/images/photos/work-saas.jpg",
    alt: "A CRM dashboard open on a laptop",
    title: "Every lead in one pipeline, nothing forgotten",
    points: [
      "Leads, quotes and follow-ups",
      "Who owns what, and by when",
      "Reports your sales lead trusts",
    ],
    code: [
      [
        { text: "const", tone: "key" },
        { text: " stale = deals." },
        { text: "idleFor", tone: "fn" },
        { text: "(" },
        { text: "'7d'", tone: "str" },
        { text: ")" },
      ],
      [
        { text: "ai." },
        { text: "followUp", tone: "fn" },
        { text: "(stale)" },
        { text: "  // reviewed by a human", tone: "mute" },
      ],
    ],
  },
  {
    id: "app",
    tab: "App",
    image: "/images/photos/work-field.jpg",
    alt: "A field service app open on a phone",
    title: "The tool your team opens on the floor",
    points: [
      "Works offline, syncs when back",
      "Photos, signatures, checklists",
      "iOS and Android from one build",
    ],
    code: [
      [
        { text: "await", tone: "key" },
        { text: " queue." },
        { text: "sync", tone: "fn" },
        { text: "({ offline: " },
        { text: "true", tone: "key" },
        { text: " })" },
      ],
      [
        { text: "job." },
        { text: "close", tone: "fn" },
        { text: "(" },
        { text: "'#4821'", tone: "str" },
        { text: ")" },
      ],
    ],
  },
];

const TONES: Record<string, string> = {
  key: "#8a6fc4",
  str: "#3f8fae",
  fn: "#c9705a",
  mute: "#a7a3b5",
};

function RobotMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3.2v2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="2.6" r="1.1" fill="currentColor" />
      <rect
        x="4.4"
        y="6.4"
        width="15.2"
        height="11.4"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="9.4" cy="11.6" r="1.25" fill="currentColor" className="robot-eye" />
      <circle cx="14.6" cy="11.6" r="1.25" fill="currentColor" className="robot-eye" />
      <path d="M9.8 14.9h4.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M2.4 10.4v3.4M21.6 10.4v3.4M9.2 17.8v2.6M14.8 17.8v2.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ROTATE = 6000;

export function HeroVisual() {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (held || reduced) return;
    timer.current = window.setInterval(() => setActive((i) => (i + 1) % products.length), ROTATE);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [held, reduced]);

  const product = products[active];

  return (
    <div
      className="relative isolate"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      {/* Soft glow behind — clipped separately so it never stains the card edge */}
      <div className="pointer-events-none absolute inset-3 -z-10 overflow-hidden rounded-[28px]" aria-hidden>
        <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full bg-[#dcd0f3]/45 blur-3xl" />
        <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-[#c8e7f5]/40 blur-3xl" />
      </div>

      {/* Shadow on outer shell; overflow clip on inner — avoids dark corner fringe */}
      <div className="rounded-[20px] bg-white shadow-[0_16px_40px_-24px_rgba(76,61,110,0.22)] sm:rounded-[26px] sm:shadow-[0_22px_50px_-28px_rgba(76,61,110,0.2)]">
        <div className="overflow-hidden rounded-[20px] ring-1 ring-[#e8e2f2]/90 sm:rounded-[26px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-3.5 pt-3.5 sm:px-6 sm:pt-6">
          <p className="flex min-w-0 items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-ink-muted sm:gap-2 sm:text-[10px] sm:tracking-[0.16em]">
            <RobotMark className="h-4 w-4 shrink-0 text-lavender-deep sm:h-5 sm:w-5" />
            <span className="truncate">
              Software <span className="text-lavender-deep">+</span> AI
            </span>
          </p>
          <div
            className="flex shrink-0 items-center gap-0.5 rounded-full bg-[#f4f2fa] p-0.5 sm:gap-1 sm:p-1"
            role="tablist"
            aria-label="What we build"
          >
            {products.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                onClick={() => setActive(index)}
                className={`rounded-full px-2 py-1.5 text-[10px] font-medium transition sm:px-3 sm:text-xs ${
                  index === active ? "bg-white text-ink shadow-sm" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Photo with glass overlays */}
        <div className="relative mx-3.5 mt-3 h-44 overflow-hidden rounded-[16px] bg-[#f1eef8] sm:mx-6 sm:mt-4 sm:h-64 sm:rounded-[20px]">
          {products.map((item, index) => (
            <Image
              key={item.id}
              src={item.image}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 560px, 100vw"
              className={`object-cover transition-opacity duration-700 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <span
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(246,243,253,0.42) 0%, rgba(255,255,255,0.08) 40%, rgba(214,236,247,0.42) 100%)",
            }}
            aria-hidden
          />

          {/* Code snippet */}
          <div
            key={`code-${product.id}`}
            className="hero-fade absolute right-3 top-3 hidden max-w-[62%] rounded-xl border border-white/70 bg-white/90 px-3 py-2.5 shadow-card backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-1.5 pb-1.5" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9b8e6]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#7ec8e8]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#f0a08c]" />
            </div>
            {product.code.map((line, i) => (
              <p key={i} className="font-mono text-[10.5px] leading-5 text-ink-soft">
                {line.map((token, t) => (
                  <span key={t} style={token.tone ? { color: TONES[token.tone] } : undefined}>
                    {token.text}
                  </span>
                ))}
              </p>
            ))}
          </div>

        </div>

        {/* Copy */}
        <div key={`copy-${product.id}`} className="hero-fade px-3.5 pt-3.5 sm:px-6 sm:pt-4">
          <p className="font-display text-base font-medium leading-snug text-ink sm:text-lg">
            {product.title}
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
            {product.points.map((point) => (
              <li key={point} className="flex items-center gap-1.5 text-xs text-ink-soft">
                <span className="h-1 w-1 rounded-full bg-lavender-deep" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-3.5 flex items-center justify-between gap-3 border-t border-[#eee9f6] px-3.5 py-3.5 sm:mt-4 sm:px-6 sm:py-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              Your goal
            </p>
            <p className="mt-0.5 font-display text-sm font-medium text-ink">
              More work handled, same team
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full bg-lavender-mist px-3 py-1.5">
            <span className="text-[10px] font-medium uppercase tracking-wide text-lavender-deep">
              Live in
            </span>
            <span className="font-display text-sm font-medium text-ink">6–12 weeks</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
