import { BrandTile, type TileIcon, type TileTone } from "@/components/BrandTile";
import { Reveal } from "@/components/Reveal";

const stages: {
  title: string;
  body: string;
  role: string;
  gain: string;
  icon: TileIcon;
  tone: TileTone;
}[] = [
  {
    title: "We find what is slowing you down",
    body: "A week with your team, counting where the hours go and which handoffs leak.",
    role: "We write a costed plan before anyone writes code.",
    gain: "You know what to build first — and what not to pay for.",
    icon: "board",
    tone: "lavender",
  },
  {
    title: "We build the tool that carries the work",
    body: "The app, portal, or dashboard your team opens every morning instead of a spreadsheet.",
    role: "We design, build, and demo it every Friday.",
    gain: "The same team gets through more, without new hires.",
    icon: "saas",
    tone: "cyan",
  },
  {
    title: "We add AI only where it saves hours",
    body: "An assistant on your own data — drafting quotes, reading documents, answering the first pass.",
    role: "We ground it in your content and check its answers.",
    gain: "Repeat typing stops being someone's whole afternoon.",
    icon: "ai",
    tone: "coral",
  },
  {
    title: "We stay while it grows",
    body: "The first weeks after launch decide whether a product sticks, so we watch them with you.",
    role: "We cut what missed and extend what worked.",
    gain: "A system that grows into new teams, branches, or markets.",
    icon: "ml",
    tone: "lavender",
  },
];

const lift = ["lg:mt-16", "lg:mt-11", "lg:mt-6", "lg:mt-0"];

export function GrowthSteps() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-end xl:gap-6">
      {stages.map((stage, index) => (
        <Reveal key={stage.title} className={`h-full ${lift[index]}`} delay={index * 90}>
          <article className="soft-card flex h-full flex-col overflow-hidden rounded-[24px]">
            <BrandTile icon={stage.icon} tone={stage.tone} className="h-32" />
            <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-1.5" aria-hidden>
              {stages.map((_, bar) => (
                <span
                  key={bar}
                  className={`h-1.5 flex-1 rounded-full ${
                    bar <= index ? "bg-lavender-deep" : "bg-[#e9e3f4]"
                  }`}
                />
              ))}
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-lavender-deep">
              Stage {index + 1}
            </p>
            <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{stage.body}</p>

            <dl className="mt-5 space-y-3 border-t border-[#efe8f6] pt-4 text-sm">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                  Our part
                </dt>
                <dd className="mt-1 leading-6 text-ink-soft">{stage.role}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                  What changes for you
                </dt>
                <dd className="mt-1 flex gap-2 leading-6 text-ink">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4aa8d4]"
                    aria-hidden
                  />
                  {stage.gain}
                </dd>
              </div>
            </dl>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
