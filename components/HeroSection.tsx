import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  eyebrow?: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({
  heading,
  subheading,
  eyebrow = "Fairhaven Advisory · New Zealand & Australia",
  image,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-teal/20" />
      <div className="absolute inset-0 opacity-[0.035] bg-grid pointer-events-none" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-stretch lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 flex items-center px-6 py-24 md:px-10 lg:py-32">
          <div className="max-w-2xl">
            <span className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
            </span>
            <h1 className="mb-8 max-w-xl font-serif text-4xl font-bold leading-[1.08] text-offwhite md:text-5xl lg:text-[4.25rem]">
              {heading}
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-offwhite/70 md:text-xl">
              {subheading}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/#what-we-do" className="inline-flex items-center gap-3 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/85">
                Explore our approach <span aria-hidden="true">↘</span>
              </Link>
              <Link href="/contact" className="text-sm font-medium text-offwhite/80 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/15 to-transparent lg:from-navy lg:via-navy/20" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" />
          <div className="absolute bottom-8 right-8 hidden max-w-[210px] border-l border-gold/70 pl-4 text-xs leading-relaxed text-offwhite/75 md:block">
            Quietly building durable value through better decisions and stronger operations.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </section>
  );
}
