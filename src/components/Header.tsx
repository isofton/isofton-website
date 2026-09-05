"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/data";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenu(true);
  };

  const closeMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(false), 120);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] 2xl:max-w-[1400px]">
        <Logo compact />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);

            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                  onFocusCapture={openMenu}
                  onBlurCapture={closeMenu}
                >
                  <Link
                    href={item.href}
                    aria-expanded={menu}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition ${
                      active ? "bg-white font-medium text-ink shadow-sm" : "text-ink-soft hover:bg-white/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`h-3.5 w-3.5 transition ${menu ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {menu && (
                    <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3">
                      <div className="rounded-[24px] border border-[#ece6f6] bg-white p-3 shadow-lift">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="rounded-2xl px-3 py-2.5 transition hover:bg-lavender-mist"
                            >
                              <p className="text-sm font-medium text-ink">{service.title}</p>
                              <p className="mt-0.5 line-clamp-1 text-xs text-ink-muted">
                                {service.short}
                              </p>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/services"
                          className="mt-2 flex items-center justify-between rounded-2xl bg-lavender-mist px-4 py-3 text-sm font-medium text-lavender-deep transition hover:bg-[#ece5f8]"
                        >
                          All services
                          <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition ${
                  active
                    ? "bg-white font-medium text-ink shadow-sm"
                    : "text-ink-soft hover:bg-white/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="mailto:contact@isofton.com"
            className="hidden text-sm text-ink-soft transition hover:text-ink xl:inline"
          >
            contact@isofton.com
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#6f5b9a] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5d4b86]"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e4dcf0] bg-white/80 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#efe8f6] bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            <div className="border-b border-[#f1ecf8]">
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-base text-ink"
                aria-expanded={mobileServices}
                onClick={() => setMobileServices((value) => !value)}
              >
                Services
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {mobileServices && (
                <div className="flex flex-col pb-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="rounded-xl px-3 py-2 text-sm text-ink-soft"
                      onClick={() => setOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="rounded-xl px-3 py-2 text-sm font-medium text-lavender-deep"
                    onClick={() => setOpen(false)}
                  >
                    All services
                  </Link>
                </div>
              )}
            </div>

            {nav
              .filter((item) => item.href !== "/services")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-[#f1ecf8] py-3 text-base ${
                    isActive(item.href) ? "font-medium text-ink" : "text-ink-soft"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

            <Link
              href="/contact"
              className="mt-4 rounded-full bg-[#6f5b9a] px-4 py-3 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
            <a
              href="mailto:contact@isofton.com"
              className="py-3 text-center text-sm text-ink-soft"
              onClick={() => setOpen(false)}
            >
              contact@isofton.com
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
