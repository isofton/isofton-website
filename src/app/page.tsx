import Image from "next/image";
import { PhotoTile } from "@/components/BrandTile";
import { CardGrid } from "@/components/CardGrid";
import { CardRail } from "@/components/CardRail";
import { GrowthSteps } from "@/components/GrowthSteps";
import { NotchCard } from "@/components/NotchCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
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
    <div className="relative w-full min-w-0 max-w-full">
      <section className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-hero-wash opacity-80" aria-hidden />
        <Container className="relative py-14 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
            <div className="max-w-2xl min-w-0">
              <h1 className="hero-rise hero-rise-delay-2 font-display text-[30px] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl sm:leading-[1.08] lg:text-[56px] xl:text-[62px]">
                Let&apos;s build it <span className="text-lavender-deep">together.</span>
              </h1>

              <p className="hero-rise hero-rise-delay-3 mt-4 max-w-xl text-[15px] leading-6 text-ink-soft sm:mt-5 sm:text-lg sm:leading-8">
                Software plus AI that makes a business grow faster — apps, websites, and assistants
                that take the repeat work off your team. From a short brief to a product people can
                open, built by one small team.
              </p>

              <div className="hero-rise hero-rise-delay-4 mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/work" variant="ghost">
                  See the work
                </ButtonLink>
              </div>

              <ul className="hero-rise hero-rise-delay-4 mt-7 flex flex-wrap gap-x-5 gap-y-2.5 sm:mt-10 sm:gap-x-6 sm:gap-y-3 border-t border-[#e8e2f2] pt-6 text-sm text-ink-soft">
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

            <div className="hero-rise hero-rise-delay-4 relative min-w-0">
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

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-deep">How we grow a business</p>
            <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
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

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="max-w-xl">
            <p className="text-sm font-medium text-lavender-deep">What sets us apart</p>
            <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
              A team that stays with the product.
            </h2>
          </div>
          <div className="mt-10">
            <CardGrid cols={3} ariaLabel="What sets us apart" tabs={["Agency", "Freelance", "Hire"]}>
            {differences.map((item) => (
              <article key={item.title} className="soft-card rounded-[22px] p-5 sm:rounded-[24px] sm:p-6">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{item.body}</p>
              </article>
            ))}
            </CardGrid>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container className="grid items-stretch gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <PhotoTile
            src="/images/photos/team-collab.jpg"
            alt="The iSofton team working together"
            tone="lavender"
            className="h-[220px] rounded-[24px] sm:h-[340px] sm:rounded-[28px] lg:h-full lg:min-h-[460px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-lavender-deep">About us</p>
            <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
              A full product team, working out of Mumbai and Surat.
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Designers, engineers and analysts on the same brief — senior people who have shipped
              before, in two cities and one delivery team. You keep the product, the roadmap and the
              IP, always.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Six practices, so nothing gets outsourced onward",
                "One lead who owns the date and picks up the phone",
                "We stay through launch and the weeks that follow",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-ink-soft">
                  <span
                    className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-lavender-deep"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-white">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["20+", "specialists"],
                ["6", "practices"],
                ["2", "cities"],
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

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="max-w-xl">
            <p className="text-sm font-medium text-lavender-deep">Who we help</p>
            <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
              If this sounds like you, we can start.
            </h2>
          </div>
          <div className="mt-10">
            <CardGrid cols={3} ariaLabel="Who we help" tabs={["Idea", "Tools", "Now"]}>
            {who.map((item, index) => (
              <article
                key={item.title}
                className="soft-card relative h-full overflow-hidden rounded-[22px] p-5 sm:rounded-[24px] sm:p-7"
              >
                <span
                  className="pointer-events-none absolute right-3 top-2 font-display text-[64px] font-semibold leading-none text-lavender-deep/[0.07] sm:-right-1 sm:-top-3 sm:text-[76px]"
                  aria-hidden
                >
                  0{index + 1}
                </span>
                <h3 className="relative max-w-[16rem] font-display text-xl font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-ink-soft">{item.body}</p>
              </article>
            ))}
            </CardGrid>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact">Tell us which one you are</ButtonLink>
            <p className="text-sm text-ink-muted">A line or two is enough to start.</p>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-lavender-deep">Services</p>
              <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">What we take on</h2>
            </div>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </div>
          <div className="mt-10">
            <CardRail ariaLabel="services" perView={3}>
            {services.map((service) => (
              <NotchCard
                key={service.slug}
                href={`/services/${service.slug}`}
                src={service.image}
                alt={service.title}
                title={service.title}
                subtitle={service.short}
                height="h-48 sm:h-60"
                sizes="(min-width: 1024px) 33vw, 50vw"
              />
            ))}
            </CardRail>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container>
          <p className="text-sm font-medium text-lavender-deep">Process</p>
          <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
            Four quiet phases.
          </h2>
          <div className="mt-10">
            <CardGrid cols={4} ariaLabel="Process phases" tabs={["Scope", "Design", "Build", "Launch"]}>
            {steps.map((step) => (
              <article key={step.n} className="soft-card rounded-[22px] p-5 sm:rounded-[24px]">
                <p className="text-sm font-medium text-lavender-deep">Phase {step.n}</p>
                <h3 className="mt-3 font-display text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
              </article>
            ))}
            </CardGrid>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
        <Container>
          <div className="flex items-end justify-between gap-3 sm:gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-lavender-deep">Work</p>
              <h2 className="mt-2 font-display text-[26px] font-medium sm:text-4xl xl:text-[42px]">
                Example products
              </h2>
            </div>
            <ButtonLink href="/work" variant="ghost">
              View work
            </ButtonLink>
          </div>
          <div className="mt-10">
            <CardRail ariaLabel="projects" perView={3}>
            {work.map((item) => (
              <NotchCard
                key={item.slug}
                src={item.shot}
                alt={`${item.title} interface`}
                title={item.title}
                subtitle={item.result}
                eyebrow={item.sector}
                height="h-48 sm:h-60"
                footer={
                  <p className="mt-4 px-1 text-sm leading-6 text-ink-soft">{item.summary}</p>
                }
              />
            ))}
            </CardRail>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-10 sm:py-14 lg:py-20 xl:py-24">
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
