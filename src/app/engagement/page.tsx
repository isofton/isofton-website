import type { Metadata } from "next";
import { PhotoTile } from "@/components/BrandTile";
import { Container, CtaBand, PageHero, PageShell } from "@/components/ui";
import { steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "How we work",
  description: "iSofton’s engagement model — discovery, build, and launch.",
};

const models = [
  {
    title: "Fixed-scope MVP",
    body: "A written outcome, a fixed fee, and a date. Best when the first version is clear.",
  },
  {
    title: "Dedicated squad",
    body: "A designer, engineers, and a lead on your cadence. Best when the roadmap is still moving.",
  },
  {
    title: "Care & grow",
    body: "After launch we stay for fixes and the next feature, billed monthly.",
  },
];

export default function EngagementPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How we work"
        title="A week you can point to, every week."
        lead="You see the work. You click a build. You know who is responsible."
      />
      <section>
        <Container className="grid items-start gap-6 py-14 lg:grid-cols-2">
          <PhotoTile src="/images/photos/process-board.jpg" alt="A planning board during a project" tone="lavender" className="h-80 rounded-[28px]" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="space-y-4">
            {steps.map((step) => (
              <article key={step.n} className="soft-card rounded-[24px] p-5">
                <p className="text-sm font-medium text-lavender-deep">{step.n}</p>
                <h2 className="mt-1 font-display text-2xl font-medium">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section>
        <Container className="pb-14">
          <h2 className="font-display text-3xl font-medium">Ways to engage</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {models.map((model) => (
              <article key={model.title} className="soft-card rounded-[24px] p-6">
                <h3 className="font-display text-xl font-medium">{model.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{model.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
