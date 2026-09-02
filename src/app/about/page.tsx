import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, Frame, PageHero, PageShell } from "@/components/ui";
import { clients, values } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "iSofton is a software studio in Mumbai and Surat.",
};

const beliefs = [
  {
    title: "Vision",
    body: "We take ideas that already have a customer in mind and turn them into software those people can use.",
  },
  {
    title: "Curiosity",
    body: "New tools stay on the bench until they help a real workflow. Then they go into the build.",
  },
  {
    title: "Transparency",
    body: "You see the backlog, the demos, and the decisions. Nothing important lives in a private chat.",
  },
  {
    title: "Care",
    body: "We stay for the first weeks after launch. That is when most products actually get decided.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A studio that still answers the phone."
        lead="iSofton builds custom software — websites, apps, and AI systems — from Mumbai and Surat."
      />
      <section>
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-2">
          <Frame src="/images/about-collab.jpg" alt="Working session" className="h-[360px]" />
          <div>
            <h2 className="font-display text-3xl font-medium">How we work as a company</h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Clients first. That gives us room to be direct about scope, dates, and what will not
              fit. The team is small on purpose: designers and engineers who sit on the same work.
            </p>
            <p className="mt-4 leading-7 text-ink-soft">
              We use AI in delivery where it saves time. People still design the system and sign
              off on what goes to production.
            </p>
            <div className="relative mt-8 h-16 w-48">
              <Image src="/logo-full.png" alt="iSofton Software Solutions" fill className="object-contain object-left" />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-14">
          <h2 className="font-display text-3xl font-medium">What we hold to</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {beliefs.map((item) => (
              <article key={item.title} className="soft-card rounded-[24px] p-6">
                <h3 className="font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="soft-card rounded-[24px] p-6">
                <h3 className="font-medium">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-14">
          <p className="text-sm font-medium text-lavender-deep">Clients</p>
          <h2 className="mt-2 font-display text-3xl font-medium">Companies we work with</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <li key={client.name} className="soft-card flex items-center gap-4 rounded-[24px] px-5 py-5">
                <div className="relative h-12 w-28 shrink-0">
                  <Image src={client.logo} alt="" fill className="object-contain object-left" sizes="112px" />
                </div>
                <div>
                  <p className="font-display font-medium">{client.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{client.sector}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section>
        <Container className="grid gap-6 py-14 md:grid-cols-2">
          {site.locations.map((location) => (
            <article key={location.city} className="soft-card overflow-hidden rounded-[28px]">
              <Frame
                src={location.city === "Mumbai" ? "/images/city-mumbai.jpg" : "/images/city-surat.jpg"}
                alt={location.city}
                className="h-56 rounded-none"
              />
              <div className="p-5">
                <p className="text-sm text-ink-muted">{location.note}</p>
                <h3 className="mt-1 font-display text-2xl font-medium">{location.city}</h3>
                <p className="text-ink-soft">{location.region}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
