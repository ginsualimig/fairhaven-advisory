"use client";

import HeroSection from "@/components/HeroSection";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  GoldLineSectionHeading,
} from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";


// ── Icons ───────────────────────────────────────────────────────────────────────
const AcquisitionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-teal">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 9v7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const OperationsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-teal">
    <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="18" y="5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="18" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="18" y="18" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-teal">
    <path d="M6 26L13 17l5 5 8-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TurnaroundIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-teal">
    <path d="M8 20a10 10 0 1 1 6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 25v-5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Data ────────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <AcquisitionIcon />,
    title: "Acquisition",
    description:
      "We identify and evaluate businesses with rigour. Sourcing is systematic, due diligence is thorough, and deal execution is disciplined. We move carefully and close with conviction.",
  },
  {
    icon: <OperationsIcon />,
    title: "Operations",
    description:
      "We manage businesses with strategic focus. From day-to-day leadership to team building and systems, we take operational ownership seriously. The fundamentals matter.",
  },
  {
    icon: <StrategyIcon />,
    title: "Strategy",
    description:
      "We develop and execute strategy grounded in operational reality. We align leadership, clarify priorities, and translate thinking into disciplined execution.",
  },
  {
    icon: <TurnaroundIcon />,
    title: "Turnarounds",
    description:
      "We acquire and operate struggling businesses. We find the structural problems, fix what's broken, and build operations that can sustain themselves without constant intervention.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understanding",
    description:
      "We evaluate opportunities comprehensively — financially, operationally, and strategically. We spend time understanding the business before forming a view.",
  },
  {
    step: "02",
    title: "Acquisition",
    description:
      "Negotiation and deal execution handled with care. We structure transactions to reflect what we find in diligence, not what we hoped to find.",
  },
  {
    step: "03",
    title: "Integration",
    description:
      "We establish operational and strategic alignment early. The transition period is critical — we treat it that way.",
  },
  {
    step: "04",
    title: "Scaling",
    description:
      "We execute the plan, build the team, and adapt as the business and market evolve. No playbook survives contact with reality unchanged.",
  },
  {
    step: "05",
    title: "Governance",
    description:
      "Ongoing reporting, strategic review, and long-term stewardship. We stay engaged and accountable for the duration of the partnership.",
  },
];

const teamMembers = [
  {
    name: "Petrus Yen",
    title: "Director",
    bio: "Petrus leads acquisitions and capital structuring across the group. He has a background in investment, corporate advisory, and cross-border transactions, with a focus on property and infrastructure assets in New Zealand and Australia.",
    image: "/headshots/petrus-yen.jpg",
  },
  {
    name: "Ziqi Fan",
    title: "Director",
    bio: "Ziqi Fan leads execution and operational coordination across the group. She keeps priorities, timelines, and stakeholders aligned, ensuring day‑to‑day work runs smoothly across multiple active workstreams.",
    image: "/headshots/ziqi-fan.jpg",
  },
  {
    name: "Daarshan Kunasegaran",
    title: "Associate",
    bio: "Daarshan supports deal origination, market research, and operational strategy. He has a background in law and commercial advisory, with experience across property and business acquisition.",
    image: "/headshots/daarshan-kunasegaran.jpg",
  },
  {
    name: "Beatriz Tongco",
    title: "Associate",
    bio: "Beatriz manages operations, project coordination, and stakeholder communications. She brings strong organisational and analytical capabilities across multiple active workstreams.",
  },
];

const expertise = [
  "Professional services",
  "Hospitality",
  "Technology",
  "Logistics & distribution",
  "Trade & wholesale",
  "E-commerce",
];

// ── Page ────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        heading="We operate businesses strategically."
        subheading="Fairhaven Advisory works with investors and business owners across New Zealand and Australia to source, acquire, and operate profitable businesses. We bring strategic thinking, operational discipline, and deep networks to every partnership."
      />

      {/* OUR THINKING */}
      <section id="thinking" className="py-28 px-6 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <AnimatedSection direction="left">
                <GoldLineSectionHeading
                  label="Our Thinking"
                  heading="How we approach business."
                />
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.1} className="lg:col-span-8">
              <div className="space-y-6 text-stone leading-relaxed text-lg">
                <p>
                  Sustainable business value comes from discipline — in sourcing, in understanding what you are acquiring, in building the right team, and in executing strategy with patience. We have spent years developing the expertise to identify overlooked opportunities, understand operational complexity, and translate strategic thinking into outcomes that hold.
                </p>
                <p>
                  We work with investors and business owners who share this philosophy. They are not looking for a quick transaction or a glossy pitch. They want a partner who understands the operational reality of business, moves carefully, and takes responsibility for results. That is how we work.
                </p>
                <p>
                  Our approach is quiet and deliberate. We do not publicise every deal or broadcast our methods. We focus on the work — and the work speaks for itself.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-28 px-6 bg-offwhite scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-16">
            <GoldLineSectionHeading
              label="What We Do"
              heading="Four areas of focus."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerMs={60}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-white rounded-sm border border-stone/10 p-10 h-full hover:border-teal/20 transition-colors duration-300">
                  <div className="mb-5">{s.icon}</div>
                  <h3
                    className="text-xl font-bold text-navy mb-4"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="py-28 px-6 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-16">
            <GoldLineSectionHeading
              label="Our Process"
              heading="How we work."
              description="Every engagement follows a consistent methodology. The stages are the same; the work inside them varies considerably."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerMs={60}>
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative p-8 border border-stone/10 rounded-sm group hover:border-gold/30 transition-colors duration-300">
                  <div
                    className="absolute top-6 right-6 text-5xl font-bold text-stone/5 group-hover:text-teal/8 transition-colors duration-500"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {step.step}
                  </div>
                  <div className="text-teal font-bold text-xs mb-4 uppercase tracking-widest">{step.step}</div>
                  <h3
                    className="text-lg font-bold text-navy mb-3"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-28 px-6 bg-navy scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <AnimatedSection direction="left">
                <GoldLineSectionHeading
                  label="Expertise"
                  heading="Where we focus."
                  headingClassName="text-offwhite"
                  labelClassName="text-teal"
                />
                <div className="mt-6 space-y-4 text-offwhite/60 leading-relaxed">
                  <p>
                    We operate in established, cash-generating businesses across New Zealand and Australia. We do not work in venture-stage companies, real estate, or financial services.
                  </p>
                  <p>
                    Our focus is on businesses with operational depth — organisations where strategic thinking and disciplined management can make a meaningful difference.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-4 border-b border-gold/10">
                    <span className="text-gold text-xs">✦</span>
                    <span className="text-offwhite/80 text-sm">{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 py-4 border-b border-gold/10">
                  <span className="text-gold text-xs">✦</span>
                  <span className="text-offwhite/80 text-sm">New Zealand & Australia</span>
                </div>
                <div className="flex items-center gap-3 py-4 border-b border-gold/10">
                  <span className="text-gold text-xs">✦</span>
                  <span className="text-offwhite/80 text-sm">Established, profitable businesses</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="py-28 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <AnimatedSection direction="left" className="lg:col-span-5">
              <GoldLineSectionHeading
                label="Insights"
                heading="Thinking from the field."
                description="Occasional writing on business operations, acquisitions, and strategy. Drawn from practice, not theory."
              />
              <Link
                href="/insights"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
              >
                View all insights →
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="lg:col-span-7">
              <div className="space-y-6">
                {[
                  { title: "What We Look for in a Business", category: "Acquisition" },
                  { title: "The First Ninety Days", category: "Operations" },
                  { title: "On Building Operational Teams in NZ", category: "Team Building" },
                ].map((item) => (
                  <Link key={item.title} href="/insights" className="group block border-b border-stone/10 pb-6 last:border-0">
                    <span className="text-teal text-xs font-semibold uppercase tracking-widest mb-2 block">{item.category}</span>
                    <h3
                      className="text-lg font-bold text-navy group-hover:text-teal transition-colors"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 px-6 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-16">
            <GoldLineSectionHeading
              label="Team"
              heading="The people behind the work."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" staggerMs={60}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-navy/8 border border-stone/15 group-hover:border-gold/30 transition-colors mb-5 flex items-center justify-center overflow-hidden">
                    {"image" in member && member.image ? (
                      <Image
                        src={member.image as string}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span
                        className="text-xl font-bold text-navy/30"
                        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                      >
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-navy mb-0.5">{member.name}</h3>
                  <p className="text-teal text-xs font-semibold uppercase tracking-wide mb-3">{member.title}</p>
                  <p className="text-stone text-sm leading-relaxed">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </>
  );
}
