import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CTASection from "@/components/CTASection";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

const posts: Record<
  string,
  { title: string; category: string; date: string; content: string[] }
> = {
  "active-investor-plus-2024": {
    title: "Active Investor Plus: What Changed in 2024",
    category: "Investor Visa",
    date: "15 March 2024",
    content: [
      "Immigration New Zealand overhauled the Active Investor Plus (AIP) visa category in late 2023, with changes taking effect in early 2024. For applicants who had been preparing under the old settings, the updates introduced significant new requirements — and new opportunities.",
      "The most consequential change is the removal of the 'investor plus' track that allowed passive portfolio investments to satisfy the equity requirement. Under the revised framework, all qualifying investments must demonstrate active management participation, with applicants required to show genuine governance engagement with investee companies.",
      "Capital thresholds have also been restructured. The minimum investment for direct equity has increased to NZD 5 million, while the venture capital track now requires a minimum NZD 3 million commitment through an approved fund. Both tracks impose a three-year investment timeframe before residence can be granted.",
      "For applicants with existing applications in progress at the time of the changes, INZ provided a transitional window. However, anyone still navigating this is advised to obtain current advice — the transitional provisions have their own complexity.",
      "What hasn't changed is the fundamental requirement: genuine engagement with New Zealand's economy. Applicants who can demonstrate real business relationships, board participation, and a credible NZ presence will continue to be well-positioned.",
    ],
  },
  "setting-up-business-nz": {
    title: "Setting Up a Business in NZ: A Founder's Guide",
    category: "Entrepreneur",
    date: "8 February 2024",
    content: [
      "New Zealand consistently ranks among the easiest countries in the world to start a business. But ease of registration is not the same as ease of establishment — particularly for overseas founders navigating immigration requirements alongside commercial setup.",
      "The first step is company registration through the Companies Office. This can be completed online in under an hour, with a NZD 116 filing fee. You'll need a NZ address for service and at least one director — who can be an overseas national, though a local director is advisable for banking and compliance purposes.",
      "Banking is typically the first friction point. Most major NZ banks require in-person identity verification before opening a business account. This means founders generally need to be physically present in New Zealand. Plan for a two-to-four week setup period from arrival to having an operational account.",
      "For Entrepreneur Work Visa holders, the business must operate in accordance with the approved business plan. Deviations — even commercially sensible ones — should be flagged with your immigration adviser before they occur. INZ compliance monitoring is real, and failing to maintain the approved business structure is a common reason for visa issues.",
      "Employment is another area where overseas founders are often caught off-guard. NZ employment law is protective of employees. Fixed-term contracts, trial periods, and contractor arrangements have specific legal requirements that differ from most jurisdictions. Get HR or employment law advice before your first hire.",
    ],
  },
  "smc-strategy-guide": {
    title: "Skilled Migrant Category: Points, Pools and Strategy",
    category: "Skilled Migrant",
    date: "22 January 2024",
    content: [
      "The Skilled Migrant Category (SMC) is New Zealand's primary residence pathway for employed professionals. It operates on a points system, with applicants first lodging an Expression of Interest (EOI) and then being selected from a pool during regular selection rounds.",
      "Current selection scores are running at 180–200 points for most rounds. The base score for most applicants comes from age, skilled employment in NZ, and qualifications. Bonus points are available for work experience, high-demand occupations, partner qualifications, and employment outside Auckland.",
      "The most important strategic variable is the EOI lodgement date. All things being equal, older EOIs with equal scores are selected first. This means that delaying lodgement — even to accumulate additional points — can be counterproductive if your score is already above the selection threshold.",
      "The most common mistake is submitting an EOI with incomplete or unverified supporting documentation. If your EOI is selected, INZ will issue an Invitation to Apply (ITA) and you'll have a fixed window to submit your residence application. Applications that can't be supported with quality documentation at that point are likely to fail.",
      "Occupation assessment is another critical variable. Many applicants assume their role qualifies under their job title — but INZ assesses against specific ANZSCO codes. Getting the occupational match right before lodging is essential.",
    ],
  },
  "buying-nz-business-immigration": {
    title: "Buying a Business in New Zealand: Immigration Implications",
    category: "Business Acquisition",
    date: "10 December 2023",
    content: [
      "Acquiring an existing New Zealand business is often the fastest route to qualifying for an Entrepreneur Work Visa — and eventually to residence. But the acquisition needs to be structured with immigration compliance in mind from the outset, not as an afterthought.",
      "The key question INZ asks is whether the acquisition is 'genuine'. This means the applicant must be actively involved in running the business, not simply a passive owner. If you're acquiring a business as an investment vehicle without genuine operational involvement, you're likely in the wrong visa category.",
      "Business valuation matters too. INZ will scrutinise purchase price relative to the business's trading history and asset base. Overpaying for a poorly performing business raises questions about the acquisition's commercial rationale — and by extension, about the bona fides of the immigration application.",
      "Due diligence should be conducted with immigration compliance as a specific workstream alongside the standard commercial and legal review. This means checking employee count and structure (some visa categories require a minimum number of NZ citizen or resident employees), the nature of the business activity, and whether any aspect of the business model would create issues under the visa conditions.",
      "Post-acquisition, the new owner must operate the business in compliance with all visa conditions. Changes to business structure, staffing levels, or trading activity may need to be notified to INZ. Having an immigration adviser on call during the first year of ownership is strongly recommended.",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return buildMetadata({ title: "Insight", slug: `insights/${slug}` });
  return buildMetadata({
    title: post.title,
    description: post.content[0].slice(0, 160),
    slug: `insights/${slug}`,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="py-40 px-6 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Post not found</h1>
        <Link href="/insights" className="text-gold hover:underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="text-gold/70 text-sm hover:text-gold transition-colors mb-6 inline-block"
          >
            ← Back to Insights
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <time className="text-offwhite/50 text-sm">{post.date}</time>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl prose prose-slate">
          {post.content.map((para, i) => (
            <p key={i} className="text-stone leading-relaxed mb-6 text-base">
              {para}
            </p>
          ))}
        </div>
      </section>

      <CTASection
        heading="Need advice on your specific situation?"
        subheading="This article provides general guidance only. For advice tailored to your circumstances, speak with one of our advisers."
      />
    </>
  );
}
