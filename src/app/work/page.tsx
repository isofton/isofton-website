import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, PageHero, PageShell } from "@/components/ui";
import { work } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Example product stories from iSofton Software Solutions.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Work"
        title="Products we would put our name on."
        lead="Example stories — the shape of work we take with founders and operators."
      />
      <section>
        <Container className="space-y-8 py-14">
          {work.map((item, index) => (
            <article key={item.slug} className="soft-card grid overflow-hidden rounded-[28px] lg:grid-cols-12">
              <div className="relative h-72 lg:col-span-7 lg:h-[400px]">
                <Image src={item.image} alt="" fill className="object-cover" sizes="60vw" />
              </div>
              <div className="p-6 lg:col-span-5 lg:p-8">
                <p className="text-sm text-lavender-deep">
                  0{index + 1} · {item.sector}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium">{item.title}</h2>
                <p className="mt-4 leading-7 text-ink-soft">{item.summary}</p>
                <p className="mt-4 text-sm font-medium">{item.result}</p>
                <div className="relative mt-6 h-44 overflow-hidden rounded-2xl bg-white/70">
                  <Image src={item.mock} alt={`${item.title} interface`} fill className="object-cover" sizes="40vw" />
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
