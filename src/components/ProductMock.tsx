/**
 * High-fidelity product mockups rendered as real markup — not images — so the
 * type stays crisp at any size and the palette always matches the brand.
 */

const NAV = ["Dashboard", "Contacts", "Inventory", "Purchase", "Sales", "Accounting", "Reports"];

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-[14px] border border-[#e7e1f2] bg-white shadow-[0_18px_40px_-30px_rgba(76,61,110,0.55)]">
      <div className="flex items-center gap-2 border-b border-[#f0ecf7] bg-[#fbfafe] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#e0d7ef]" />
        <span className="h-2 w-2 rounded-full bg-[#dbeaf3]" />
        <span className="h-2 w-2 rounded-full bg-[#f5dbd2]" />
        <p className="ml-2 text-[9px] font-medium tracking-wide text-ink-muted">{title}</p>
      </div>
      {children}
    </div>
  );
}

export function ErpMock() {
  const kpis = [
    { label: "Sales orders", value: "17", note: "pending", tone: "#6f5b9a" },
    { label: "In-process stock", value: "42", note: "units", tone: "#33809f" },
    { label: "Purchase requests", value: "8", note: "to approve", tone: "#6f5b9a" },
    { label: "Outstanding", value: "₹77,033", note: "receivable", tone: "#c1614c" },
  ];

  return (
    <Window title="iSofton ERP · Dashboard">
      <div className="flex h-[calc(100%-33px)]">
        <div className="hidden w-[22%] shrink-0 border-r border-[#f0ecf7] bg-[#faf8fd] py-2.5 sm:block">
          {NAV.map((item, i) => (
            <p
              key={item}
              className={`truncate px-3 py-[5px] text-[9px] ${
                i === 0 ? "font-medium text-lavender-deep" : "text-ink-muted"
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex-1 p-2.5">
          <div className="grid grid-cols-2 gap-1.5">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-[#f0ecf7] bg-[#fcfbfe] p-2">
                <p className="truncate text-[8px] uppercase tracking-wide text-ink-muted">
                  {kpi.label}
                </p>
                <p className="mt-0.5 font-display text-[13px] font-semibold" style={{ color: kpi.tone }}>
                  {kpi.value}
                </p>
                <p className="text-[8px] text-ink-muted">{kpi.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-1.5 flex gap-1.5">
            <div className="flex-1 rounded-lg border border-[#f0ecf7] bg-[#fcfbfe] p-2">
              <p className="text-[8px] uppercase tracking-wide text-ink-muted">Stock movement</p>
              <svg viewBox="0 0 160 44" className="mt-1 h-11 w-full" aria-hidden>
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <rect
                    key={i}
                    x={6 + i * 22}
                    y={40 - [14, 22, 18, 30, 24, 34, 40][i]}
                    width={13}
                    height={[14, 22, 18, 30, 24, 34, 40][i]}
                    rx={3}
                    fill={i === 6 ? "#6f5b9a" : "#ddd2f4"}
                  />
                ))}
              </svg>
            </div>
            <div className="w-[38%] rounded-lg border border-[#f0ecf7] bg-[#fcfbfe] p-2">
              <p className="text-[8px] uppercase tracking-wide text-ink-muted">Customers</p>
              <div className="mt-1 flex items-center justify-center">
                <svg viewBox="0 0 60 60" className="h-11 w-11" aria-hidden>
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#eee9f6" strokeWidth="9" />
                  <circle
                    cx="30"
                    cy="30"
                    r="22"
                    fill="none"
                    stroke="#7ec8e8"
                    strokeWidth="9"
                    strokeDasharray="98 140"
                    strokeLinecap="round"
                    transform="rotate(-90 30 30)"
                  />
                  <text
                    x="30"
                    y="33"
                    textAnchor="middle"
                    className="fill-[#1a1d26] text-[11px] font-semibold"
                  >
                    828
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export function CrmMock() {
  const columns = [
    { name: "New", tone: "#a793cf", deals: ["Sidhan — portal", "Mobel — catalogue"] },
    { name: "Quoted", tone: "#7cc3e0", deals: ["FinStage — app", "Shivi — booking"] },
    { name: "Won", tone: "#eda58f", deals: ["Inspace — website"] },
  ];

  return (
    <Window title="iSofton CRM · Pipeline">
      <div className="flex h-[calc(100%-33px)] gap-1.5 p-2.5">
        {columns.map((col) => (
          <div key={col.name} className="flex-1 rounded-lg bg-[#faf8fd] p-1.5">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: col.tone }} />
              <p className="text-[8.5px] font-medium text-ink-soft">{col.name}</p>
            </div>
            <div className="mt-1.5 space-y-1.5">
              {col.deals.map((deal) => (
                <div
                  key={deal}
                  className="rounded-md border border-[#f0ecf7] bg-white px-1.5 py-1.5 shadow-[0_6px_14px_-12px_rgba(76,61,110,0.5)]"
                >
                  <p className="truncate text-[8.5px] font-medium text-ink">{deal}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="h-1 w-8 rounded-full" style={{ background: col.tone }} />
                    <span className="h-3 w-3 rounded-full bg-[#f2eefa]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

export function AppMock() {
  const jobs = [
    { title: "HVAC service", meta: "10:30 · Andheri", done: true },
    { title: "Panel install", meta: "12:15 · Bandra", done: false },
    { title: "Site survey", meta: "15:00 · Powai", done: false },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center gap-3">
      {/* Phone */}
      <div className="h-full max-h-[230px] w-[128px] shrink-0 overflow-hidden rounded-[18px] border-[3px] border-[#efe9f7] bg-white shadow-[0_18px_40px_-26px_rgba(76,61,110,0.6)]">
        <div className="flex items-center justify-center bg-white pb-1 pt-1.5">
          <span className="h-1 w-8 rounded-full bg-[#ece7f5]" />
        </div>
        <div className="bg-[#6f5b9a] px-2.5 pb-3 pt-2">
          <p className="text-[8px] uppercase tracking-wide text-white/70">Today</p>
          <p className="font-display text-[13px] font-semibold text-white">3 jobs</p>
        </div>
        <div className="space-y-1.5 p-2">
          {jobs.map((job) => (
            <div key={job.title} className="rounded-lg border border-[#f0ecf7] bg-white p-1.5">
              <div className="flex items-center justify-between gap-1">
                <p className="truncate text-[8.5px] font-medium text-ink">{job.title}</p>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: job.done ? "#7cc3e0" : "#e3dff0" }}
                />
              </div>
              <p className="mt-0.5 text-[8px] text-ink-muted">{job.meta}</p>
            </div>
          ))}
          <div className="rounded-full bg-[#7ec8e8] py-1.5 text-center text-[8.5px] font-medium text-white">
            Start next job
          </div>
        </div>
      </div>

      {/* Side panel */}
      <div className="hidden h-full max-h-[190px] flex-1 flex-col justify-center gap-1.5 sm:flex">
        {[
          { label: "Offline sync", value: "Queued 4" },
          { label: "Photos captured", value: "128" },
          { label: "Signatures", value: "37" },
        ].map((row) => (
          <div
            key={row.label}
            className="rounded-lg border border-[#f0ecf7] bg-white px-2.5 py-2 shadow-[0_10px_24px_-22px_rgba(76,61,110,0.6)]"
          >
            <p className="text-[8px] uppercase tracking-wide text-ink-muted">{row.label}</p>
            <p className="mt-0.5 font-display text-[12px] font-semibold text-ink">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
