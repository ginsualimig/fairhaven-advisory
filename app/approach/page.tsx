import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Our Approach",
  description:
    "How Fairhaven Advisory works: a structured, principal-led process that combines deep regulatory expertise with commercial insight.",
  slug: "approach",
});

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "We start with a confidential consultation to understand your goals, background and circumstances. No application is discussed until we have a complete picture.",
  },
  {
    number: "02",
    title: "Strategy & Pathway Design",
    description:
      "We map out the available pathways, assess the strengths and risks of each, and recommend a preferred approach. You receive a clear strategy document before any work begins.",
  },
  {
    number: "03",
    title: "Application Build",
    description:
      "Our team builds the strongest possible application. Every document is reviewed at principal level. We identify and address weaknesses before lodgement.",
  },
  {
    number: "04",
    title: "Lodgement & Liaison",
    description:
      "We lodge with Immigration New Zealand and manage all correspondence. You are kept informed at every stage. No surprises.",
  },
  {
    number: "05",
    title: "Post-Approval Support",
    description:
      "Approval is the beginning, not the end. We support you through arrival, business establishment, compliance obligations, and the pathway to permanent residence.",
  },
];

const team = [
  {
    name: "Principal Adviser",
    title: "Licensed Immigration Adviser · IAA Reg. XXXXXXX",
    bio: "15 years advising investors and entrepreneurs on New Zealand immigration. Previously a commercial solicitor in London and Auckland.",
  },
  {
    name: "Investment Adviser",
    title: "Chartered Accountant · CFP",
    bio: "Specialist in structuring compliant investment arrangements for Active Investor Plus applicants. Background in private equity and funds management.",
  },
  {
    name: "Business Adviser",
    title: "MBA · NZIM Certified",
    bio: "Supports Entrepreneur Visa clients through business plan development, NZ market entry strategy, and post-arrival business operations.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">How We Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite mt-3 mb-4 max-w-2xl leading-tight">
            Process-driven. Principal-led.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-xl leading-relaxed">
            Immigration at this level requires precision. We apply a structured methodology to every engagement — so nothing is left to chance.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-navy mb-12">Our process</h2>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-14 text-center">
                  <span className="text-3xl font-bold text-gold/30">{step.number}</span>
                </div>
                <div className="border-l border-stone/20 pl-8">
                  <h3 className="text-navy font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-stone leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal">The Team</span>
            <h2 className="text-3xl font-bold text-navy mt-2">Who you work with</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-stone/10 bg-offwhite p-8"
              >
                {/* Placeholder avatar */}
                <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                  <span className="text-navy/40 text-xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-navy font-semibold text-lg">{member.name}</h3>
                <p className="text-teal text-xs font-medium mt-1 mb-3">{member.title}</p>
                <p className="text-stone text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Work with a team that takes fewer clients, more seriously."
        subheading="We limit engagements to maintain quality. Speak with us to check availability."
      />
    </>
  );
}
