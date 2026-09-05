import type { Metadata } from "next";
import { PhotoTile } from "@/components/BrandTile";
import { ContactForm } from "@/components/ContactForm";
import { Container, PageHero, PageShell } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with iSofton Software Solutions.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Send a brief. We will reply within a day."
        lead="Name, email, and what you want live. That is enough to start."
      />
      <section>
        <Container className="grid gap-6 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-4">
            <div className="soft-card rounded-[24px] p-6">
              <p className="text-sm font-medium text-lavender-deep">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block font-display text-2xl font-medium">
                {site.email}
              </a>
            </div>

            <div className="soft-card rounded-[24px] p-6">
              <p className="text-sm font-medium text-lavender-deep">WhatsApp</p>
              <p className="mt-1 text-sm text-ink-soft">
                Fastest way to reach us. Send the brief straight to the team.
              </p>
              <div className="mt-4 grid gap-2">
                {site.phones.map((phone) => (
                  <a
                    key={phone.e164}
                    href={`https://wa.me/${phone.e164}?text=${encodeURIComponent(
                      "Hi iSofton — I would like to talk about a project.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-[#dff3e4] bg-[#f4fbf6] px-4 py-3 text-sm font-medium text-ink transition hover:bg-[#eaf7ee]"
                  >
                    {phone.city} team
                    <span className="text-xs font-normal text-ink-muted">Open WhatsApp →</span>
                  </a>
                ))}
              </div>
            </div>
            {site.locations.map((location) => (
              <article key={location.city} className="soft-card overflow-hidden rounded-[24px]">
                <PhotoTile src={location.city === "Mumbai" ? "/images/photos/city-mumbai.jpg" : "/images/photos/city-surat.jpg"} alt={location.city} tone={location.city === "Mumbai" ? "cyan" : "coral"} className="h-40" sizes="(min-width: 1024px) 40vw, 100vw" />
                <div className="p-5">
                  <p className="text-sm text-ink-muted">{location.note}</p>
                  <p className="font-display text-xl font-medium">{location.city}</p>
                  <p className="text-sm text-ink-soft">{location.region}</p>
                </div>
              </article>
            ))}
          </aside>
        </Container>
      </section>
    </PageShell>
  );
}
