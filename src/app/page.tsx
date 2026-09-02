import Image from "next/image";
import Link from "next/link";
import { SoftBg } from "@/components/SoftBg";
import { ButtonLink, Container, CtaBand, Frame } from "@/components/ui";
import { clients, reviews, services, steps, work } from "@/lib/data";

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

      <section className="relative">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="text-sm font-medium text-lavender-deep">iSofton Software Solutions</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.18] text-ink sm:text-5xl lg:text-[54px]">
              Let&apos;s build together.
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-ink-soft">
              Apps, websites, and AI — from a short brief to a product people can open. Soft on the
              surface. Clear on the date.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a project</ButtonLink>
              <ButtonLink href="/work" variant="ghost">
                See the work
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="soft-card relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[32px] p-2">
              <div className="relative h-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/hero-build.png"
                  alt="Team reviewing an app, website, and dashboard together"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative">
        <Container className="pb-6">
          <div className="soft-card rounded-[28px] px-6 py-8">
            <p className="text-center text-sm font-medium text-lavender-deep">Our clients</p>
            <ul className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {clients.map((client) => (
                <li key={client.name} className="flex flex-col items-center gap-2">
                  <div className="relative flex h-12 w-full items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                  <p className="text-center text-[11px] text-ink-muted">{client.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-16">
        <Container>
          <p className="text-center text-sm font-medium text-lavender-deep">The path</p>
          <h2 className="mt-2 text-center font-display text-3xl font-medium sm:text-4xl">
            From first brief to something people can open.
          </h2>
          <div className="soft-card relative mx-auto mt-8 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[32px] p-2">
            <div className="relative h-full overflow-hidden rounded-[24px] bg-white">
              <Image
                src="/images/idea-to-live.png"
                alt="iSofton delivery across tablet, web, and mobile"
                fill
                className="object-cover object-center brightness-[1.06] saturate-[0.78] contrast-[1.02]"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-16">
        <Container>
          <div className="max-w-xl">
            <p className="text-sm font-medium text-lavender-deep">What sets us apart</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
              A team that stays with the product.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {differences.map((item) => (
              <article key={item.title} className="soft-card rounded-[24px] p-6">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Frame src="/images/about-collab.jpg" alt="Studio session" className="h-[340px] lg:h-[400px]" />
          <div>
            <p className="text-sm font-medium text-lavender-deep">About us</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
              A studio in Mumbai and Surat.
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Designers and engineers on the same brief. You keep the product, the roadmap, and the
              IP.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["2", "studios"],
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

      <section className="relative py-14 lg:py-16">
        <Container>
          <div className="max-w-xl">
            <p className="text-sm font-medium text-lavender-deep">Who we help</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
              If this sounds like you, we can start.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
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

      <section className="relative py-14 lg:py-16">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-lavender-deep">Services</p>
              <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">What we take on</h2>
            </div>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="soft-card group overflow-hidden rounded-[24px]"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{service.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-16">
        <Container>
          <p className="text-sm font-medium text-lavender-deep">Process</p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Four quiet phases.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="relative py-14 lg:py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-lavender-deep">Work</p>
              <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">Example products</h2>
            </div>
            <ButtonLink href="/work" variant="ghost">
              View work
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {work.map((item) => (
              <article key={item.slug} className="soft-card overflow-hidden rounded-[24px]">
                <div className="relative h-44">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-lavender-deep">
                    {item.sector} · {item.result}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">What clients say</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <blockquote key={review.name} className="soft-card rounded-[24px] p-6">
                <p className="text-lg leading-8 text-ink-soft">“{review.quote}”</p>
                <footer className="mt-6 flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-ink-muted">{review.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <div className="relative">
        <CtaBand />
      </div>
    </div>
  );
}
