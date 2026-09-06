"use client";

import { FormEvent, useState } from "react";

const initial = {
  name: "",
  email: "",
  company: "",
  service: "Not sure yet",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Service: ${form.service}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:contact@isofton.com?subject=${encodeURIComponent(
      `Project inquiry — ${form.company || form.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-[#e4dcf0] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#9b86bd] focus:bg-white";

  if (sent) {
    return (
      <div className="soft-card rounded-[28px] p-5 sm:p-8">
        <p className="text-sm font-medium text-lavender-deep">Sent to your mail app</p>
        <h2 className="mt-2 font-display text-2xl font-medium">
          If nothing opened, write to contact@isofton.com.
        </h2>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="soft-card rounded-[28px] p-5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className={field}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">Work email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className={field}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">Company</span>
          <input
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
            className={field}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">What do you need?</span>
          <select
            value={form.service}
            onChange={(event) => setForm({ ...form, service: event.target.value })}
            className={field}
          >
            <option>Not sure yet</option>
            <option>App Development</option>
            <option>Web Development</option>
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
            <option>Cloud & IT</option>
            <option>Product Design</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="mb-1.5 block text-ink-soft">The product, in a few lines</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className={field}
        />
      </label>
      <button
        type="submit"
        className="mt-6 rounded-full bg-[#6f5b9a] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#5d4b86]"
      >
        Send the brief
      </button>
    </form>
  );
}
