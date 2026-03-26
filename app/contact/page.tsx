"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-navy py-24 px-6 border-b border-gold/20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-6">
            Get in Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-offwhite mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Start a conversation.
          </h1>
          <p className="text-offwhite/65 text-lg max-w-xl leading-relaxed">
            We work with operators, business owners, and capital providers building and scaling ventures across property, infrastructure, and allied sectors in NZ and Australia. If you're exploring a deal or seeking strategic advice, get in touch.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="py-12">
                <p className="text-navy text-lg font-semibold mb-2">Thank you.</p>
                <p className="text-stone text-sm">We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-stone mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-stone mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-stone mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Tell us about your situation."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-sm border border-teal px-8 py-3.5 text-sm font-medium text-teal hover:bg-teal/10 transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-teal font-semibold mb-2">Email</div>
              <a href="mailto:contact@fairhavenadvisory.co.nz" className="text-navy hover:text-teal transition-colors text-sm">
                contact@fairhavenadvisory.co.nz
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-teal font-semibold mb-2">Geography</div>
              <p className="text-stone text-sm">New Zealand · Australia</p>
            </div>
            <div className="pt-6 border-t border-stone/10">
              <p className="text-xs text-stone leading-relaxed">
                All engagements subject to applicable New Zealand and Australian regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
