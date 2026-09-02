import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export function Logo({ compact = false, tone = "light" }: LogoProps) {
  const text = tone === "dark" ? "text-white" : "text-ink";
  const sub = tone === "dark" ? "text-white/55" : "text-lavender-deep";
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="iSofton home">
      <Mark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      <span className="leading-none">
        <span className={`block font-display text-[17px] font-semibold tracking-tight ${text}`}>
          iSofton
        </span>
        {!compact && (
          <span className={`mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] sm:block ${sub}`}>
            Software · Solutions
          </span>
        )}
      </span>
    </Link>
  );
}

export function Mark({ className = "h-16 w-16" }: { className?: string }) {
  const uid = className.replace(/[^a-z0-9]/gi, "") || "mark";
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-1`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#b9a6e0" />
          <stop offset="100%" stopColor="#8f7cc4" />
        </linearGradient>
        <linearGradient id={`${uid}-2`} x1="0%" y1="20%" x2="100%" y2="90%">
          <stop offset="0%" stopColor="#f6b3a3" />
          <stop offset="100%" stopColor="#e57a6a" />
        </linearGradient>
        <linearGradient id={`${uid}-3`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#9ad8f0" />
          <stop offset="100%" stopColor="#5bb4d8" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="38" r="32" fill={`url(#${uid}-1)`} opacity="0.78" />
      <circle cx="42" cy="74" r="32" fill={`url(#${uid}-2)`} opacity="0.78" />
      <circle cx="78" cy="74" r="32" fill={`url(#${uid}-3)`} opacity="0.78" />
    </svg>
  );
}
