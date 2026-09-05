export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  image: string;
  accent: "lavender" | "coral" | "cyan";
  icon: "app" | "web" | "ai" | "ml" | "cloud" | "design";
  outcomes: string[];
  offerings: string[];
  goodFit: string[];
  stack: string[];
  phases: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "app-development",
    title: "App Development",
    short: "iOS and Android products that feel native — and get used.",
    summary:
      "We design and ship mobile apps from first MVP to store release: architecture, analytics, and a plan for the next version.",
    image: "/images/photos/service-app.jpg",
    accent: "coral",
    icon: "app",
    outcomes: [
      "A launch-ready iOS and Android app",
      "Auth, payments, and push notifications",
      "A roadmap you can keep shipping after week one",
    ],
    offerings: [
      "Flutter and React Native",
      "Native iOS and Android when needed",
      "Store submission and release trains",
      "Offline-first and real-time apps",
    ],
    goodFit: [
      "You have a first version to prove with real users",
      "Your team works away from a desk and needs offline",
      "An existing app has stalled and needs a steady owner",
    ],
    stack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    phases: [
      {
        title: "Flows before screens",
        body: "We map the three journeys that carry the product, then design those first. Everything else follows the pattern they set.",
      },
      {
        title: "A build you can hold",
        body: "A TestFlight and Play build in your hands from week two, updated every week you are with us.",
      },
      {
        title: "Store and after",
        body: "Review submission, staged rollout, crash and analytics dashboards, and a plan for version 1.1.",
      },
    ],
    faqs: [
      {
        q: "Do we need two separate apps for iOS and Android?",
        a: "Usually no. Flutter or React Native covers both from one codebase. We go native when the product leans hard on the camera, background location, or platform hardware.",
      },
      {
        q: "How long until something is in the store?",
        a: "A focused first release is typically six to twelve weeks, including review. We agree the cut line at scoping so the date holds.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Sites and web apps that load fast and convert.",
    summary:
      "Marketing sites, customer portals, and SaaS dashboards built for speed, search, and the way your team works.",
    image: "/images/photos/service-web.jpg",
    accent: "lavender",
    icon: "web",
    outcomes: [
      "A site that loads quickly and ranks cleanly",
      "Admin tools your team can use alone",
      "A design system that holds on every screen",
    ],
    offerings: [
      "Next.js and React platforms",
      "Headless CMS and marketing sites",
      "Customer portals and dashboards",
      "Performance, accessibility, and SEO",
    ],
    goodFit: [
      "Your site looks dated next to the product behind it",
      "Customers email your team for things a portal should answer",
      "Marketing cannot change a page without an engineer",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Sanity", "Vercel"],
    phases: [
      {
        title: "Structure and story",
        body: "Sitemap, page intent, and the words — decided before design, so the layout has something to carry.",
      },
      {
        title: "A system, not pages",
        body: "Components, tokens, and states your team can recombine into new pages without calling us.",
      },
      {
        title: "Fast on a real phone",
        body: "Core Web Vitals, structured data, and an editor your marketing lead can actually use.",
      },
    ],
    faqs: [
      {
        q: "Can our team edit the site afterwards?",
        a: "Yes. We ship with a headless CMS and page blocks your team composes. Nothing important should need a deploy to change.",
      },
      {
        q: "Will you work with our existing brand?",
        a: "Happily. If there is no system yet, we build a light one — type, colour, spacing, components — as part of the work.",
      },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    short: "Assistants and workflows that cut real hours.",
    summary:
      "We put AI into operations: copilots, document intelligence, and automations grounded in your data and your rules.",
    image: "/images/photos/service-ai.jpg",
    accent: "cyan",
    icon: "ai",
    outcomes: [
      "An assistant trained on your knowledge",
      "Fewer handoffs in sales, support, and ops",
      "Guardrails so answers stay accurate",
    ],
    offerings: [
      "Custom assistants and copilots",
      "Search over your documents and tools",
      "Process automation",
      "Evaluation and human review",
    ],
    goodFit: [
      "Your team retypes the same answers every week",
      "Knowledge sits in documents nobody can search",
      "You tried a chatbot and it made things up",
    ],
    stack: ["Claude", "OpenAI", "LangGraph", "pgvector", "Python", "TypeScript"],
    phases: [
      {
        title: "Find the hours",
        body: "We shadow the work and pick the one or two tasks where an assistant removes real time — not the ones that demo well.",
      },
      {
        title: "Ground it in your data",
        body: "Retrieval over your documents and systems, with citations, so an answer can always be checked against the source.",
      },
      {
        title: "Measure and guard",
        body: "An evaluation set, refusal rules, and a human review step before anything customer-facing goes live.",
      },
    ],
    faqs: [
      {
        q: "How do you stop it inventing answers?",
        a: "Answers are retrieved from your own content and cited, the model is told to refuse outside its sources, and we score it against a fixed question set before and after every change.",
      },
      {
        q: "Does our data get used to train a model?",
        a: "No. We use business API tiers where your content is not used for training, and we can keep sensitive steps inside your own cloud.",
      },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    short: "Models that forecast, classify, and recommend.",
    summary:
      "From a data audit to a model in production — wired into the product, not left in a notebook.",
    image: "/images/photos/service-ml.jpg",
    accent: "lavender",
    icon: "ml",
    outcomes: [
      "Predictions inside the product",
      "A pipeline you can trust each week",
      "Metrics that show lift, not just accuracy",
    ],
    offerings: [
      "Forecasting and demand models",
      "Recommendation and ranking",
      "Computer vision and language",
      "Monitoring after go-live",
    ],
    goodFit: [
      "You hold years of data and act on none of it",
      "Buying, staffing, or pricing is decided on a gut feel",
      "A notebook proved a model and it never shipped",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "MLflow", "BigQuery", "Airflow"],
    phases: [
      {
        title: "Audit the data",
        body: "What you hold, how clean it is, and whether the question can be answered at all. We say so early if it cannot.",
      },
      {
        title: "Baseline, then model",
        body: "A simple rule first as the bar to beat, so improvement is measured against something honest.",
      },
      {
        title: "Into the product",
        body: "The prediction appears where a decision is made — a screen, an alert, a queue — with monitoring for drift.",
      },
    ],
    faqs: [
      {
        q: "How much data do we need?",
        a: "Less than most people expect for forecasting, more than most expect for vision. The audit in week one gives you a straight answer before you commit to a build.",
      },
      {
        q: "What if the model does not beat the baseline?",
        a: "We tell you and stop. A rule that works is a better outcome than a model that impresses.",
      },
    ],
  },
  {
    slug: "cloud-and-it",
    title: "Cloud & IT",
    short: "Infrastructure that stays fast as you grow.",
    summary:
      "Cloud architecture, DevOps, and support so releases stay boring — in a good way.",
    image: "/images/photos/service-cloud.jpg",
    accent: "cyan",
    icon: "cloud",
    outcomes: [
      "Environments that deploy in minutes",
      "Cost and security you can explain",
      "A stack your team can run after handover",
    ],
    offerings: [
      "AWS, GCP, and Azure",
      "CI/CD, containers, and infrastructure as code",
      "Monitoring and incident response",
      "Security reviews and managed support",
    ],
    goodFit: [
      "Releases are a late night and a held breath",
      "Your cloud bill grew and nobody can explain it",
      "One person knows how the servers work",
    ],
    stack: ["AWS", "GCP", "Azure", "Terraform", "Docker", "GitHub Actions"],
    phases: [
      {
        title: "Read what is running",
        body: "An honest map of the stack, the costs, and the three things most likely to wake someone at night.",
      },
      {
        title: "Make it repeatable",
        body: "Infrastructure as code, environments that rebuild themselves, and a deploy anyone on the team can run.",
      },
      {
        title: "Watch and hand over",
        body: "Alerts that mean something, a runbook, and a walkthrough so your team can own it after we leave.",
      },
    ],
    faqs: [
      {
        q: "Can you take over infrastructure someone else built?",
        a: "Yes. That is most of this work. We document what exists, stabilise it, and only then change things — one piece at a time.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes, as a monthly retainer with an agreed response time. You can also take full handover; the runbook is written either way.",
      },
    ],
  },
  {
    slug: "product-design",
    title: "Product Design",
    short: "Interfaces that match the quality of the engineering.",
    summary:
      "Brand, UX, and UI for software companies — research, flows, and a system designers and engineers can share.",
    image: "/images/photos/service-design.jpg",
    accent: "coral",
    icon: "design",
    outcomes: [
      "A visual system that scales",
      "Flows tested with real users",
      "Handoff engineers can build from",
    ],
    offerings: [
      "Brand and visual identity",
      "UX research and product flows",
      "UI systems and tokens",
      "Marketing sites and motion",
    ],
    goodFit: [
      "The engineering is strong and the interface hides it",
      "Every new screen looks like a different product",
      "Users stall at the same step and nobody knows why",
    ],
    stack: ["Figma", "Design tokens", "Storybook", "Framer Motion", "Maze"],
    phases: [
      {
        title: "Watch real users",
        body: "Short sessions with the people who actually use it. The findings decide what we redesign first.",
      },
      {
        title: "Design the system",
        body: "Type, colour, spacing, and components as tokens — so the tenth screen costs a fraction of the first.",
      },
      {
        title: "Hand off to build",
        body: "Specs, states, and motion the engineers on this team can build from, because they were in the reviews.",
      },
    ],
    faqs: [
      {
        q: "Can you design without building?",
        a: "Yes. We hand over a system and specs your engineers can build. Most clients keep us for the build because the handoff gap is where quality usually goes.",
      },
      {
        q: "Do you do brand work too?",
        a: "Yes — logo, palette, type, and the basics of a brand kit, sized for a software company rather than a full agency identity programme.",
      },
    ],
  },
];

export const values = [
  {
    title: "Value to the customer",
    body: "We sit with you. Each sprint should move revenue, speed, or trust — not just a ticket count.",
  },
  {
    title: "Will to win",
    body: "Hard problems are the job. We stay until the product is something you will put your name on.",
  },
  {
    title: "Accountability",
    body: "We own the date, the quality, and the conversation if something slips.",
  },
  {
    title: "Quality",
    body: "Clean code, considered design, and software people can rely on on a Monday morning.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Scope the work",
    body: "A short brief, a working session, and a written plan: what ships first, what waits, and what it costs.",
  },
  {
    n: "02",
    title: "Design the system",
    body: "Architecture, UX, and data — reviewed by people who will also write the code.",
  },
  {
    n: "03",
    title: "Build in the open",
    body: "Weekly demos. A shared backlog. Something you can click every Friday.",
  },
  {
    n: "04",
    title: "Launch and stay",
    body: "We go live, watch the first weeks, then either hand over or keep a retainer.",
  },
];

export const work = [
  {
    slug: "retail-ops-copilot",
    title: "Retail operations copilot",
    sector: "Retail",
    result: "Faster store reporting",
    icon: "retail" as const,
    shot: "/images/photos/work-retail.jpg",
    accent: "coral" as const,
    summary:
      "An internal assistant for inventory, staffing, and sales questions — the kind of tool a store manager opens before the morning huddle.",
  },
  {
    slug: "founders-platform",
    title: "Founder launch platform",
    sector: "SaaS",
    result: "First release in weeks, not quarters",
    icon: "saas" as const,
    shot: "/images/photos/work-saas.jpg",
    accent: "lavender" as const,
    summary:
      "A subscription product with billing, onboarding, and a simple admin — enough to sell, take payment, and learn from the first customers.",
  },
  {
    slug: "field-service-app",
    title: "Field service app",
    sector: "Operations",
    result: "More jobs closed per day",
    icon: "field" as const,
    shot: "/images/photos/work-field.jpg",
    accent: "cyan" as const,
    summary:
      "Offline-first Android and iOS for technicians: routes, photos, signatures, and a dispatcher view that stays in sync.",
  },
];

export const reviews = [
  {
    quote:
      "Reliable work, careful detail, and a pace that treated us like a partner — not a ticket queue.",
    name: "Arjun Kheni",
    role: "Walmart Canada",
    score: "4.5",
  },
  {
    quote:
      "They stayed after launch. That is rarer than good slides. The product kept getting better.",
    name: "Divyesh Boddu",
    role: "Operations lead",
    score: "5.0",
  },
  {
    quote:
      "They said no to half my ideas and were right about most of them. The build shipped on the date we agreed.",
    name: "Jagan Subudhi",
    role: "Founder",
    score: "5.0",
  },
  {
    quote:
      "Weekly demos meant there were no surprises at the end. I always knew what I was paying for.",
    name: "Jonny Walker",
    role: "Managing director",
    score: "4.5",
  },
  {
    quote:
      "We came with a spreadsheet and left with a product our whole branch uses every morning.",
    name: "Emily Carter",
    role: "Head of operations",
    score: "5.0",
  },
  {
    quote:
      "The AI assistant only answers from our own documents. That is the part other vendors could not promise.",
    name: "Marcus Feld",
    role: "Programme manager",
    score: "5.0",
  },
];

export const faqs = [
  {
    q: "How do we start?",
    a: "Send a brief on the contact page. We reply within one business day with a call, then a written proposal.",
  },
  {
    q: "Do you work with early-stage founders?",
    a: "Yes. First products, landing sites, and the first AI feature. We size the build to the stage you are in.",
  },
  {
    q: "Can you join a product that already exists?",
    a: "Yes. We read the code, stabilize what is live, then add features. We only suggest a rewrite if the product cannot move otherwise.",
  },
  {
    q: "Where is the team?",
    a: "Mumbai and Surat. We work with clients in India, the US, and Canada, on hours you choose.",
  },
  {
    q: "How do you use AI in delivery?",
    a: "For research, scaffolding, and checks. Engineers still design, review, and own every production change.",
  },
  {
    q: "How do you charge?",
    a: "Fixed-scope builds and monthly retainers. After a discovery call we recommend one. If it is not a fit, we say so.",
  },
];

export type Client = { name: string; sector: string; logo?: string; scale: number };

export const clients: Client[] = [
  { name: "Sidhan Investments", sector: "Investments", logo: "/images/clients/sidhan.png", scale: 1.05 },
  { name: "Inspace Design", sector: "Design", logo: "/images/clients/inspace.png", scale: 0.95 },
  { name: "Mobel & Litt", sector: "Furniture & lighting", logo: "/images/clients/mobel.png", scale: 1.05 },
  { name: "FinStage", sector: "Finance", logo: "/images/clients/finstage.png", scale: 1 },
  { name: "VIP Visawise", sector: "Immigration", logo: "/images/clients/visawise.png", scale: 2 },
  { name: "Shivi Beauty Care", sector: "Beauty", logo: "/images/clients/shivi.png", scale: 2 },
  { name: "ViaTAPit", sector: "Technology", scale: 1 },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
