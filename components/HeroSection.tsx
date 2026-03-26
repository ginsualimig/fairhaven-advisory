import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroSection({
  heading,
  subheading,
  ctaLabel = "Get in touch",
  ctaHref = "/#contact",
}: HeroSectionProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal/10 pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-52">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {heading}
          </h1>
          <p className="text-offwhite/65 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
            {subheading}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center rounded-sm border border-gold/50 px-8 py-3.5 text-sm font-medium text-gold hover:border-gold hover:bg-gold/10 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
