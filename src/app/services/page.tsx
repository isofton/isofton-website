import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Shapes, StepArrow } from "@/components/Shapes";
import { ButtonLink, Container, CtaBand, PageShell } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "App, web, AI, machine learning, cloud, and product design from iSofton.",
};

const offers = [
  {
    title: "Value-focused delivery",
    body: "We size the build to a business result — a first release you can sell, run, or show a customer.",
  },
  {
    title: "Bespoke products",
    body: "Apps, sites, and AI made for how you work. We fit the product to you, not a template.",
  },
  {
    title: "Straight guidance",
    body: "What to build now, what to wait on, and what not to spend on. You hear it before we write code.",
  },
  {
    title: "Care after launch",
    body: "Updates, fixes, and the next feature. We stay if you want a partner, not a one-off.",
  },
];

const qualities = [
  {
    title: "Modern stack",
    body: "Next.js, Flutter, cloud, and applied AI — chosen for the job, not for a slide.",
  },
  {
    title: "Senior hands",
    body: "People who have shipped before. Less handover, fewer surprises.",
  },
  {
    title: "You keep the work",
    body: "Code, designs, and IP stay with you. We do not lock the product in.",
  },
  {
    title: "Small on purpose",
    body: "A designer and engineers on the same brief. One lead you can call.",
  },
];

const process = [
  {
    n: "1",
    title: "Imagine & scope",
    body: "Your idea, a working session, and a written plan: what ships first, what waits, and what it costs.",
  },
  {
    n: "2",
    title: "Design & craft",
    body: "Flows, screens, and architecture. Prototypes you can click before we commit the build.",
  },
  {
    n: "3",
    title: "Build & iterate",
    body: "Weekly demos. A shared backlog. Something live enough to judge every Friday.",
  },
  {
    n: "4",
    title: "Test & assure",
    body: "We check the paths that matter: speed, security, and the first hour a real user spends in it.",
  },
  {
    n: "5",
    title: "Launch",
    body: "Go-live with a list, not a hope. We stay on the line for the first days.",
  },
  {
    n: "6",
    title: "Support & lift",
    body: "Fixes, small features, and a clear next version — if you want us to stay.",
  },
  {
    n: "7",
    title: "Scale",
    body: "More users, more markets, more of the product. We grow the system with you.",
  },
];

const nextSteps = [
  { title: "Live product", body: "Something people can open on a phone or in a browser." },
  { title: "Value in the work", body: "A metric that moved — time saved, a sale, a process that stuck." },
  { title: "Users on it", body: "The first real customers, staff, or operators using it this week." },
  { title: "Continued build", body: "A backlog you own. We can stay, or your team takes it." },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <Shapes variant="hero" />
        <Container className="relative py-20 sm:py-24">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">Our services</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              We help you build software that grows the business.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">
              Apps, web, AI, cloud, and design — from the first brief to a live product. And beyond.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14">
        <Shapes />
        <Container className="relative">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">What we offer</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              Four ways we show up on a project.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {offers.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="soft-card h-full rounded-[24px] p-6">
                  <h3 className="font-display text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14">
        <Container className="relative">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">Practices</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">What we take on</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link href={`/services/${service.slug}`} className="soft-card group block overflow-hidden rounded-[24px]">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-medium">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{service.short}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-lavender-deep">
                      See the practice →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14">
        <Shapes />
        <Container className="relative">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">How we work</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              Transparent, close, and on a date you can point to.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {qualities.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="soft-card h-full rounded-[24px] p-5">
                  <h3 className="font-display text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16">
        <Shapes variant="process" />
        <Container className="relative">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">Our process</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              A clear path from idea to live.
            </h2>
            <p className="mt-4 max-w-2xl text-ink-soft">
              You are in the work at every stage. Launch is a milestone — not the last time we talk.
            </p>
          </Reveal>
          <ol className="mt-12">
            {process.map((step, index) => (
              <li key={step.n}>
                <Reveal delay={40}>
                  <article
                    className={`soft-card max-w-xl rounded-[24px] p-6 ${
                      index % 2 ? "ml-auto" : ""
                    }`}
                  >
                    <p className="font-display text-sm font-medium text-lavender-deep">{step.n}</p>
                    <h3 className="mt-2 font-display text-2xl font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">{step.body}</p>
                  </article>
                </Reveal>
                {index < process.length - 1 && (
                  <StepArrow direction={index % 2 === 0 ? "right" : "left"} />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14">
        <Shapes />
        <Container className="relative">
          <Reveal>
            <p className="text-sm font-medium text-lavender-deep">What happens next</p>
            <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
              After we start, this is what you should see.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="soft-card h-full rounded-[24px] p-5">
                  <p className="text-sm font-medium text-lavender-deep">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <p className="max-w-xl text-ink-soft">
                Ready to take the first step? A short brief is enough.
              </p>
              <ButtonLink href="/contact">Get started today</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </PageShell>
  );
}
