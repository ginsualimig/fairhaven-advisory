import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a confidential consultation with Fairhaven Advisory. We advise entrepreneurs, investors and skilled professionals on New Zealand immigration.",
  slug: "contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite mt-3 mb-4 max-w-2xl leading-tight">
            Book a consultation.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-xl leading-relaxed">
            Confidential. No obligation. We'll assess your situation and outline the options available to you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-lg border border-stone/10 p-10">
            <h2 className="text-xl font-semibold text-navy mb-8">Tell us about your situation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="w-full rounded-sm border border-stone/30 bg-offwhite px-4 py-2.5 text-sm text-navy placeholder:text-stone/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="w-full rounded-sm border border-stone/30 bg-offwhite px-4 py-2.5 text-sm text-navy placeholder:text-stone/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-sm border border-stone/30 bg-offwhite px-4 py-2.5 text-sm text-navy placeholder:text-stone/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="nationality">
                  Nationality / Country of residence
                </label>
                <input
                  id="nationality"
                  type="text"
                  className="w-full rounded-sm border border-stone/30 bg-offwhite px-4 py-2.5 text-sm text-navy placeholder:text-stone/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="e.g. Singapore"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="service">
                  Area of interest
                </label>
                <select
                  id="service"
                  className="w-full rounded-sm border border-stone/30 bg-offwhite px-4 py-2.5 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                >
                  <option value="">Select a service…</option>
                  <option>Investor Visa</option>
                  <option>Entrepreneur Visa</option>
                  <option>Skilled Migrant</option>
                  <option>Business Acquisition</option>
                  <option>Global Impact Visa</option>
                  <option>Residence Review / Appeal</option>
                  <option>Not sure — need guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="message">
                  Brief description of your situation
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-sm border border-stone/30 bg-offwhite px-4 py-2.5 text-sm text-navy placeholder:text-stone/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
                  placeholder="Tell us about your background, goals and any current visa status…"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-sm bg-gold px-8 py-3 text-sm font-semibold text-navy hover:bg-gold/90 transition-colors"
              >
                Send Enquiry
              </button>

              <p className="text-xs text-stone/60 text-center">
                All enquiries are treated in strict confidence.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-6">Office</h2>
              <div className="space-y-4 text-sm text-stone">
                <p className="leading-relaxed">
                  Fairhaven Advisory Ltd<br />
                  Level 10, 1 Queen Street<br />
                  Auckland CBD 1010<br />
                  New Zealand
                </p>
                <p>
                  <span className="font-medium text-navy">Email:</span>{" "}
                  <a href="mailto:hello@fairhavenadvisory.co.nz" className="text-teal hover:underline">
                    hello@fairhavenadvisory.co.nz
                  </a>
                </p>
                <p>
                  <span className="font-medium text-navy">Phone:</span>{" "}
                  <a href="tel:+6491234567" className="text-teal hover:underline">
                    +64 9 123 4567
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">What to expect</h2>
              <ul className="space-y-3">
                {[
                  "Response within one business day",
                  "Initial consultation is 45–60 minutes",
                  "We'll assess your situation before recommending a pathway",
                  "No sales pressure — straightforward advice only",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone">
                    <span className="text-gold mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gold/20 bg-navy/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-2">
                Licensed Advisers
              </p>
              <p className="text-sm text-stone leading-relaxed">
                Fairhaven Advisory advisers are licensed by the Immigration Advisers Authority (IAA). Our licence details are available on the IAA public register.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
