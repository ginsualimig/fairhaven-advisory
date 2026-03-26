import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Specialist NZ business immigration and investment advisory services — Investor Visa, Entrepreneur Visa, Skilled Migrant, Business Acquisition and more.",
  slug: "services",
});

const services = [
  {
    title: "Investor Visa",
    description:
      "Active Investor Plus and Investor categories. We work with high-net-worth individuals to structure compliant, optimised investment pathways that meet INZ criteria.",
    href: "/services/investor-visa",
  },
  {
    title: "Entrepreneur Visa",
    description:
      "From business plan to approval. End-to-end support for founders and business owners establishing ventures in New Zealand under the Entrepreneur Work Visa framework.",
    href: "/services/entrepreneur-visa",
  },
  {
    title: "Skilled Migrant",
    description:
      "For professionals with skills in demand. Eligibility assessment, expression of interest optimisation, and full application management.",
    href: "/services/skilled-migrant",
  },
  {
    title: "Business Acquisition",
    description:
      "Identify, evaluate and acquire NZ businesses that support immigration outcomes. Advisory from target selection through due diligence to post-settlement.",
    href: "/services/business-acquisition",
  },
  {
    title: "Global Impact Visa",
    description:
      "For individuals with an outstanding or significant contribution in their field. We build the narrative and evidence package for complex character-led applications.",
    href: "/services/global-impact",
  },
  {
    title: "Residence Review & Appeals",
    description:
      "Previous applications declined or stalled? We provide independent reviews, remediation strategy, and Immigration & Protection Tribunal representation.",
    href: "/services/residence-review",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite mt-3 mb-4 max-w-2xl leading-tight">
            Specialist advisory. Singular focus.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-xl leading-relaxed">
            We work exclusively in business immigration and investment pathways — the most complex and commercially significant part of New Zealand immigration.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure which pathway fits?"
        subheading="Book a confidential consultation and we'll assess your situation and outline the options available to you."
      />
    </>
  );
}
