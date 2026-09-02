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

export function StepArrow({ direction = "right" }: { direction?: "right" | "left" }) {
  const toRight = direction === "right";
  const markerId = toRight ? "iso-arrow-right" : "iso-arrow-left";

  return (
    <div className="pointer-events-none relative -my-1 hidden h-[72px] w-full md:block" aria-hidden>
      <svg viewBox="0 0 800 80" className="h-full w-full" fill="none">
        <defs>
          <marker
            id={markerId}
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="6"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M1 1.8 L10.5 6 L1 10.2 Z" fill="#9b86bd" />
          </marker>
        </defs>
        <path
          d={
            toRight
              ? "M170 6 C 260 6, 360 18, 470 40 S 640 74, 720 74"
              : "M630 6 C 540 6, 440 18, 330 40 S 160 74, 80 74"
          }
          stroke="#9b86bd"
          strokeWidth="1.8"
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
      </svg>
    </div>
  );
}
