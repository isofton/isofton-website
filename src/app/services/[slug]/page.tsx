import type { Metadata } from "next";
import { PhotoTile } from "@/components/BrandTile";
import { CardGrid } from "@/components/CardGrid";
import { NotchCard } from "@/components/NotchCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Container, CtaBand, PageShell } from "@/components/ui";
import { getService, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-wash opacity-70" aria-hidden />
        <Container className="relative py-14 sm:py-16 lg:py-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>
              <span className="px-2" aria-hidden>
                /
              </span>
              <span className="text-ink-soft">{service.title}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal>
              <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl xl:text-[54px]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">{service.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/work" variant="ghost">
                  See the work
                </ButtonLink>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {service.stack.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-[#e4dcf0] bg-white/70 px-3 py-1.5 text-xs text-ink-soft"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <PhotoTile src={service.image} alt={service.title} tone={service.accent} priority className="aspect-[4/3] rounded-[28px]" sizes="(min-width: 1024px) 520px, 100vw" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14 lg:py-20">
        <Container className="grid gap-5 lg:grid-cols-2 xl:gap-6">
          <Reveal className="h-full">
            <div className="soft-card h-full rounded-[28px] p-5 sm:p-7">
              <p className="text-sm font-medium text-lavender-deep">Outcomes</p>
              <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
                What you walk away with
              </h2>
              <ul className="mt-6 space-y-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[#efe8f6] pb-3 last:border-0">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" aria-hidden />
                    <span className="leading-7 text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={90}>
            <div className="soft-card h-full rounded-[28px] p-5 sm:p-7">
              <p className="text-sm font-medium text-lavender-deep">Scope</p>
              <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">How we can help</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-white/60 px-4 py-3 text-sm leading-6 text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">How this one runs</p>
            <h2 className="mt-2 max-w-2xl font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
              Three phases, and you are in all of them.
            </h2>
          </Reveal>
          <div className="mt-10">
            <CardGrid cols={3}>
            {service.phases.map((phase, index) => (
              <Reveal key={phase.title} className="h-full" delay={index * 80}>
                <article className="soft-card h-full rounded-[24px] p-5 sm:p-6">
                  <p className="font-display text-sm font-medium text-lavender-deep">
                    Phase 0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-medium">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{phase.body}</p>
                </article>
              </Reveal>
            ))}
            </CardGrid>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">Good fit</p>
            <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
              This is for you if…
            </h2>
            <ul className="mt-8 space-y-4">
              {service.goodFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lavender-mist text-[11px] font-medium text-lavender-deep"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="leading-7 text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="soft-card rounded-[28px] p-5 sm:p-7">
              <p className="text-sm font-medium text-lavender-deep">Questions we get</p>
              <dl className="mt-6 space-y-5">
                {service.faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-[#efe8f6] pb-5 last:border-0 last:pb-0">
                    <dt className="font-display text-lg font-medium">{faq.q}</dt>
                    <dd className="mt-2 text-sm leading-7 text-ink-soft">{faq.a}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/faq"
                className="mt-6 inline-block text-sm font-medium text-lavender-deep hover:text-ink"
              >
                All questions →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14 lg:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-lavender-deep">Pairs well with</p>
                <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
                  Other practices
                </h2>
              </div>
              <ButtonLink href="/services" variant="ghost">
                All services
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {related.map((item, index) => (
              <Reveal key={item.slug} className="h-full" delay={index * 70}>
                <NotchCard
                  href={`/services/${item.slug}`}
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  subtitle={item.short}
                  height="h-44 sm:h-56"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </PageShell>
  );
}
