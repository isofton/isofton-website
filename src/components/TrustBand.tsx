import { site } from "@/lib/site";

/** Figures come from site.stats — update them there, not here. */
export function TrustBand() {
  const stats = site.stats;

  return (
    <div className="soft-card grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-[#ece7f5] sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white/85 px-6 py-7 text-center">
          <p className="font-display text-3xl font-semibold text-lavender-deep sm:text-4xl">
            {stat.value}
          </p>
          <p className="mx-auto mt-2 max-w-[10rem] text-xs leading-5 text-ink-muted sm:text-[13px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
