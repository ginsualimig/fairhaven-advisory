import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder blog content — replace with CMS or MDX in production
const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  intro: string;
  sections: { heading: string; body: string }[];
}> = {
  "evaluate-business-acquisition": {
    title: "How to Evaluate a Business for Acquisition",
    category: "Acquisition Guide",
    date: "January 2026",
    intro: "The 12-point framework we apply to every deal — commercial, financial, and operational red flags before you sign anything.",
    sections: [
      {
        heading: "Why most buyers overpay",
        body: "Most SME buyers fall in love with the headline number — revenue, or EBITDA — and work backwards to justify it. We do the opposite. We start from what it would take to improve the business and work forwards to what we're willing to pay for that optionality. The 12 points below are our diagnostic gates. A deal has to pass all 12 before we open a data room.",
      },
      {
        heading: "The 12-point framework",
        body: "1. Customer concentration (no single customer >20% revenue). 2. Revenue quality (recurring vs. one-off). 3. Gross margin trajectory (3-year trend). 4. Management dependency (can the business run without the owner?). 5. Staff structure (key-person risk, team depth). 6. Supplier concentration and switching costs. 7. Physical assets (owned vs. leased, condition, capex requirements). 8. Working capital cycle. 9. Regulatory and compliance exposure. 10. Competitive moat (what stops a competitor from taking customers?). 11. Growth levers (what's genuinely constrained vs. abandoned?). 12. Exit path (who would buy this in 3–5 years, and at what multiple?). Each gate has a red/amber/green scoring system. We don't proceed past amber without a documented remediation plan.",
      },
      {
        heading: "Operational due diligence is different",
        body: "Financial DD tells you what happened. Operational DD tells you why, and whether it can change. We interview mid-level managers, not just the owner. We spend time on the floor, in the warehouse, talking to customers. We look at the roster and the supplier invoices. That's where the real story lives.",
      },
    ],
  },
  "turnaround-framework": {
    title: "Business Turnaround Framework",
    category: "Operations",
    date: "December 2025",
    intro: "Our diagnostic process for underperforming businesses: how to identify the constraint, prioritise the fix, and execute without destroying culture.",
    sections: [
      {
        heading: "The constraint is rarely what it looks like",
        body: "Most operators identify a symptom and try to treat it. Revenue is down → push sales harder. Costs are up → cut headcount. Both are wrong 80% of the time. The constraint is usually upstream: a broken procurement process, a manager who can't delegate, a product mix that's drifted from the core. Finding the real constraint requires data and honesty — not assumptions.",
      },
      {
        heading: "Our three-phase approach",
        body: "Phase 1 (Weeks 1–4): Diagnostic. P&L by cost centre, cash flow analysis, staff interviews, customer churn data. We're listening, not acting. Phase 2 (Months 2–4): Prioritised intervention. One or two changes maximum. We don't restructure everything at once — that destroys morale and makes causation impossible to trace. Phase 3 (Months 4–12): Stabilise and scale. Once the constraint is resolved and the baseline is improving, we layer growth initiatives back in.",
      },
      {
        heading: "What we don't do",
        body: "We don't mass-retrench on day one. We don't replace the entire management team. We don't rebrand without revenue. These are the classic private equity mistakes applied to SMEs that don't have the resilience of larger organisations. SMEs run on relationships and trust. Destroy either and you destroy the business.",
      },
    ],
  },
  "aip-investor-faq": {
    title: "AIP Investor FAQ: Active Ownership Explained",
    category: "AIP",
    date: "September 2025",
    intro: "What INZ actually means by 'active involvement', how we structure acquisitions to satisfy the criteria, and common mistakes that get applications declined.",
    sections: [
      {
        heading: "What is the Active Investor Plus pathway?",
        body: "The Active Investor Plus (AIP) visa is a NZ residency pathway for investors who deploy capital into qualifying NZ investments. Unlike passive investment visas, AIP requires 'active involvement' in at least one of your investments. That active involvement requirement is where most applications go wrong.",
      },
      {
        heading: "What does 'active' actually mean?",
        body: "INZ doesn't require you to be the managing director. They require documented, ongoing involvement: board participation, strategic decisions, regular reporting review, and demonstrable governance activity. We structure acquisitions from day one to ensure the investor satisfies this — including board minutes, monthly review meetings, and a written governance framework.",
      },
      {
        heading: "How we structure AIP-compliant acquisitions",
        body: "We acquire the business on behalf of (or jointly with) the investor. The investor holds equity and takes a director or chair role. We install the operational team and run day-to-day, but all strategic decisions are documented as involving the investor. This is fully INZ-compliant and we've taken clients through this pathway successfully. Note: we are not licensed immigration advisers. All immigration applications must be filed through a licensed adviser.",
      },
    ],
  },
  "operational-team-nz": {
    title: "Building an Operational Team in NZ",
    category: "Team Building",
    date: "October 2025",
    intro: "How we find, vet, and onboard COOs and GMs in NZ's tight labour market. 12 businesses, 40+ key hires, hard lessons included.",
    sections: [
      {
        heading: "NZ's talent market is different",
        body: "NZ is a small market. The talent pool for experienced SME operators — people who can run a $2–5M business autonomously — is thin. The best people are usually employed and not looking. That means network-based recruitment, not job boards.",
      },
      {
        heading: "Our hiring process",
        body: "We don't post jobs. We call people we've worked with, or who've been referred by people we trust. We do a structured interview that focuses on specific past decisions (not hypotheticals), then a working session where we give the candidate a real operational problem from the business and see how they think. References are called, not emailed.",
      },
      {
        heading: "The first 90 days",
        body: "We run a structured 90-day onboarding: 30 days listening and mapping (no changes), 30 days planning and communicating, 30 days executing the first initiative. This prevents the classic new-hire mistake of changing things too fast and losing the institutional knowledge that made the business work.",
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function InsightPost({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 px-6 border-b border-gold/20">
        <div className="mx-auto max-w-3xl">
          <Link href="/insights" className="text-teal text-sm hover:underline mb-6 block">
            ← Back to Insights
          </Link>
          <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
            {post.category}
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold text-offwhite mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {post.title}
          </h1>
          <p className="text-offwhite/50 text-sm">{post.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-stone text-lg leading-relaxed mb-12 font-medium border-l-4 border-gold pl-6">
            {post.intro}
          </p>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="text-2xl font-bold text-navy mb-4"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {section.heading}
                </h2>
                <p className="text-stone leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-lg bg-navy text-center">
            <h3
              className="text-2xl font-bold text-offwhite mb-3"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Work with us.
            </h3>
            <p className="text-offwhite/70 mb-6">Schedule a 15-minute call to discuss your requirements.</p>
            <Link
              href="/#get-started"
              className="inline-flex items-center rounded-sm bg-teal px-8 py-3 text-sm font-semibold text-white hover:bg-teal/90 transition-colors"
            >
              Schedule Investor Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
