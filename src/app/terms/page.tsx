import type { Metadata } from "next";
import { Container, PageHero, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the iSofton website.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        lead="This site is provided by iSofton Software Solutions to share who we are and how to work with us."
      />
      <section>
        <Container className="py-14">
          <div className="soft-card mx-auto max-w-3xl space-y-6 rounded-[28px] p-5 leading-7 text-ink-soft sm:p-8">
            <p>
              Content on this website is for general information. Project work is governed by a
              written agreement we share before any paid engagement starts.
            </p>
            <p>
              You may not copy the site design, copy, or brand assets for another commercial product
              without permission. Case studies describe typical outcomes; they are not a guarantee of
              the same result for every client.
            </p>
            <p>Questions: contact@isofton.com.</p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
