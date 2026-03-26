import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CTASection from "@/components/CTASection";
import Link from "next/link";

interface Props {
  params: Promise<{ service: string }>;
}

const serviceData: Record<
  string,
  { title: string; description: string; points: string[] }
> = {
  "investor-visa": {
    title: "Investor Visa",
    description:
      "New Zealand's investor immigration pathways are among the most commercially sophisticated in the world. The Active Investor Plus category demands rigorous investment planning, compliant fund sourcing, and a clear strategy for your NZ presence. We handle every stage.",
    points: [
      "Eligibility pre-assessment against INZ investment thresholds",
      "Fund sourcing documentation and AML compliance review",
      "Investment structure planning (direct equity, venture, listed)",
      "Business plan and investor narrative",
      "Full application lodgement and INZ liaison",
      "Post-approval residency pathway management",
    ],
  },
  "entrepreneur-visa": {
    title: "Entrepreneur Visa",
    description:
      "The Entrepreneur Work Visa rewards founders who can demonstrate a viable, innovative business concept with real potential in New Zealand. We translate your vision into the evidence package INZ needs.",
    points: [
      "Business concept viability assessment",
      "Market research and NZ industry context",
      "Financial projections and business plan drafting",
      "Points optimisation (innovation, export, job creation)",
      "Application lodgement and case officer liaison",
      "Entrepreneur Resident Visa pathway support",
    ],
  },
  "skilled-migrant": {
    title: "Skilled Migrant",
    description:
      "Skilled Migrant Category residence is points-based and competitive. Getting the expression of interest right — and knowing when to submit — is critical. We provide precise eligibility analysis and end-to-end application management.",
    points: [
      "Skilled Migrant Category points calculation",
      "Expression of Interest drafting and optimisation",
      "Occupation skill assessment coordination",
      "Employer support documentation",
      "Residence application lodgement",
      "Partner and dependent applications",
    ],
  },
  "business-acquisition": {
    title: "Business Acquisition",
    description:
      "Acquiring an existing NZ business is often the fastest and most reliable route to establishing immigration eligibility. We advise on target identification, due diligence, commercial structuring and post-acquisition compliance.",
    points: [
      "Business search and target identification",
      "Commercial due diligence support",
      "Immigration-compliance assessment of target business",
      "Negotiation advisory and settlement support",
      "Post-acquisition immigration pathway management",
      "Ongoing compliance and reporting",
    ],
  },
  "global-impact": {
    title: "Global Impact Visa",
    description:
      "For individuals with an outstanding or significant record of contribution in their field — arts, sports, science, business or culture. We build the case and manage INZ discretion applications.",
    points: [
      "Field assessment and contribution narrative",
      "Evidence package compilation",
      "Expert referee identification and briefing",
      "INZ discretion application management",
      "Supporting documentation review",
    ],
  },
  "residence-review": {
    title: "Residence Review & Appeals",
    description:
      "A declined application is not the end. We conduct independent reviews of previous decisions, identify grounds for reconsideration, and provide representation before the Immigration & Protection Tribunal where warranted.",
    points: [
      "Independent case review and risk assessment",
      "Grounds for reconsideration analysis",
      "Remediation strategy development",
      "Reconsideration and appeal applications",
      "IPT representation and hearing preparation",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const data = serviceData[service];
  if (!data) return buildMetadata({ title: "Service", slug: `services/${service}` });
  return buildMetadata({
    title: data.title,
    description: data.description.slice(0, 160),
    slug: `services/${service}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = serviceData[service];

  if (!data) {
    return (
      <div className="py-40 px-6 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Service not found</h1>
        <Link href="/services" className="text-gold hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="text-gold/70 text-sm hover:text-gold transition-colors mb-6 inline-block"
          >
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite mt-2 mb-4 max-w-2xl leading-tight">
            {data.title}
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-4xl">
          <p className="text-stone text-lg leading-relaxed mb-12">{data.description}</p>

          <h2 className="text-xl font-semibold text-navy mb-6">What we cover</h2>
          <ul className="space-y-3">
            {data.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 text-gold text-sm">✦</span>
                <span className="text-stone leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading={`Ready to discuss your ${data.title} application?`}
        subheading="Book a confidential consultation and we'll outline your options and next steps."
      />
    </>
  );
}
