"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type Reply = { id: string; label: string };

type Topic = {
  answer: string;
  next: Reply[];
  link?: { href: string; label: string };
};

const OPENERS: Reply[] = [
  { id: "project", label: "I have a project in mind" },
  { id: "services", label: "What do you build?" },
  { id: "pricing", label: "How do you charge?" },
  { id: "company", label: "Who are you?" },
  { id: "human", label: "Talk to a person" },
];

const BACK: Reply = { id: "menu", label: "Back to the start" };
const TALK: Reply = { id: "human", label: "Talk to a person" };

const TOPICS: Record<string, Topic> = {
  menu: {
    answer: "Sure — what would you like to know?",
    next: OPENERS.filter((item) => item.id !== "human"),
  },

  /* ---- what you want built ---- */
  project: {
    answer:
      "Good place to start. Tell me in one line what you want live — you can type it below and it goes straight to the team.",
    next: [
      { id: "app", label: "A mobile app" },
      { id: "web", label: "A website or portal" },
      { id: "erp", label: "ERP or CRM" },
      { id: "ai", label: "An AI assistant" },
      { id: "unsure", label: "Not sure yet" },
    ],
  },
  app: {
    answer:
      "iOS and Android, usually from one Flutter or React Native codebase. A focused first release is typically six to twelve weeks including store review.",
    next: [
      { id: "timeline", label: "How long does it take?" },
      { id: "maintain", label: "What about after launch?" },
      TALK,
    ],
    link: { href: "/services/app-development", label: "App development" },
  },
  web: {
    answer:
      "Marketing sites, customer portals, and SaaS dashboards in Next.js — with a CMS so your team can edit pages without a deploy.",
    next: [
      { id: "stack", label: "What do you build with?" },
      { id: "existing", label: "We already have a site" },
      TALK,
    ],
    link: { href: "/services/web-development", label: "Web development" },
  },
  erp: {
    answer:
      "Custom ERP and CRM for how you actually work — stock, orders, invoicing, leads and follow-ups in one system instead of five spreadsheets.",
    next: [
      { id: "existing", label: "We use something already" },
      { id: "timeline", label: "How long does it take?" },
      TALK,
    ],
    link: { href: "/services/web-development", label: "How we build it" },
  },
  ai: {
    answer:
      "Assistants grounded in your own documents and systems, with citations and a human review step. We add AI only where it removes real hours.",
    next: [
      { id: "aisafe", label: "How do you stop wrong answers?" },
      { id: "aidata", label: "Is our data safe?" },
      TALK,
    ],
    link: { href: "/services/artificial-intelligence", label: "Artificial intelligence" },
  },
  unsure: {
    answer:
      "That is fine — most briefs start there. Describe the problem rather than the solution and we will tell you what is worth building first.",
    next: [{ id: "process", label: "How does it work?" }, TALK],
  },

  /* ---- AI detail ---- */
  aisafe: {
    answer:
      "Answers come from your own content and are cited, the model is told to refuse anything outside its sources, and we score it against a fixed question set before and after every change.",
    next: [{ id: "aidata", label: "Is our data safe?" }, TALK],
  },
  aidata: {
    answer:
      "Your content is not used to train anyone's model — we use business API tiers, and sensitive steps can stay inside your own cloud.",
    next: [{ id: "ai", label: "Back to AI" }, TALK],
  },

  /* ---- commercial ---- */
  services: {
    answer:
      "Six practices under one roof: app development, web, artificial intelligence, machine learning, cloud & IT, and product design.",
    next: [
      { id: "project", label: "I have a project in mind" },
      { id: "stack", label: "What do you build with?" },
      { id: "pricing", label: "How do you charge?" },
    ],
    link: { href: "/services", label: "All services" },
  },
  pricing: {
    answer:
      "Fixed-scope builds or a monthly retainer. After a short call we recommend one and put it in writing — and we say so if we are not the right fit.",
    next: [
      { id: "quote", label: "Can I get a quote?" },
      { id: "start", label: "How fast can you start?" },
      TALK,
    ],
    link: { href: "/contact", label: "Send a brief" },
  },
  quote: {
    answer:
      "Send what you want live and roughly when. You get a written plan with what ships first, what waits and what it costs — before any code is written.",
    next: [{ id: "process", label: "How does it work?" }, TALK],
    link: { href: "/contact", label: "Send a brief" },
  },
  start: {
    answer:
      "Usually within one to two weeks of agreeing scope. Discovery can start sooner if the brief is ready.",
    next: [{ id: "timeline", label: "How long does it take?" }, TALK],
  },
  timeline: {
    answer:
      "A focused first release is typically six to twelve weeks. You see something clickable every Friday, so the date never comes as a surprise.",
    next: [{ id: "process", label: "How does it work?" }, TALK],
  },

  /* ---- how we work ---- */
  process: {
    answer:
      "Four stages: we map where your hours go, build the tool that carries the work, add AI only where it saves time, then stay while it grows.",
    next: [
      { id: "timeline", label: "How long does it take?" },
      { id: "maintain", label: "What about after launch?" },
      TALK,
    ],
    link: { href: "/engagement", label: "How we work" },
  },
  maintain: {
    answer:
      "We watch the first weeks after launch with you, then either hand over with a runbook or stay on a monthly retainer. Your call.",
    next: [{ id: "own", label: "Who owns the code?" }, TALK],
  },
  own: {
    answer:
      "You do. Code, designs and IP stay with you, and we do not lock the product to us. The handover is written down either way.",
    next: [{ id: "process", label: "How does it work?" }, TALK],
  },
  stack: {
    answer:
      "Next.js and React on the web, Flutter or React Native on mobile, Python for data and models, and AWS, GCP or Azure underneath. Chosen for the job, not for a slide.",
    next: [{ id: "existing", label: "We already have something" }, TALK],
    link: { href: "/services", label: "All services" },
  },
  existing: {
    answer:
      "That is common. We read the code, stabilise what is live, then add features. We only suggest a rewrite if the product truly cannot move otherwise.",
    next: [{ id: "process", label: "How does it work?" }, TALK],
  },

  /* ---- about us ---- */
  company: {
    answer:
      "iSofton is an independent software team working out of Mumbai and Surat, building apps, websites and AI for founders and operators.",
    next: [
      { id: "where", label: "Where are you based?" },
      { id: "work", label: "Can I see your work?" },
      { id: "services", label: "What do you build?" },
    ],
    link: { href: "/about", label: "About us" },
  },
  where: {
    answer:
      "Mumbai and Surat, working with clients across India, the US and Canada — on whichever hours suit you.",
    next: [{ id: "work", label: "Can I see your work?" }, TALK],
    link: { href: "/contact", label: "Contact" },
  },
  work: {
    answer:
      "Yes — there are example products on the work page: an ERP-style operations tool, a subscription platform and an offline-first field app.",
    next: [{ id: "project", label: "I have a project in mind" }, TALK],
    link: { href: "/work", label: "See the work" },
  },

  human: {
    answer:
      "Easiest on WhatsApp — the team picks it up directly, usually within a day. Anything you typed here comes along with the message.",
    next: [BACK],
  },
};

const GREETING =
  "Hi 👋 I'm the iSofton assistant. I can answer the basics and hand you to the team on WhatsApp.";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  replies?: Reply[];
  link?: Topic["link"];
};

const waLink = (e164: string, text: string) =>
  `https://wa.me/${e164}?text=${encodeURIComponent(text)}`;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [handoff, setHandoff] = useState("Hi iSofton — I would like to talk about a project.");
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: GREETING, replies: OPENERS },
  ]);
  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const scrollLockY = useRef(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    // iOS-safe scroll lock — overflow:hidden alone often fails on mobile Safari
    scrollLockY.current = window.scrollY;
    const { body, documentElement } = document;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      htmlOverflow: documentElement.style.overflow,
    };
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollLockY.current}px`;
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";
    return () => {
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      documentElement.style.overflow = previous.htmlOverflow;
      window.scrollTo(0, scrollLockY.current);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const node = threadRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, open]);

  const push = (message: Omit<Message, "id">) => {
    setMessages((current) => [...current, { ...message, id: nextId.current++ }]);
  };

  const ask = (reply: Reply) => {
    const topic = TOPICS[reply.id];
    if (!topic) return;
    push({ from: "user", text: reply.label });
    window.setTimeout(() => {
      push({ from: "bot", text: topic.answer, replies: topic.next, link: topic.link });
    }, 350);
  };

  const send = (event: React.FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    setHandoff(`Hi iSofton — ${text}`);
    push({ from: "user", text });
    window.setTimeout(() => {
      push({
        from: "bot",
        text: "Got it. I have put that in a WhatsApp message for you — tap Mumbai or Surat below and the team will pick it up, usually within a day.",
        replies: [],
      });
    }, 350);
  };

  const close = () => setOpen(false);

  const panel = (
    <>
      <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#f1ecf8] bg-lavender-mist/60 px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="min-w-0">
          <p className="font-display text-base font-medium text-ink">Chat with iSofton</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" aria-hidden />
            We reply within a day
          </p>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="Close chat"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-muted transition hover:bg-white hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={threadRef}
        className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4 [-webkit-overflow-scrolling:touch]"
      >
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={
                message.from === "bot"
                  ? "max-w-[85%] rounded-2xl rounded-tl-md bg-[#f4f2f9] px-4 py-2.5 text-sm leading-6 text-ink-soft"
                  : "ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#6f5b9a] px-4 py-2.5 text-sm leading-6 text-white"
              }
            >
              {message.text}
            </div>

            {message.link && (
              <Link
                href={message.link.href}
                onClick={close}
                className="mt-2 inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[#e4dcf0] bg-white px-3 py-1.5 text-xs font-medium text-lavender-deep transition hover:bg-lavender-mist"
              >
                {message.link.label}
                <span aria-hidden>→</span>
              </Link>
            )}

            {message.replies && message.replies.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {message.replies.map((reply) => (
                  <button
                    key={reply.id}
                    type="button"
                    onClick={() => ask(reply)}
                    className="min-h-9 rounded-full border border-[#e4dcf0] bg-white px-3 py-2 text-xs text-ink-soft transition hover:border-[#d8ccec] hover:text-ink"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="shrink-0 border-t border-[#f1ecf8] bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
          Continue on WhatsApp
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {site.phones.map((phone) => (
            <a
              key={phone.e164}
              href={waLink(phone.e164, handoff)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#cdeedb] bg-[#eefaf2] px-3.5 py-3 text-sm font-medium text-[#15774a] transition hover:bg-[#e2f6ea]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {phone.city}
            </a>
          ))}
        </div>

        <form onSubmit={send} className="mt-3 flex items-center gap-2">
          <label htmlFor="chat-message" className="sr-only">
            Type a message
          </label>
          <input
            id="chat-message"
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type what you need…"
            enterKeyHint="send"
            autoComplete="off"
            className="min-w-0 flex-1 rounded-full border border-[#e4dcf0] bg-white px-4 py-2.5 text-base text-ink outline-none transition placeholder:text-ink-muted focus:border-[#c9b8e6] sm:text-sm"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6f5b9a] text-white transition hover:bg-[#5d4b86]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M5 12h13M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        <p className="mt-2 text-[11px] leading-4 text-ink-muted">
          Answers here are canned. A person replies on WhatsApp or at{" "}
          <a href={`mailto:${site.email}`} className="underline hover:text-ink">
            {site.email}
          </a>
          .
        </p>
      </div>
    </>
  );

  return (
    <div className="print:hidden">
      {/* FAB — stays visible; toggles open/close */}
      <div
        className="fixed z-[62] flex"
        style={{
          bottom: "max(1.25rem, env(safe-area-inset-bottom))",
          right: "max(1.25rem, env(safe-area-inset-right))",
        }}
      >
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close chat" : "Open chat"}
          className="flex h-14 items-center gap-2.5 rounded-full bg-[#6f5b9a] pl-4 pr-5 text-sm font-medium text-white shadow-lift transition hover:bg-[#5d4b86] active:scale-[0.98]"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <path
                d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.7 8.7 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="11.5" r="1.15" fill="currentColor" />
              <circle cx="12.5" cy="11.5" r="1.15" fill="currentColor" />
              <circle cx="16" cy="11.5" r="1.15" fill="currentColor" />
            </svg>
          )}
          <span>{open ? "Close" : "Chat"}</span>
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close chat"
            onClick={close}
            className="fixed inset-0 z-[60] bg-[#1a1d26]/35"
          />

          {/* Floating panel on all sizes — not full screen */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chat with iSofton"
            className="fixed z-[61] flex flex-col overflow-hidden rounded-[24px] border border-[#ebe4f4] bg-white shadow-[0_20px_50px_-20px_rgba(26,29,38,0.35)] max-sm:inset-x-3 max-sm:bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.75rem))] max-sm:top-auto max-sm:h-[min(520px,calc(100dvh-8.5rem))] sm:bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] sm:right-[max(1.25rem,env(safe-area-inset-right))] sm:h-[min(560px,calc(100dvh-8rem))] sm:w-[min(370px,calc(100vw-2.5rem))] sm:rounded-[26px]"
          >
            {panel}
          </div>
        </>
      )}
    </div>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
