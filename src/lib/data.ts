export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  image: string;
  accent: "lavender" | "coral" | "cyan";
  outcomes: string[];
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "app-development",
    title: "App Development",
    short: "iOS and Android products that feel native — and get used.",
    summary:
      "We design and ship mobile apps from first MVP to store release: architecture, analytics, and a plan for the next version.",
    image: "/images/service-app.jpg",
    accent: "coral",
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
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Sites and web apps that load fast and convert.",
    summary:
      "Marketing sites, customer portals, and SaaS dashboards built for speed, search, and the way your team works.",
    image: "/images/service-web.jpg",
    accent: "lavender",
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
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    short: "Assistants and workflows that cut real hours.",
    summary:
      "We put AI into operations: copilots, document intelligence, and automations grounded in your data and your rules.",
    image: "/images/service-ai.jpg",
    accent: "cyan",
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
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    short: "Models that forecast, classify, and recommend.",
    summary:
      "From a data audit to a model in production — wired into the product, not left in a notebook.",
    image: "/images/service-ml.jpg",
    accent: "lavender",
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
  },
  {
    slug: "cloud-and-it",
    title: "Cloud & IT",
    short: "Infrastructure that stays fast as you grow.",
    summary:
      "Cloud architecture, DevOps, and support so releases stay boring — in a good way.",
    image: "/images/service-cloud.jpg",
    accent: "cyan",
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
  },
  {
    slug: "product-design",
    title: "Product Design",
    short: "Interfaces that match the quality of the engineering.",
    summary:
      "Brand, UX, and UI for software companies — research, flows, and a system designers and engineers can share.",
    image: "/images/service-design.jpg",
    accent: "coral",
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
    image: "/images/work-retail.jpg",
    mock: "/images/mock-retail-app.png",
    summary:
      "An internal assistant for inventory, staffing, and sales questions — the kind of tool a store manager opens before the morning huddle.",
  },
  {
    slug: "founders-platform",
    title: "Founder launch platform",
    sector: "SaaS",
    result: "First release in weeks, not quarters",
    image: "/images/work-saas.jpg",
    mock: "/images/mock-saas-dashboard.png",
    summary:
      "A subscription product with billing, onboarding, and a simple admin — enough to sell, take payment, and learn from the first customers.",
  },
  {
    slug: "field-service-app",
    title: "Field service app",
    sector: "Operations",
    result: "More jobs closed per day",
    image: "/images/work-field.jpg",
    mock: "/images/mock-field-app.png",
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
    image: "/images/portrait-1.jpg",
  },
  {
    quote:
      "They stayed after launch. That is rarer than good slides. The product kept getting better.",
    name: "Dhruvil Dobariya",
    role: "Web Designer",
    score: "5.0",
    image: "/images/portrait-2.jpg",
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

export const clients = [
  { name: "Sidhan Investments", sector: "Investments", logo: "/images/clients/sidhan.png" },
  { name: "Inspace Design", sector: "Design", logo: "/images/clients/inspace.png" },
  { name: "Mobel & Litt", sector: "Furniture & lighting", logo: "/images/clients/mobel.png" },
  { name: "FinStage", sector: "Finance", logo: "/images/clients/finstage.png" },
  { name: "VIP Visawise", sector: "Immigration", logo: "/images/clients/visawise.png" },
  { name: "Shivi Beauty Care", sector: "Beauty", logo: "/images/clients/shivi.png" },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
