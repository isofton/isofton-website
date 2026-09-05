import Image from "next/image";
import { PhotoTile } from "@/components/BrandTile";
import { GrowthSteps } from "@/components/GrowthSteps";
import { NotchCard } from "@/components/NotchCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SoftBg } from "@/components/SoftBg";
import { TrustBand } from "@/components/TrustBand";
import { ButtonLink, Container, CtaBand } from "@/components/ui";
import { clients, services, steps, work } from "@/lib/data";

const differences = [
  {
    title: "Agencies create handoffs.",
    body: "You work with the people writing the code. No account-manager maze.",
  },
  {
    title: "Freelancers create drift.",
    body: "You get a stable team that stays on the product after the first release.",
  },
  {
    title: "Hiring in-house is slow.",
    body: "Skip the six-month search. Start with a squad that is already together.",
  },
];

const who = [
  {
    title: "You have an idea, not a spec.",
    body: "We turn it into a first version you can sell or show a customer.",
  },
  {
    title: "You run a business on patched tools.",
    body: "Nothing off the shelf fits. We build the system around how you actually work.",
  },
  {
    title: "You need an app, site, or AI feature now.",
    body: "We size the build to this quarter — then stay if you want a retainer.",
  },
];

export default function HomePage() {
  return (
    <div className="relative bg-mesh">
      <SoftBg />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-wash opacity-80" aria-hidden />
        <Container className="relative py-14 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
            <div className="max-w-2xl">
              <h1 className="hero-rise hero-rise-delay-2 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[56px] xl:text-[62px]">
                Let&apos;s build it <span className="text-lavender-deep">together.</span>
              </h1>

              <p className="hero-rise hero-rise-delay-3 mt-5 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                Software plus AI that makes a business grow faster — apps, websites, and assistants
                that take the repeat work off your team. From a short brief to a product people can
                open, built by one small team.
              </p>

              <div className="hero-rise hero-rise-delay-4 mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/work" variant="ghost">
                  See the work
                </ButtonLink>
              </div>

              <ul className="hero-rise hero-rise-delay-4 mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e8e2f2] pt-6 text-sm text-ink-soft">
                {["You keep the code and the IP", "Weekly demos", "One lead you can call"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-lavender-deep" aria-hidden />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="hero-rise hero-rise-delay-4 relative">
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative">
        <Container className="pb-2">
          <TrustBand />
        </Container>
      </section>

      <section className="relative">
        <Container className="border-y border-[#eae5f3]/70 py-10">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Trusted by
          </p>
          <div className="marquee mt-6">
            <ul className="marquee-track items-center">
              {[...clients, ...clients].map((client, index) => (
                <li
                  key={`${client.name}-${index}`}
                  className="flex h-20 w-40 shrink-0 items-center justify-center px-6 sm:w-48"
                >
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={index < clients.length ? client.name : ""}
                      aria-hidden={index >= clients.length}
                      width={240}
                      height={96}
                      style={{ height: `${2.25 * client.scale}rem` }}
                      className="w-auto max-w-full object-contain opacity-45 grayscale transition duration-300 hover:opacity-80 hover:grayscale-0"
                    />
                  ) : (
                    <span
                      aria-hidden={index >= clients.length}
                      className="font-display text-base font-semibold tracking-tight text-ink/45 transition duration-300 hover:text-ink/80"
                    >
                      {client.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-deep">How we grow a business</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">
              Software first. AI where it pays.
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Growth does not come from buying tools — it comes from removing the steps your team
              repeats by hand. We do that in four stages, and you can see the effect at each one.
            </p>
          </div>
          <div className="mt-10 xl:mt-12">
            <GrowthSteps />
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="max-w-xl">
            <p className="text-sm font-medium text-lavender-deep">What sets us apart</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">
              A team that stays with the product.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 xl:gap-6 md:grid-cols-3">
            {differences.map((item) => (
              <article key={item.title} className="soft-card rounded-[24px] p-6">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <PhotoTile src="/images/photos/team-collab.jpg" alt="The iSofton team working together" tone="lavender" className="h-[300px] rounded-[28px] lg:h-[360px]" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div>
            <p className="text-sm font-medium text-lavender-deep">About us</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">
              A small team in Mumbai and Surat.
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Designers and engineers on the same brief. You keep the product, the roadmap, and the
              IP.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["2", "cities"],
                ["6", "practices"],
                ["1", "lead"],
              ].map(([n, label]) => (
                <div key={label} className="soft-card rounded-2xl px-3 py-4 text-center">
                  <p className="font-display text-2xl font-medium text-lavender-deep">{n}</p>
                  <p className="mt-1 text-xs text-ink-muted">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink href="/about" variant="ghost">
                Our story
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="max-w-xl">
            <p className="text-sm font-medium text-lavender-deep">Who we help</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">
              If this sounds like you, we can start.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 xl:gap-6 md:grid-cols-3">
            {who.map((item, index) => (
              <article key={item.title} className="soft-card rounded-[24px] p-6">
                <p className="text-sm font-medium text-lavender-deep">0{index + 1}</p>
                <h3 className="mt-3 font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-lavender-deep">Services</p>
              <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">What we take on</h2>
            </div>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <NotchCard
                key={service.slug}
                href={`/services/${service.slug}`}
                src={service.image}
                alt={service.title}
                title={service.title}
                subtitle={service.short}
                height="h-60"
                sizes="(min-width: 1024px) 33vw, 50vw"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <p className="text-sm font-medium text-lavender-deep">Process</p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">
            Four quiet phases.
          </h2>
          <div className="mt-10 grid gap-5 xl:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.n} className="soft-card rounded-[24px] p-5">
                <p className="text-sm font-medium text-lavender-deep">Phase {step.n}</p>
                <h3 className="mt-3 font-display text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-lavender-deep">Work</p>
              <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl xl:text-[42px]">Example products</h2>
            </div>
            <ButtonLink href="/work" variant="ghost">
              View work
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 xl:gap-6 lg:grid-cols-3">
            {work.map((item) => (
              <NotchCard
                key={item.slug}
                src={item.shot}
                alt={`${item.title} interface`}
                title={item.title}
                subtitle={item.result}
                eyebrow={item.sector}
                height="h-60"
                footer={
                  <p className="mt-4 px-1 text-sm leading-6 text-ink-soft">{item.summary}</p>
                }
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-20 xl:py-24">
        <Container>
          <ReviewsCarousel />
        </Container>
      </section>

      <div className="relative">
        <CtaBand />
      </div>
    </div>
  );
}
