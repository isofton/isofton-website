export function Shapes({ variant = "page" }: { variant?: "page" | "hero" | "process" }) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="blob float-a -left-16 top-8 h-56 w-56 bg-[#c9b8e6]/35" />
        <span className="blob float-b right-0 top-10 h-48 w-48 bg-[#7ec8e8]/25" />
        <span className="blob float-c bottom-0 left-1/3 h-40 w-64 bg-[#d8d4ee]/30" />
        <span className="absolute right-16 top-24 h-24 w-24 rounded-full border border-[#c9b8e6]/50" />
        <span className="absolute bottom-10 right-1/4 h-16 w-16 rounded-full border border-[#7ec8e8]/40" />
      </div>
    );
  }

  if (variant === "process") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="blob float-b -left-20 top-20 h-72 w-72 bg-[#c9b8e6]/20" />
        <span className="blob float-a -right-16 bottom-10 h-64 w-64 bg-[#7ec8e8]/18" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="blob float-a left-[8%] top-10 h-40 w-40 bg-[#c9b8e6]/22" />
      <span className="blob float-b right-[6%] top-24 h-48 w-48 bg-[#7ec8e8]/18" />
    </div>
  );
}

export function StepArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 180 48"
      className={`mx-auto hidden h-10 w-40 text-[#9b86bd]/70 md:block ${flip ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M8 36 C 50 8, 130 8, 172 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M160 18 l14 12 -16 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
