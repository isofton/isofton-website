import { ButtonLink, Container, PageShell } from "@/components/ui";

export default function NotFound() {
  return (
    <PageShell>
      <section>
        <Container className="py-24">
          <div className="soft-card max-w-xl rounded-[28px] p-8">
            <p className="text-sm font-medium text-lavender-deep">404</p>
            <h1 className="mt-3 font-display text-4xl font-medium">This page is not here.</h1>
            <p className="mt-4 max-w-md text-ink-soft">
              The link may have moved. Go home or send us a note.
            </p>
            <div className="mt-8 flex gap-3">
              <ButtonLink href="/">Back home</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
