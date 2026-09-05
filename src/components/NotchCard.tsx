import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

/**
 * The house card, matching the reference: a full-bleed image with rounded
 * corners and a white label panel cut into its bottom-left corner.
 */
export function NotchCard({
  src,
  alt,
  title,
  subtitle,
  eyebrow,
  href,
  height = "h-56",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  footer,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  href?: string;
  height: string;
  sizes?: string;
  footer?: ReactNode;
}) {
  const body = (
    <>
      <div
        className={`relative ${height} overflow-hidden rounded-[22px] bg-[#f1eef8] shadow-card transition duration-300 group-hover:shadow-lift`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        {eyebrow && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-lavender-deep backdrop-blur-sm">
            {eyebrow}
          </span>
        )}

        <div className="absolute bottom-0 left-0 max-w-[86%] rounded-tr-[24px] bg-white py-4 pl-5 pr-7">
          <p className="font-display text-lg font-medium leading-snug text-ink">{title}</p>
          {subtitle && <p className="mt-1 text-sm leading-5 text-lavender-deep">{subtitle}</p>}
        </div>
      </div>
      {footer}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {body}
      </Link>
    );
  }

  return <div className="group">{body}</div>;
}
