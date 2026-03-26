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
  heading = "Ready to begin your New Zealand journey?",
  subheading = "Our advisers are available for a confidential consultation. Let us map out the right pathway for you.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: CTASectionProps) {
  return (
    <section className="bg-navy py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-4">{heading}</h2>
        <p className="text-offwhite/70 text-lg mb-10 leading-relaxed">{subheading}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="rounded-sm bg-gold px-8 py-3 text-sm font-semibold text-navy hover:bg-gold/90 transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-sm border border-offwhite/30 px-8 py-3 text-sm font-semibold text-offwhite hover:border-gold hover:text-gold transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
