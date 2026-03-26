import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function HeroSection({
  heading,
  subheading,
  ctaLabel = "Book a Consultation",
  ctaHref = "/contact",
  secondaryLabel = "Our Services",
  secondaryHref = "/services",
}: HeroSectionProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal/20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-6">
            New Zealand Business Immigration & Investment Advisory
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight mb-6">
            {heading}
          </h1>
          <p className="text-offwhite/70 text-lg md:text-xl leading-relaxed mb-10">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3 text-sm font-semibold text-navy hover:bg-gold/90 transition-colors"
            >
              {ctaLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-sm border border-offwhite/30 px-8 py-3 text-sm font-semibold text-offwhite hover:border-gold hover:text-gold transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
