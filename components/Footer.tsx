"use client";

import { useState } from "react";
import Link from "next/link";
import type { FormEvent } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-xs text-gold mt-3">Thanks — you&apos;re subscribed.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="flex-1 bg-white/10 border border-gold/30 rounded-sm px-3 py-2 text-xs text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gold text-navy text-xs font-semibold px-4 py-2 rounded-sm hover:bg-gold/90 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-1">Something went wrong — try again.</p>
      )}
    </form>
  );
}

const footerLinks = {
  "Work": [
    { href: "/#what-we-do", label: "What We Do" },
    { href: "/#process", label: "Our Process" },
    { href: "/#expertise", label: "Expertise" },
  ],
  "Company": [
    { href: "/#thinking", label: "Our Thinking" },
    { href: "/#team", label: "Team" },
    { href: "/insights", label: "Insights" },
    { href: "/charity-initiatives", label: "Giving" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-offwhite/70 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-gold font-bold text-xl mb-3">Fairhaven Advisory</div>
            <p className="text-sm leading-relaxed max-w-xs">
              Strategic operators working with investors and business owners across New Zealand and Australia.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-offwhite/40 font-semibold mb-1">
                Newsletter
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-offwhite text-sm font-semibold mb-4 tracking-wider uppercase">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-offwhite/40">
            © {new Date().getFullYear()} Fairhaven Property Group Limited. All rights reserved.
          </p>
          <p className="text-xs text-offwhite/40">
            New Zealand · Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
