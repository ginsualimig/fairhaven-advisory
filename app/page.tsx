"use client";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";
import StatCard from "@/components/StatCard";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  GoldLineSectionHeading,
} from "@/components/AnimatedSection";

const featuredServices = [
  {
    title: "Investor Visa",
    description:
      "Navigate New Zealand's Active Investor Plus and Investor categories. We work with high-net-worth individuals to structure compliant, optimised investment pathways.",
    href: "/services/investor-visa",
  },
  {
    title: "Entrepreneur Visa",
    description:
      "From concept to approval. We help founders and business owners establish and grow ventures in New Zealand under the Entrepreneur Work Visa framework.",
    href: "/services/entrepreneur-visa",
  },
  {
    title: "Skilled Migrant",
    description:
      "For professionals with in-demand skills. We assess your eligibility, build the strongest possible application, and manage the process end-to-end.",
    href: "/services/skilled-migrant",
  },
  {
    title: "Business Acquisition",
    description:
      "Identify, negotiate and acquire NZ businesses that support immigration outcomes. Full advisory from target selection to settlement.",
    href: "/services/business-acquisition",
  },
];

const featuredInsights = [
  {
    title: "Active Investor Plus: What Changed in 2024",
    excerpt:
      "Immigration New Zealand overhauled the Active Investor Plus visa in late 2023. Here's what the changes mean for applicants in 2024.",
    category: "Investor Visa",
    slug: "active-investor-plus-2024",
    date: "March 2024",
  },
  {
    title: "Setting Up a Business in NZ: A Founder's Guide",
    excerpt:
      "From registering a company to securing premises and staff — a practical primer for overseas entrepreneurs arriving in New Zealand.",
    category: "Entrepreneur",
    slug: "setting-up-business-nz",
    date: "February 2024",
  },
];

const stats = [
  { stat: "98%", label: "Visa approval rate" },
  { stat: "12+", label: "Years combined experience" },
  { stat: "200+", label: "Clients advised" },
  { stat: "NZ-only", label: "Singular focus" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        heading="Your pathway to New Zealand starts here."
        subheading="Fairhaven Advisory provides premium immigration and investment guidance for entrepreneurs, investors and families. We combine deep regulatory expertise with hands-on commercial insight."
      />

      {/* Trust bar */}
      <section className="bg-offwhite border-b border-stone/10 py-8 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-8 text-center">
          {["Licensed Immigration Advisers", "NZ Regulatory Specialists", "End-to-End Advisory", "Confidential & Discreet"].map(
            (item, i) => (
              <AnimatedSection key={item} delay={i * 0.08} direction="up">
                <span
                  className="text-sm font-medium text-stone flex items-center gap-2"
                  style={{ letterSpacing: "0.5px" }}
                >
                  <span className="text-gold">✦</span> {item}
                </span>
              </AnimatedSection>
            )
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="What We Do"
            heading="Specialist advisory services"
            description="We focus exclusively on business immigration and investment pathways — the complex end of New Zealand immigration."
            className="mb-12"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerMs={50}>
            {featuredServices.map((s) => (
              <StaggerItem key={s.href}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Fairhaven */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <GoldLineSectionHeading
              label="Why Fairhaven"
              heading="Precision over volume."
            />
            <AnimatedSection delay={0.2} className="mt-6">
              <p className="text-stone leading-relaxed mb-4">
                We take a small number of clients each year. Every engagement receives principal-level attention — not junior adviser delegation.
              </p>
              <p className="text-stone leading-relaxed mb-4">
                Our advisers hold licensed status with the Immigration Advisers Authority and bring commercial backgrounds in finance, law and business operations.
              </p>
              <p className="text-stone leading-relaxed">
                We operate at the intersection of immigration law, business strategy and investment — which is where the most complex and valuable work lives.
              </p>
            </AnimatedSection>
          </div>
          <StaggerContainer className="grid grid-cols-2 gap-6" staggerMs={80}>
            {stats.map((item) => (
              <StaggerItem key={item.label}>
                <StatCard stat={item.stat} label={item.label} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <GoldLineSectionHeading
              label="Insights"
              heading="Latest thinking"
            />
            <AnimatedSection delay={0.3}>
              <a href="/insights" className="text-sm text-gold hover:underline font-medium hidden sm:block">
                View all →
              </a>
            </AnimatedSection>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerMs={80}>
            {featuredInsights.map((post) => (
              <StaggerItem key={post.slug}>
                <CaseStudyCard {...post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
