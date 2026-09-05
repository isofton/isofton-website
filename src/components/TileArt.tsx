export type TileIcon =
  | "app"
  | "web"
  | "ai"
  | "ml"
  | "cloud"
  | "design"
  | "retail"
  | "saas"
  | "field"
  | "board"
  | "team"
  | "city";

export type Palette = { ink: string; mid: string; soft: string };

const CARD = "#ffffff";
const RULE = "#eeebf5";
const FAINT = "#f5f3fa";
const GHOST = "#faf9fd";

/** Two-layer soft shadow — the thing that makes a flat rect read as a floating card. */
function Lift({
  x,
  y,
  w,
  h,
  r = 14,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
}) {
  return (
    <>
      <rect x={x + 4} y={y + 10} width={w} height={h} rx={r} fill="#4b3d6b" opacity="0.05" />
      <rect x={x + 2} y={y + 4} width={w} height={h} rx={r} fill="#4b3d6b" opacity="0.06" />
    </>
  );
}

/** A window with real chrome — dots, a URL pill, a hairline under the bar. */
function Window({
  x,
  y,
  w,
  h,
  mid,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  mid: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Lift x={x} y={y} w={w} h={h} />
      <rect x={x} y={y} width={w} height={h} rx={14} fill={CARD} />
      <circle cx={x + 16} cy={y + 14} r={3} fill={mid} opacity="0.9" />
      <circle cx={x + 27} cy={y + 14} r={3} fill={mid} opacity="0.5" />
      <circle cx={x + 38} cy={y + 14} r={3} fill={mid} opacity="0.3" />
      <rect x={x + 54} y={y + 9} width={w - 74} height={10} rx={5} fill={GHOST} />
      <line x1={x} y1={y + 28} x2={x + w} y2={y + 28} stroke={RULE} strokeWidth="1.2" />
      {children}
    </>
  );
}

export function TileArt({ icon, palette }: { icon: TileIcon; palette: Palette }) {
  const { ink, mid, soft } = palette;

  const art: Record<TileIcon, React.ReactNode> = {
    /* Phone with status bar, header card, list rows and a tab bar. */
    app: (
      <>
        <Lift x={186} y={26} w={78} h={150} r={16} />
        <rect x={186} y={26} width={78} height={150} rx={16} fill={CARD} />
        <rect x={210} y={33} width={30} height={5} rx={2.5} fill="#e7e3f0" />
        <rect x={196} y={46} width={58} height={34} rx={9} fill={soft} />
        <circle cx={207} cy={57} r={5} fill={CARD} opacity="0.9" />
        <rect x={217} y={54} width={28} height={4} rx={2} fill={CARD} opacity="0.85" />
        <rect x={217} y={62} width={18} height={4} rx={2} fill={CARD} opacity="0.6" />
        <rect x={196} y={88} width={58} height={7} rx={3.5} fill={FAINT} />
        <rect x={196} y={100} width={44} height={7} rx={3.5} fill={FAINT} />
        <rect x={196} y={112} width={52} height={7} rx={3.5} fill={FAINT} />
        <rect x={196} y={130} width={58} height={16} rx={8} fill={ink} opacity="0.88" />
        <line x1={186} y1={158} x2={264} y2={158} stroke={RULE} strokeWidth="1.2" />
        <circle cx={203} cy={167} r={3.5} fill={ink} opacity="0.8" />
        <circle cx={225} cy={167} r={3.5} fill="#e2ddec" />
        <circle cx={247} cy={167} r={3.5} fill="#e2ddec" />

        <Lift x={44} y={62} w={110} h={80} r={14} />
        <rect x={44} y={62} width={110} height={80} rx={14} fill={CARD} />
        <rect x={58} y={76} width={40} height={6} rx={3} fill={FAINT} />
        <rect x={58} y={92} width={82} height={34} rx={9} fill={GHOST} />
        <rect x={68} y={104} width={12} height={12} rx={3} fill={mid} />
        <rect x={88} y={104} width={42} height={5} rx={2.5} fill="#e7e3f0" />
        <rect x={88} y={113} width={26} height={5} rx={2.5} fill="#efecf5" />
      </>
    ),

    /* Browser: sidebar nav, page heading, cards and a small column chart. */
    web: (
      <>
        <Window x={30} y={22} w={260} h={156} mid={mid}>
          <rect x={42} y={40} width={54} height={126} rx={10} fill={GHOST} />
          <rect x={52} y={52} width={34} height={6} rx={3} fill={soft} />
          <rect x={52} y={66} width={26} height={5} rx={2.5} fill="#e9e5f1" />
          <rect x={52} y={78} width={30} height={5} rx={2.5} fill="#e9e5f1" />
          <rect x={52} y={90} width={22} height={5} rx={2.5} fill="#e9e5f1" />
          <rect x={108} y={44} width={92} height={9} rx={4.5} fill="#e7e3f0" />
          <rect x={108} y={60} width={148} height={6} rx={3} fill={FAINT} />
          <rect x={108} y={78} width={70} height={40} rx={10} fill={GHOST} />
          <rect x={118} y={90} width={30} height={5} rx={2.5} fill="#e7e3f0" />
          <rect x={118} y={100} width={46} height={8} rx={4} fill={mid} />
          <rect x={186} y={78} width={70} height={40} rx={10} fill={GHOST} />
          <rect x={196} y={90} width={30} height={5} rx={2.5} fill="#e7e3f0" />
          <rect x={196} y={100} width={40} height={8} rx={4} fill={soft} />
          <rect x={108} y={128} width={148} height={38} rx={10} fill={GHOST} />
          <rect x={120} y={148} width={12} height={10} rx={3} fill={soft} />
          <rect x={138} y={140} width={12} height={18} rx={3} fill={mid} />
          <rect x={156} y={144} width={12} height={14} rx={3} fill={soft} />
          <rect x={174} y={134} width={12} height={24} rx={3} fill={ink} opacity="0.7" />
          <rect x={192} y={139} width={12} height={19} rx={3} fill={soft} />
        </Window>
      </>
    ),

    /* Assistant: a chat thread with avatar, a cited reply and a typing indicator. */
    ai: (
      <>
        <Lift x={28} y={22} w={264} h={156} />
        <rect x={28} y={22} width={264} height={156} rx={14} fill={CARD} />
        <circle cx={48} cy={42} r={9} fill={soft} />
        <rect x={64} y={36} width={62} height={6} rx={3} fill="#e7e3f0" />
        <rect x={64} y={46} width={40} height={5} rx={2.5} fill={FAINT} />
        <line x1={28} y1={62} x2={292} y2={62} stroke={RULE} strokeWidth="1.2" />

        <rect x={44} y={76} width={132} height={34} rx={12} fill={GHOST} />
        <rect x={56} y={86} width={92} height={5} rx={2.5} fill="#e4e0ee" />
        <rect x={56} y={96} width={62} height={5} rx={2.5} fill="#e9e5f1" />

        <rect x={132} y={118} width={144} height={38} rx={12} fill={ink} opacity="0.88" />
        <rect x={144} y={128} width={104} height={5} rx={2.5} fill={CARD} opacity="0.8" />
        <rect x={144} y={138} width={78} height={5} rx={2.5} fill={CARD} opacity="0.55" />
        <rect x={228} y={136} width={34} height={9} rx={4.5} fill={CARD} opacity="0.28" />

        <rect x={44} y={124} width={44} height={20} rx={10} fill={GHOST} />
        <circle cx={56} cy={134} r={2.6} fill={mid} />
        <circle cx={66} cy={134} r={2.6} fill={mid} opacity="0.6" />
        <circle cx={76} cy={134} r={2.6} fill={mid} opacity="0.35" />

        <path
          d="M268 32l3.6 9.2L281 45l-9.4 3.6L268 58l-3.6-9.4L255 45l9.4-3.8L268 32z"
          fill={mid}
        />
      </>
    ),

    /* Forecast card: axis, bars, prediction line and a highlighted value. */
    ml: (
      <>
        <Lift x={30} y={24} w={260} h={152} />
        <rect x={30} y={24} width={260} height={152} rx={14} fill={CARD} />
        <rect x={46} y={40} width={64} height={7} rx={3.5} fill="#e7e3f0" />
        <rect x={228} y={38} width={46} height={14} rx={7} fill={GHOST} />
        <circle cx={238} cy={45} r={3} fill={mid} />
        <line x1={46} y1={150} x2={274} y2={150} stroke={RULE} strokeWidth="1.2" />
        <line x1={46} y1={116} x2={274} y2={116} stroke={RULE} strokeWidth="1" />
        <line x1={46} y1={84} x2={274} y2={84} stroke={RULE} strokeWidth="1" />
        <rect x={56} y={120} width={20} height={30} rx={5} fill={soft} />
        <rect x={92} y={108} width={20} height={42} rx={5} fill={soft} />
        <rect x={128} y={114} width={20} height={36} rx={5} fill={soft} />
        <rect x={164} y={92} width={20} height={58} rx={5} fill={mid} />
        <rect x={200} y={78} width={20} height={72} rx={5} fill={mid} />
        <rect x={236} y={64} width={20} height={86} rx={5} fill={ink} opacity="0.8" />
        <path
          d="M66 116 L102 104 L138 110 L174 88 L210 74 L246 60"
          fill="none"
          stroke={ink}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={246} cy={60} r={5} fill={ink} stroke={CARD} strokeWidth="2.5" />
      </>
    ),

    /* Cloud over an environment row — services, a deploy tick, health dots. */
    cloud: (
      <>
        <Lift x={96} y={22} w={128} h={58} r={26} />
        <path
          d="M126 80a24 24 0 0 1-1.8-47.9 31 31 0 0 1 59.4-7 22 22 0 0 1 19.4 22 22 22 0 0 1-22 32.9H126z"
          fill={CARD}
        />
        <rect x={140} y={46} width={48} height={6} rx={3} fill="#e7e3f0" />
        <rect x={140} y={57} width={30} height={6} rx={3} fill={soft} />
        <path d="M160 82v20M160 102H70v12M160 102h90v12" stroke={mid} strokeWidth="1.8" fill="none" />
        {[46, 132, 218].map((x, i) => (
          <g key={x}>
            <Lift x={x} y={114} w={56} h={48} r={12} />
            <rect x={x} y={114} width={56} height={48} rx={12} fill={CARD} />
            <circle cx={x + 14} cy={128} r={4} fill={i === 1 ? mid : soft} />
            <rect x={x + 24} y={125} width={22} height={5} rx={2.5} fill="#e9e5f1" />
            <rect x={x + 12} y={140} width={32} height={5} rx={2.5} fill={FAINT} />
            <rect x={x + 12} y={149} width={20} height={5} rx={2.5} fill={FAINT} />
          </g>
        ))}
      </>
    ),

    /* Design canvas: toolbar, shapes, selection handles and a swatch row. */
    design: (
      <>
        <Lift x={30} y={24} w={260} h={152} />
        <rect x={30} y={24} width={260} height={152} rx={14} fill={CARD} />
        <rect x={30} y={24} width={44} height={152} rx={14} fill={GHOST} />
        <rect x={44} y={42} width={16} height={16} rx={5} fill={soft} />
        <rect x={44} y={66} width={16} height={16} rx={5} fill="#eae6f2" />
        <rect x={44} y={90} width={16} height={16} rx={5} fill="#eae6f2" />
        <circle cx={52} cy={140} r={6} fill={mid} />
        <circle cx={52} cy={158} r={6} fill={soft} />
        <circle cx={126} cy={104} r={30} fill={soft} />
        <rect x={166} y={62} width={56} height={56} rx={16} fill={mid} opacity="0.8" />
        <path d="M198 156l20-34 20 34h-40z" fill={ink} opacity="0.5" />
        <g fill={CARD} stroke={ink} strokeWidth="1.5">
          <rect x={92} y={70} width={7} height={7} rx={1.5} />
          <rect x={153} y={70} width={7} height={7} rx={1.5} />
          <rect x={92} y={131} width={7} height={7} rx={1.5} />
          <rect x={153} y={131} width={7} height={7} rx={1.5} />
        </g>
      </>
    ),

    /* Inventory list with thumbnails, stock counts and a low-stock flag. */
    retail: (
      <>
        <Window x={34} y={22} w={252} h={156} mid={mid}>
          <rect x={48} y={40} width={70} height={8} rx={4} fill="#e7e3f0" />
          <rect x={222} y={38} width={50} height={14} rx={7} fill={soft} />
          {[62, 100, 138].map((y, i) => (
            <g key={y}>
              <rect x={48} y={y} width={224} height={32} rx={10} fill={i === 1 ? GHOST : "transparent"} />
              <rect x={58} y={y + 6} width={20} height={20} rx={6} fill={i === 1 ? mid : soft} />
              <rect x={88} y={y + 9} width={72} height={5} rx={2.5} fill="#e4e0ee" />
              <rect x={88} y={y + 19} width={44} height={5} rx={2.5} fill="#eeebf5" />
              <rect x={222} y={y + 11} width={40} height={10} rx={5} fill={i === 1 ? ink : "#eeebf5"} opacity={i === 1 ? 0.7 : 1} />
            </g>
          ))}
        </Window>
      </>
    ),

    /* SaaS dashboard: KPI tiles, an area chart with a marker, side list. */
    saas: (
      <>
        <Window x={28} y={20} w={264} h={160} mid={mid}>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={42 + i * 62} y={40} width={54} height={36} rx={10} fill={GHOST} />
              <rect x={50 + i * 62} y={48} width={22} height={5} rx={2.5} fill="#e7e3f0" />
              <rect x={50 + i * 62} y={59} width={34} height={8} rx={4} fill={i === 0 ? ink : mid} opacity={i === 0 ? 0.75 : 0.85} />
            </g>
          ))}
          <rect x={228} y={40} width={50} height={128} rx={10} fill={GHOST} />
          {[50, 68, 86, 104, 122].map((y) => (
            <g key={y}>
              <circle cx={240} cy={y + 4} r={3.5} fill={soft} />
              <rect x={250} y={y + 1} width={20} height={5} rx={2.5} fill="#e9e5f1" />
            </g>
          ))}
          <rect x={42} y={86} width={172} height={82} rx={10} fill={GHOST} />
          <path
            d="M54 152 C 82 148, 96 136, 122 128 S 172 116, 202 100"
            fill="none"
            stroke={ink}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M54 152 C 82 148, 96 136, 122 128 S 172 116, 202 100 L202 160 L54 160 Z"
            fill={ink}
            opacity="0.12"
          />
          <circle cx={202} cy={100} r={5} fill={ink} stroke={CARD} strokeWidth="2.5" />
        </Window>
      </>
    ),

    /* Map with a live route, a dropped pin and a job sheet over it. */
    field: (
      <>
        <Lift x={34} y={20} w={252} h={132} />
        <rect x={34} y={20} width={252} height={132} rx={14} fill={CARD} />
        <rect x={34} y={20} width={252} height={132} rx={14} fill={soft} opacity="0.4" />
        <path d="M34 66h252M34 108h252M110 20v132M198 20v132" stroke={CARD} strokeWidth="3" opacity="0.85" />
        <path
          d="M70 130 C 98 126, 102 96, 132 92 S 180 96, 194 72 S 222 50, 238 48"
          fill="none"
          stroke={mid}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx={70} cy={130} r={6} fill={CARD} stroke={mid} strokeWidth="2.5" />
        <path
          d="M238 30c8.6 0 15.6 7 15.6 15.6 0 11-15.6 27-15.6 27s-15.6-16-15.6-27C222.4 37 229.4 30 238 30z"
          fill={ink}
          opacity="0.85"
        />
        <circle cx={238} cy={45.6} r={5.4} fill={CARD} />
        <Lift x={52} y={118} w={140} h={60} r={14} />
        <rect x={52} y={118} width={140} height={60} rx={14} fill={CARD} />
        <rect x={66} y={132} width={46} height={6} rx={3} fill="#e7e3f0" />
        <rect x={66} y={146} width={82} height={6} rx={3} fill={FAINT} />
        <rect x={66} y={158} width={54} height={6} rx={3} fill={FAINT} />
        <rect x={136} y={150} width={44} height={16} rx={8} fill={ink} opacity="0.8" />
      </>
    ),

    /* Kanban with a moving card and small avatars. */
    board: (
      <>
        {[0, 1, 2].map((col) => {
          const x = 34 + col * 86;
          return (
            <g key={col}>
              <rect x={x} y={24} width={74} height={152} rx={14} fill={CARD} opacity="0.5" />
              <rect x={x + 14} y={38} width={34} height={6} rx={3} fill={col === 1 ? mid : soft} />
              <circle cx={x + 60} cy={41} r={5} fill={GHOST} />
              <Lift x={x + 12} y={56} w={50} h={38} r={10} />
              <rect x={x + 12} y={56} width={50} height={38} rx={10} fill={CARD} />
              <rect x={x + 20} y={64} width={22} height={4} rx={2} fill={col === 1 ? mid : soft} />
              <rect x={x + 20} y={74} width={30} height={4} rx={2} fill="#eeebf5" />
              <circle cx={x + 26} cy={86} r={4} fill={GHOST} />
              <circle cx={x + 34} cy={86} r={4} fill={FAINT} />
              {col < 2 && (
                <>
                  <Lift x={x + 12} y={104} w={50} h={38} r={10} />
                  <rect x={x + 12} y={104} width={50} height={38} rx={10} fill={CARD} />
                  <rect x={x + 20} y={112} width={26} height={4} rx={2} fill={soft} />
                  <rect x={x + 20} y={122} width={18} height={4} rx={2} fill="#eeebf5" />
                  <circle cx={x + 26} cy={134} r={4} fill={GHOST} />
                </>
              )}
            </g>
          );
        })}
      </>
    ),

    /* A call: three people tiles plus a shared note card. */
    team: (
      <>
        <Lift x={40} y={30} w={240} h={140} />
        <rect x={40} y={30} width={240} height={140} rx={16} fill={CARD} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={54 + i * 74} y={44} width={64} height={62} rx={12} fill={GHOST} />
            <circle cx={86 + i * 74} cy={70} r={13} fill={[soft, mid, ink][i]} opacity={i === 2 ? 0.75 : 1} />
            <rect x={70 + i * 74} y={90} width={32} height={5} rx={2.5} fill="#e9e5f1" />
          </g>
        ))}
        <rect x={54} y={118} width={212} height={38} rx={10} fill={GHOST} />
        <rect x={66} y={128} width={96} height={6} rx={3} fill="#e4e0ee" />
        <rect x={66} y={140} width={62} height={6} rx={3} fill="#eeebf5" />
        <rect x={214} y={130} width={40} height={14} rx={7} fill={ink} opacity="0.75" />
      </>
    ),

    /* Skyline at dusk with lit windows. */
    city: (
      <>
        <circle cx={244} cy={54} r={18} fill={soft} opacity="0.85" />
        <rect x={46} y={98} width={46} height={74} rx={9} fill={CARD} opacity="0.92" />
        <rect x={100} y={58} width={54} height={114} rx={9} fill={CARD} />
        <rect x={162} y={84} width={44} height={88} rx={9} fill={CARD} opacity="0.92" />
        <rect x={214} y={112} width={40} height={60} rx={9} fill={CARD} opacity="0.85" />
        <rect x={126} y={44} width={4} height={16} rx={2} fill={mid} />
        {[0, 1, 2, 3].map((r) =>
          [0, 1].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={112 + c * 20}
              y={72 + r * 22}
              width={12}
              height={12}
              rx={3}
              fill={r === 1 && c === 1 ? mid : soft}
              opacity={r === 3 ? 0.6 : 1}
            />
          )),
        )}
        {[0, 1, 2].map((r) => (
          <rect key={r} x={58} y={112 + r * 20} width={11} height={11} rx={3} fill={r === 1 ? mid : soft} />
        ))}
        {[0, 1, 2].map((r) => (
          <rect key={r} x={174} y={98 + r * 20} width={11} height={11} rx={3} fill={soft} />
        ))}
        <rect x={226} y={126} width={11} height={11} rx={3} fill={soft} />
        <rect x={226} y={146} width={11} height={11} rx={3} fill={mid} />
        <line x1={34} y1={172} x2={286} y2={172} stroke={ink} strokeWidth="2" opacity="0.2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      className="h-full w-full max-w-[440px]"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
    >
      {art[icon]}
    </svg>
  );
}
