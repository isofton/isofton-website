import type { Metadata } from "next";
import { Container, CtaBand, PageHero, PageShell } from "@/components/ui";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about working with iSofton Software Solutions.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Questions we hear on first calls."
        lead="If yours is not here, write to hello@isofton.com."
      />
      <section>
        <Container className="space-y-4 py-14">
          {faqs.map((item) => (
            <article key={item.q} className="soft-card grid gap-3 rounded-[24px] p-6 md:grid-cols-[0.9fr_1.1fr]">
              <h2 className="font-display text-xl font-medium">{item.q}</h2>
              <p className="leading-7 text-ink-soft">{item.a}</p>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
