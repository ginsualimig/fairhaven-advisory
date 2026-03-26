"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#who-we-serve", label: "Who We Serve" },
  { href: "/#approach", label: "Our Approach" },
  { href: "/#team", label: "Team" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-navy/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-offwhite font-semibold text-lg tracking-wide">
          <span className="text-gold font-bold text-xl">FH</span>
          Fairhaven Advisory
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-offwhite/80 hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#get-started"
          className="hidden md:inline-flex items-center rounded-sm bg-teal px-5 py-2 text-sm font-semibold text-white hover:bg-teal/90 transition-colors"
        >
          Investor Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-offwhite p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-offwhite/80 hover:text-gold text-sm transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#get-started"
                className="inline-flex items-center rounded-sm bg-teal px-5 py-2 text-sm font-semibold text-white hover:bg-teal/90 transition-colors"
                onClick={() => setOpen(false)}
              >
                Investor Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
