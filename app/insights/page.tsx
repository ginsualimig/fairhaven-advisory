import Link from "next/link";
import {
  GoldLineSectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const insights = [
  {
    slug: "turnaround-case-study-cafe-group",
    title: "Turnaround Case Study: Pacific Coast Café Group",
    excerpt: "How we identified the constraint (centralised purchasing and staff turnover), fixed both in parallel, and restored an 84% revenue trajectory in 18 months.",
    category: "Turnaround",
    date: "March 2026",
  },
  {
    slug: "nz-acquisition-market-q1-2026",
    title: "NZ Acquisition Market: Q1 2026 Insights",
    excerpt: "Vendor multiples softening in trade and logistics. Hospitality still distressed. Our current deal pipeline and what we're watching.",
    category: "Market Intelligence",
    date: "February 2026",
  },
  {
    slug: "evaluate-business-acquisition",
    title: "How to Evaluate a Business for Acquisition",
    excerpt: "The 12-point framework we apply to every deal — commercial, financial, and operational red flags before you sign anything.",
    category: "Acquisition Guide",
    date: "January 2026",
  },
  {
    slug: "turnaround-framework",
    title: "Business Turnaround Framework",
    excerpt: "Our diagnostic process for underperforming businesses: how to identify the constraint, prioritise the fix, and execute without destroying culture.",
    category: "Operations",
    date: "December 2025",
  },
  {
    slug: "scaling-meridian-trade",
    title: "From $2.5M to $4.1M: Scaling Meridian Trade Supplies",
    excerpt: "We acquired an off-market Wellington trade business and scaled it 62% over 24 months. Here's the exact playbook: catalogue expansion, B2B e-commerce, second hub.",
    category: "Scaling Story",
    date: "November 2025",
  },
  {
    slug: "operational-team-nz",
    title: "Building an Operational Team in NZ",
    excerpt: "How we find, vet, and onboard COOs and GMs in NZ's tight labour market. 12 businesses, 40+ key hires, hard lessons included.",
    category: "Team Building",
    date: "October 2025",
  },
  {
    slug: "aip-investor-faq",
    title: "AIP Investor FAQ: Active Ownership Explained",
    excerpt: "What INZ actually means by 'active involvement', how we structure acquisitions to satisfy the criteria, and common mistakes that get applications declined.",
    category: "AIP",
    date: "September 2025",
  },
  {
    slug: "highbrook-logistics-exit",
    title: "Exit Case Study: Highbrook Logistics at 3.4x",
    excerpt: "How a family office investment in a last-mile delivery network returned 3.4x in 30 months via trade sale to an NZX-listed acquirer.",
    category: "Turnaround",
    date: "August 2025",
  },
];

const categoryColors: Record<string, string> = {
  "Turnaround": "bg-teal/10 text-teal border-teal/20",
  "Market Intelligence": "bg-gold/10 text-gold border-gold/20",
  "Acquisition Guide": "bg-navy/10 text-navy border-navy/20",
  "Operations": "bg-teal/10 text-teal border-teal/20",
  "Scaling Story": "bg-gold/10 text-gold border-gold/20",
  "Team Building": "bg-navy/10 text-navy border-navy/20",
  "AIP": "bg-stone/10 text-stone border-stone/20",
};

export default function InsightsPage() {
  return (
    <div className="bg-offwhite min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 px-6 border-b border-gold/20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
            Insights
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-offwhite mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Operational intelligence.
          </h1>
          <p className="text-offwhite/70 text-lg max-w-2xl">
            Case studies, market intelligence, and operational frameworks — written by operators, not marketers.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerMs={50}>
            {insights.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group block rounded-lg border border-stone/10 bg-white p-8 h-full flex flex-col hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[post.category] ?? "bg-stone/10 text-stone border-stone/20"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-stone">{post.date}</span>
                  </div>
                  <h2
                    className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors flex-1"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-stone text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold mt-auto">
                    Read article →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
