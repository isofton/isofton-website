import Link from "next/link";
import { type ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="relative w-full min-w-0 max-w-full">{children}</div>;
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] 2xl:max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image?: string;
}) {
  return (
    <section className="relative">
      <Container className="relative py-12 sm:py-20">
        <p className="text-sm font-medium text-lavender-deep">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">{lead}</p>
      </Container>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
}) {
  const styles = {
    primary: "bg-[#6f5b9a] text-white hover:bg-[#5d4b86]",
    ghost: "bg-white text-ink ring-1 ring-[#e4dcf0] hover:bg-[#faf8fd]",
    light: "bg-white text-ink hover:bg-[#faf8fd]",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition sm:px-6 ${styles}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8e4f4] via-[#f7f8fb] to-[#e4f3f8]" />
      <Container className="relative grid items-center gap-8 py-14 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm font-medium text-[#5d4b86]">A quiet next step</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Tell us what you want live. We will reply within a day.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            A short brief is enough. No form maze.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href="/contact">Book a call</ButtonLink>
          <a
            href="mailto:contact@isofton.com"
            className="inline-flex items-center text-sm text-ink-soft hover:text-ink"
          >
            contact@isofton.com
          </a>
        </div>
      </Container>
    </section>
  );
}

