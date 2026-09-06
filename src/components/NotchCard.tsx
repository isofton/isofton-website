import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

/**
 * Reference card: full-bleed photo with a white label panel cut into the
 * bottom-left corner (large top-right radius), like the house / profile cards.
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
      {/* Outer shell carries soft shadow; inner clips the photo — no dark corner fringe */}
      <div className="rounded-[24px] bg-white shadow-[0_16px_40px_-24px_rgba(76,61,110,0.28)] transition duration-300 sm:rounded-[28px] [@media(hover:hover)_and_(pointer:fine)]:group-hover:shadow-[0_22px_50px_-22px_rgba(76,61,110,0.32)]">
        <div className={`relative ${height} overflow-hidden rounded-[24px] bg-[#f1eef8] sm:rounded-[28px]`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover transition duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]"
          />

          {eyebrow && (
            <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-lavender-deep">
              {eyebrow}
            </span>
          )}

          {/* Notch label — sits on the photo, large top-right curve */}
          <div className="absolute bottom-0 left-0 max-w-[82%] rounded-bl-[24px] rounded-tr-[28px] bg-white px-4 pb-4 pt-4 sm:max-w-[78%] sm:rounded-bl-[28px] sm:rounded-tr-[36px] sm:px-6 sm:pb-5 sm:pt-5">
            <p className="font-display text-[17px] font-medium leading-snug text-ink sm:text-[19px] sm:leading-tight">
              {title}
            </p>
            {subtitle && (
              <p className="mt-1 text-[13px] leading-5 text-ink-muted sm:mt-1.5 sm:text-[15px]">
                {subtitle}
              </p>
            )}
          </div>
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
