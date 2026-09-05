import Image from "next/image";
import { TileArt, type TileIcon } from "@/components/TileArt";

export type { TileIcon };
export type TileTone = "lavender" | "cyan" | "coral";

const TONES: Record<
  TileTone,
  { from: string; to: string; ink: string; mid: string; soft: string; blob: string }
> = {
  lavender: {
    from: "#f5f1fd",
    to: "#e2d8f7",
    ink: "#6f5b9a",
    mid: "#a793cf",
    soft: "#ddd2f4",
    blob: "rgba(201,184,230,0.5)",
  },
  cyan: {
    from: "#eff8fc",
    to: "#d6ecf7",
    ink: "#33809f",
    mid: "#7cc3e0",
    soft: "#cfe9f6",
    blob: "rgba(126,200,232,0.45)",
  },
  coral: {
    from: "#fef3ef",
    to: "#f9ded5",
    ink: "#c1614c",
    mid: "#eda58f",
    soft: "#f8d8cd",
    blob: "rgba(240,160,140,0.4)",
  },
};

export function BrandTile({
  icon,
  tone = "lavender",
  label,
  className = "",
}: {
  icon: TileIcon;
  tone?: TileTone;
  label?: string;
  className?: string;
}) {
  const palette = TONES[tone];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(140deg, ${palette.from} 0%, ${palette.to} 100%)` }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full blur-2xl"
        style={{ background: palette.blob }}
      />
      <span
        className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full blur-2xl"
        style={{ background: palette.blob, opacity: 0.6 }}
      />
      <span className="absolute inset-0 flex items-center justify-center p-5 sm:p-6">
        <TileArt icon={icon} palette={palette} />
      </span>
      {label && (
        <span
          className="absolute bottom-3 left-4 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide backdrop-blur-sm"
          style={{ color: palette.ink }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * A photographic tile: the image fills the frame, with a light brand wash over it
 * so photos sit inside the palette instead of fighting it.
 */
export function PhotoTile({
  src,
  alt,
  tone = "lavender",
  label,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  tone?: TileTone;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const palette = TONES[tone];

  return (
    <div className={`relative overflow-hidden bg-[#f3f1f8] ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(150deg, ${palette.from}66 0%, transparent 45%, ${palette.to}59 100%)`,
        }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(255,255,255,0.14)" }}
        aria-hidden
      />
      {label && (
        <span
          className="absolute bottom-3 left-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide backdrop-blur-sm"
          style={{ color: palette.ink }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export function Initials({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`flex items-center justify-center rounded-full bg-lavender-mist font-display text-sm font-medium text-lavender-deep ${className}`}
      aria-hidden
    >
      {initials}
    </span>
  );
}
