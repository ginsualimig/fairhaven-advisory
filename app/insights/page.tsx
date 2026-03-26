import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Analysis and commentary on New Zealand business immigration, investment pathways, and regulatory developments from Fairhaven Advisory.",
  slug: "insights",
});

const posts = [
  {
    title: "Active Investor Plus: What Changed in 2024",
    excerpt:
      "Immigration New Zealand overhauled the Active Investor Plus visa in late 2023. Here's what the changes mean for applicants — and what they need to do differently.",
    category: "Investor Visa",
    slug: "active-investor-plus-2024",
    date: "15 March 2024",
  },
  {
    title: "Setting Up a Business in NZ: A Founder's Guide",
    excerpt:
      "From registering a company to securing premises and hiring staff — a practical primer for overseas entrepreneurs arriving in New Zealand for the first time.",
    category: "Entrepreneur",
    slug: "setting-up-business-nz",
    date: "8 February 2024",
  },
  {
    title: "Skilled Migrant Category: Points, Pools and Strategy",
    excerpt:
      "The SMC is competitive and unpredictable. This guide explains how Expressions of Interest are ranked, what scores are being selected, and how to maximise your chances.",
    category: "Skilled Migrant",
    slug: "smc-strategy-guide",
    date: "22 January 2024",
  },
  {
    title: "Buying a Business in New Zealand: Immigration Implications",
    excerpt:
      "Acquiring an existing NZ business can be the fastest route to eligibility — but only if the acquisition is structured correctly. Key considerations for overseas buyers.",
    category: "Business Acquisition",
    slug: "buying-nz-business-immigration",
    date: "10 December 2023",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Insights</span>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite mt-3 mb-4 max-w-2xl leading-tight">
            Analysis. Commentary. Clarity.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-xl leading-relaxed">
            Practical guidance on New Zealand immigration law, investment pathways, and regulatory developments — written for business people, not lawyers.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <CaseStudyCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions about your specific situation?"
        subheading="Our insights cover general guidance. For advice tailored to your circumstances, book a consultation."
      />
    </>
  );
}
