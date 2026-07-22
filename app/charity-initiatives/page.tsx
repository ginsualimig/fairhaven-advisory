import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Giving | Fairhaven Advisory",
  description:
    "Fairhaven Advisory connects business growth with practical, measurable giving through B1G1 and Businesses for Good.",
  alternates: { canonical: "/charity-initiatives" },
};

const focusAreas = [
  {
    title: "Education",
    description: "Helping people access the knowledge, tools, and opportunities needed to build a better future.",
  },
  {
    title: "Health and wellbeing",
    description: "Supporting initiatives that improve health, dignity, and resilience in communities that need it most.",
  },
  {
    title: "Environment",
    description: "Backing practical work that protects natural systems and leaves a stronger world behind.",
  },
  {
    title: "Opportunity",
    description: "Contributing to projects that help people move from immediate need toward lasting independence.",
  },
];

function WidgetFrame({
  eyebrow,
  title,
  description,
  src,
  height,
}: {
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  height: number;
}) {
  return (
    <div className="h-full overflow-hidden rounded-sm border border-gold/20 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="border-b border-gold/10 px-6 py-5">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.2em]">{eyebrow}</span>
        <h2 className="mt-2 text-xl font-bold font-serif text-navy">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-stone">{description}</p>
      </div>
      <iframe
        title={title}
        height={height}
        width="100%"
        loading="lazy"
        src={src}
        style={{ border: "none", position: "relative" }}
      />
    </div>
  );
}

export default function CharityInitiativesPage() {
  return (
    <div className="bg-offwhite">
      <section className="relative overflow-hidden bg-navy px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(212,175,55,0.18),transparent_32%),linear-gradient(135deg,#0F172A_0%,#152238_100%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-7">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.22em]">Giving with intent</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold font-serif leading-tight text-offwhite md:text-6xl">
              Business should leave more behind than profit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-offwhite/70">
              Fairhaven Advisory connects the way we build and operate businesses with practical, measurable giving.
              Through B1G1, our commercial activity can contribute to projects supporting people and the planet.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/20 bg-navy shadow-[0_25px_70px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/advisory-thinking.webp"
                alt="Business leaders working together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute bottom-6 left-6 border-l border-gold pl-3 text-xs uppercase tracking-[0.2em] text-white/80">
                Operators with perspective
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-stone/10 bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-3xl">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.22em]">Our partnership</span>
            <h2 className="mt-3 text-3xl font-bold font-serif text-navy md:text-4xl">A measurable way to give</h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              We partner with B1G1 — Business for Good — to connect business milestones with carefully selected giving
              activities. The model is simple: as Fairhaven grows, the people and projects we support can grow with us.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerMs={70}>
            {focusAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="group h-full border-t-2 border-gold/60 bg-offwhite p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,42,0.08)]">
                  <h3 className="text-lg font-bold font-serif text-navy transition-colors group-hover:text-gold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{area.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-b border-stone/10 bg-offwhite px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-12 max-w-2xl">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.22em]">Live impact</span>
            <h2 className="mt-3 text-3xl font-bold font-serif text-navy md:text-4xl">See where the giving goes</h2>
            <p className="mt-4 leading-relaxed text-stone">
              Explore the live B1G1 activity and the global network of projects connected to businesses for good.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <AnimatedSection className="h-full">
              <WidgetFrame
                eyebrow="B1G1"
                title="Choose a giving activity"
                description="Explore the causes and projects supported through the B1G1 community."
                height={396}
                src="https://account.b1g1.com/frontgivingwidget/mywidget/77e38479418bf9303ed8650422702576"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="h-full">
              <WidgetFrame
                eyebrow="Businesses for Good"
                title="Follow the global impact map"
                description="See the places and projects connected to Fairhaven's giving activity."
                height={396}
                src="https://businessesforgood.com/embed.php?id=16793&id2=Impact&height=300"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-20">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.22em]">A wider responsibility</span>
          <p className="mt-5 text-2xl font-serif leading-snug text-offwhite md:text-3xl">
            We measure success by the quality of the businesses we build — and by the value they create beyond their
            own balance sheets.
          </p>
          <Link
            href="/#get-started"
            className="mt-8 inline-flex rounded-sm border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            Start a conversation
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
