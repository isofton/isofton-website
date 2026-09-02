import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink, Container, CtaBand, PageHero, PageShell } from "@/components/ui";
import { getService, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <PageHero eyebrow="Service" title={service.title} lead={service.summary} />
      <section>
        <Container className="grid gap-6 py-14 lg:grid-cols-2">
          <div className="soft-card relative h-80 overflow-hidden rounded-[28px]">
            <Image src={service.image} alt={service.title} fill className="object-cover" sizes="50vw" />
          </div>
          <div className="soft-card rounded-[28px] p-7">
            <h2 className="font-display text-3xl font-medium">What you walk away with</h2>
            <ul className="mt-6 space-y-3">
              {service.outcomes.map((item) => (
                <li key={item} className="border-b border-[#efe8f6] pb-3 text-ink-soft last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section>
        <Container className="grid gap-6 pb-14 lg:grid-cols-2">
          <div className="soft-card rounded-[28px] p-7">
            <h2 className="font-display text-3xl font-medium">How we can help</h2>
            <ul className="mt-6 space-y-3">
              {service.offerings.map((item) => (
                <li key={item} className="text-ink-soft">
                  — {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="soft-card flex flex-col justify-end rounded-[28px] p-7">
            <p className="font-display text-2xl font-medium">Need this inside a larger product?</p>
            <div className="mt-6">
              <ButtonLink href="/contact">Start a project</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
