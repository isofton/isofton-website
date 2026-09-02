import type { Metadata } from "next";
import Image from "next/image";
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
        <Container className="grid gap-6 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-4">
            <div className="soft-card rounded-[24px] p-6">
              <p className="text-sm font-medium text-lavender-deep">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block font-display text-2xl font-medium">
                {site.email}
              </a>
            </div>
            {site.locations.map((location) => (
              <article key={location.city} className="soft-card overflow-hidden rounded-[24px]">
                <div className="relative h-40">
                  <Image
                    src={location.city === "Mumbai" ? "/images/city-mumbai.jpg" : "/images/city-surat.jpg"}
                    alt={location.city}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
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
