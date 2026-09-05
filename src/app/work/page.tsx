import type { Metadata } from "next";
import { CardRail } from "@/components/CardRail";
import { NotchCard } from "@/components/NotchCard";
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
        <Container className="py-10 sm:py-14">
          <CardRail ariaLabel="projects" perView={3}>
            {work.map((item) => (
              <NotchCard
                key={item.slug}
                src={item.shot}
                alt={`${item.title} interface`}
                title={item.title}
                subtitle={item.result}
                eyebrow={item.sector}
                height="h-52 sm:h-64"
                sizes="(min-width: 1024px) 33vw, 100vw"
                footer={<p className="mt-4 px-1 text-sm leading-6 text-ink-soft">{item.summary}</p>}
              />
            ))}
          </CardRail>
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
