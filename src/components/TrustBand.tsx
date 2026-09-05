import { site } from "@/lib/site";

/** Figures come from site.stats — update them there, not here. */
export function TrustBand() {
  const stats = site.stats;

  return (
    <div className="soft-card overflow-hidden rounded-[22px] sm:rounded-[28px]">
      {/* Phones: a tidy list, one line each — no orphaned cell, no dead space. */}
      <ul className="divide-y divide-[#f0ebf8] sm:hidden">
        {stats.map((stat) => (
          <li key={stat.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <span className="font-display text-xl font-semibold leading-none text-lavender-deep">
              {stat.value}
            </span>
            <span className="text-right text-[13px] leading-5 text-ink-muted">{stat.label}</span>
          </li>
        ))}
      </ul>

      {/* Tablet and up: an even band of cells. */}
      <div className="hidden gap-px bg-[#ece7f5] sm:grid sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center bg-white/85 px-4 py-7 text-center ${
              // 5 into 3 columns leaves a gap on the last row — let the last cell fill it
              index === stats.length - 1 ? "sm:col-span-3 lg:col-span-1" : ""
            }`}
          >
            <p className="font-display text-3xl font-semibold leading-none text-lavender-deep lg:text-[32px]">
              {stat.value}
            </p>
            <p className="mt-2 max-w-[10rem] text-[13px] leading-5 text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
