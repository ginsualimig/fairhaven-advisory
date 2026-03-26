import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badge?: string;
}

export default function HeroSection({
  heading,
  subheading,
  ctaLabel = "Schedule Investor Consultation",
  ctaHref = "/#get-started",
  secondaryLabel = "View Portfolio",
  secondaryHref = "/#portfolio",
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal/20 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-44">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              {badge}
            </span>
          )}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {heading}
          </h1>
          <p className="text-offwhite/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-sm bg-teal px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal/90 transition-colors"
            >
              {ctaLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-sm border border-offwhite/30 px-8 py-3.5 text-sm font-semibold text-offwhite hover:border-gold hover:text-gold transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
}
