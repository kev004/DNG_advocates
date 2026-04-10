"use client";

import { useState } from "react";

type Props = {
  source?: string;
};

export function ContactForm({ source = "contact" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("Thank you. We will respond shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or email us directly.");
    }
  }

  const labelClass =
    "mb-1.5 block text-sm font-medium text-slate-700";
  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm transition-colors duration-200 placeholder:text-slate-400 focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-gold/40";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="+254 …"
        />
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className={inputClass}
          placeholder="Brief topic line"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Describe your matter in confidence."
        />
      </div>

      {message ? (
        <p
          role="status"
          className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full cursor-pointer rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors duration-200 hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
