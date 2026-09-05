import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#2d2840] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
            Independent software team in Mumbai and Surat. Apps, web, and applied AI.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-medium text-white/45">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-white/70 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-medium text-white/45">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white">
                Work
              </Link>
            </li>
            <li>
              <Link href="/engagement" className="hover:text-white">
                How we work
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-medium text-white/45">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.e164}>
                <a
                  href={`https://wa.me/${phone.e164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" aria-hidden />
                  {phone.city} on WhatsApp
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
