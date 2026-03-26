import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 px-6 border-b border-gold/20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
            Get Started
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-offwhite mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Let&apos;s assess mutual fit.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-xl">
            We qualify all partners before sharing deal flow. A 15-minute call is the fastest way to determine if we&apos;re a fit.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <h2
              className="text-2xl font-bold text-navy mb-6"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Investor intake
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Full name</label>
                <input
                  type="text"
                  className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">I am a...</label>
                <select className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors">
                  <option value="">Select type</option>
                  <option>AIP / Residency investor</option>
                  <option>PE / VC principal</option>
                  <option>Family office</option>
                  <option>Business owner seeking partnership</option>
                  <option>Other capital deployer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Investment capacity (NZD)</label>
                <select className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors">
                  <option value="">Select range</option>
                  <option>$1M – $3M</option>
                  <option>$3M – $5M</option>
                  <option>$5M – $10M</option>
                  <option>$10M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Brief context</label>
                <textarea
                  rows={4}
                  className="w-full border border-stone/20 rounded-sm px-4 py-3 text-sm text-navy bg-white focus:outline-none focus:border-teal transition-colors"
                  placeholder="What are you trying to achieve? (Optional but helpful)"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-teal px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal/90 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Right: Direct contact + info */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-2xl font-bold text-navy mb-4"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Direct contact
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-teal font-semibold mb-1">Email</div>
                  <a href="mailto:enquiries@fairhavenadvisory.co.nz" className="text-navy hover:text-teal transition-colors">
                    enquiries@fairhavenadvisory.co.nz
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-teal font-semibold mb-1">Locations</div>
                  <p className="text-stone text-sm">Auckland · Wellington · Sydney · Melbourne</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-navy p-8">
              <h3
                className="text-xl font-bold text-offwhite mb-3"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                What to expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Response within 24 hours on business days",
                  "15-minute discovery call to assess fit",
                  "If qualified: full investment criteria and current pipeline",
                  "Deal-specific NDA for full case study access",
                  "No unsolicited marketing or data sharing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-offwhite/70">
                    <span className="text-teal mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-stone leading-relaxed border-t border-stone/10 pt-6">
              <strong className="text-navy block mb-1">Disclaimer</strong>
              Fairhaven Advisory Ltd is not a licensed immigration adviser. Immigration advice must be obtained from a licensed adviser. All investment activities are subject to NZ and AU regulatory requirements. This is not a solicitation or offer of securities.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
