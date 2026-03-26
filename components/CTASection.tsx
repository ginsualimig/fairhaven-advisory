import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading = "Ready to deploy capital into profitable businesses?",
  subheading = "We only work with accredited partners. Schedule a 15-minute call to assess mutual fit — no commitments, no obligations.",
  primaryLabel = "Schedule Investor Consultation",
  primaryHref = "/#get-started",
  secondaryLabel = "Download Investment Criteria",
  secondaryHref = "/#get-started",
}: CTASectionProps) {
  return (
    <section className="bg-navy py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
          Accredited Partners Only
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-offwhite mb-4"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {heading}
        </h2>
        <p className="text-offwhite/70 text-lg mb-10 leading-relaxed">{subheading}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="rounded-sm bg-teal px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal/90 transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-sm border border-offwhite/30 px-8 py-3.5 text-sm font-semibold text-offwhite hover:border-gold hover:text-gold transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
