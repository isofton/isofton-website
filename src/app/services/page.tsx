import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, CtaBand, PageHero, PageShell } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "App, web, AI, machine learning, cloud, and product design from iSofton.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Six practices. One team on the hook."
        lead="We stay from the first sketch to production — and after launch if you want a retainer."
      />
      <section>
        <Container className="grid gap-5 py-14">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="soft-card grid items-center gap-6 overflow-hidden rounded-[28px] lg:grid-cols-2"
            >
              <div className={`relative h-64 lg:h-72 ${index % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 lg:p-10">
                <p className="text-sm text-lavender-deep">0{index + 1}</p>
                <h2 className="mt-2 font-display text-3xl font-medium">{service.title}</h2>
                <p className="mt-3 leading-7 text-ink-soft">{service.summary}</p>
                <span className="mt-5 inline-block text-sm font-medium text-lavender-deep">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
