import type { Metadata } from "next";
import { Container, PageHero, PageShell } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How iSofton handles information you share with us.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lead="We collect only what we need to reply to you and to deliver the work we agree to do."
      />
      <section>
        <Container className="py-14">
          <div className="soft-card mx-auto max-w-3xl space-y-6 rounded-[28px] p-5 leading-7 text-ink-soft sm:p-8">
            <p>
              When you use the contact form or email us, we receive the details you send: name, email,
              company, and your message. We use that information to respond and, if we work together,
              to run the project.
            </p>
            <p>
              We do not sell contact details. We do not run advertising pixels on this site. Hosting
              and email providers may process data as needed to deliver the service.
            </p>
            <p>To ask what we hold or to request deletion, write to contact@isofton.com.</p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
