"use client";

import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import StatCard from "@/components/StatCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import OperationalPillarCard from "@/components/OperationalPillarCard";
import InvestorTypeCard from "@/components/InvestorTypeCard";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  GoldLineSectionHeading,
} from "@/components/AnimatedSection";
import Link from "next/link";

// ── Icons (inline SVG, no extra dep) ───────────────────────────────────────────
const AcquisitionIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-teal">
    <rect x="4" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M12 10V7a6 6 0 0 1 12 0v3" stroke="currentColor" strokeWidth="2" />
    <path d="M18 20v-4M16 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const OperationsIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-teal">
    <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M18 6v4M18 26v4M6 18h4M26 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TurnaroundIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-teal">
    <path d="M6 26 L18 10 L30 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 22h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 10l5 4-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NetworkIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-teal">
    <circle cx="18" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M14.5 11.5 L11 24M21.5 11.5 L25 24M12 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ── Data ────────────────────────────────────────────────────────────────────────
const pillars = [
  {
    icon: <AcquisitionIcon />,
    title: "Acquisition",
    description:
      "We source proprietary off-market deals, conduct rigorous due diligence, and execute from LOI to settlement. You own it. We deliver it.",
    href: "/#approach",
  },
  {
    icon: <OperationsIcon />,
    title: "Operations",
    description:
      "Post-acquisition, we install systems, hire operators, and run day-to-day. Monthly reporting, full accountability. No passive wishing.",
    href: "/#approach",
  },
  {
    icon: <TurnaroundIcon />,
    title: "Turnarounds",
    description:
      "Underperforming assets are our specialty. We diagnose the constraint, fix the team, restructure the model, and restore trajectory.",
    href: "/#approach",
  },
  {
    icon: <NetworkIcon />,
    title: "Network Access",
    description:
      "17+ years of NZ and AU deal flow, operator relationships, and sector contacts. Your capital enters through a curated door.",
    href: "/#approach",
  },
];

const caseStudies = [
  {
    businessName: "Pacific Coast Café Group",
    tagline: "Regional café chain turnaround — Auckland & Waikato",
    category: "Turnaround" as const,
    metrics: {
      revenueGrowth: "+84%",
      timeline: "18 months",
      teamSize: "22 → 38",
      status: "Operating",
    },
    narrative: [
      "We inherited a 4-location café group generating $1.2M revenue with declining margins, high staff turnover, and no centralised purchasing. The operator had run out of capacity and the business was bleeding cash.",
      "We installed a general manager, renegotiated supplier contracts (saving ~$140K/year), unified the POS and rostering systems, and closed the underperforming Ponsonby location to concentrate resources.",
      "Eighteen months later: two new sites opened, revenue at $2.2M, EBITDA margin recovered from -3% to +14%. The business now runs without owner intervention.",
    ],
  },
  {
    businessName: "Meridian Trade Supplies",
    tagline: "Trade wholesale acquisition & scaling — Wellington",
    category: "Acquisition" as const,
    metrics: {
      revenueGrowth: "+62%",
      timeline: "24 months",
      teamSize: "8 → 19",
      status: "Scaling",
    },
    narrative: [
      "Sourced off-market through our Wellington trade sector network. The business had loyal customers, strong supplier relationships, and a retiring owner — classic acquisition profile. We moved from first call to settlement in 11 weeks.",
      "Post-close, we expanded the product catalogue, hired a business development manager, and launched a B2B e-commerce portal that now drives 38% of revenue. We also opened a second distribution hub in Petone.",
      "Two years in: revenue tracking $4.1M vs. $2.5M at acquisition. The business has a 6-person management team that operates independently. Investor returns in line with projections.",
    ],
  },
  {
    businessName: "Highbrook Logistics",
    tagline: "Last-mile delivery network scale-up — Auckland South",
    category: "Scaling" as const,
    metrics: {
      revenueGrowth: "+140%",
      timeline: "30 months",
      teamSize: "14 → 41",
      status: "Exited",
    },
    narrative: [
      "Brought in by a family office with a 65% stake and no operational capacity. The business had a strong route density but was capped by fleet size and manual dispatch. No technology, no data.",
      "We hired a COO with logistics tech experience, implemented route optimisation software, structured a driver-partner model (reducing payroll liability by $280K/year), and negotiated a 3PL anchor contract to underpin demand.",
      "Exited via trade sale at 6.8x EBITDA after 30 months. Total investor return of 3.4x on initial capital. The buyer was a NZX-listed logistics consolidator.",
    ],
  },
  {
    businessName: "Southland Food Manufacturing Co.",
    tagline: "Food manufacturing acquisition for AIP investor — Invercargill",
    category: "Acquisition" as const,
    metrics: {
      revenueGrowth: "+31%",
      timeline: "12 months",
      teamSize: "26 → 32",
      status: "Operating",
    },
    narrative: [
      "An international investor seeking NZ residency via the Active Investor Plus pathway required an acquisition that met INZ's active ownership criteria. We identified a food manufacturing business with an absentee owner and significant operational upside.",
      "We structured the deal to satisfy AIP active ownership requirements, placed the investor in a governance role, and installed an operations manager to handle day-to-day. The investor holds 100% equity and meets all INZ criteria for active involvement.",
      "Residency application submitted at month 12. Revenue up 31%. Headcount grown. The business is on a clear growth trajectory with investor involvement documented and compliant.",
    ],
  },
];

const investorTypes = [
  {
    icon: "🏛️",
    type: "AIP Investors",
    description:
      "Seeking NZ residency via active ownership. We structure acquisitions that meet INZ criteria — you own, we operate, you qualify.",
    bullets: [
      "Active Investor Plus-compliant structures",
      "Full governance documentation",
      "Operator instalment — you stay involved",
      "Residency pathway clear from day one",
    ],
  },
  {
    icon: "📊",
    type: "PE / VC Principals",
    description:
      "Capital deployed, but no appetite for day-to-day ops. We are the operational layer between your investment thesis and business reality.",
    bullets: [
      "Portfolio company operations management",
      "Turnaround and value-creation mandates",
      "Monthly financial reporting",
      "Exit preparation and handoff",
    ],
  },
  {
    icon: "🏢",
    type: "Family Offices",
    description:
      "Diversifying into NZ/AU SME exposure. Regional deal flow, operator-managed, transparent reporting. Capital working, not parked.",
    bullets: [
      "Curated NZ/AU acquisition pipeline",
      "Co-investment structures available",
      "Operational oversight included",
      "Quarterly performance reviews",
    ],
  },
  {
    icon: "🤝",
    type: "Business Owners",
    description:
      "Seeking a partner who takes over operations, fixes what's broken, and scales what works — while you retain equity upside.",
    bullets: [
      "Operational partnership structures",
      "Turnaround and growth mandates",
      "Revenue share or equity arrangements",
      "Full operational takeover available",
    ],
  },
];

const operatingStats = [
  { stat: "$47M+", label: "Assets under operation", tooltip: "Combined value of businesses operated" },
  { stat: "12+", label: "Businesses acquired & operated", tooltip: "Direct acquisitions and partner mandates" },
  { stat: "3.2x", label: "Average investor return", tooltip: "Blended return across exited positions" },
  { stat: "NZ + AU", label: "Operating footprint", tooltip: "Active operations in both markets" },
];

const approachSteps = [
  {
    step: "01",
    title: "Deal Sourcing",
    description:
      "We source 80% of deals off-market through owner relationships, broker networks, and sector contacts. We review 30–40 opportunities per qualified investment slot.",
  },
  {
    step: "02",
    title: "Due Diligence",
    description:
      "Commercial, financial, and operational DD led by our team. We stress-test assumptions, interview key staff, and model 3 scenarios before making an offer.",
  },
  {
    step: "03",
    title: "Deal Execution",
    description:
      "We manage the full transaction: LOI, SPA, warranties, vendor handover. Our legal and accounting partners are embedded in the process.",
  },
  {
    step: "04",
    title: "Operational Takeover",
    description:
      "Day 1 operational framework installed. Key hires made. Systems reviewed. The business runs on our playbook from week one.",
  },
  {
    step: "05",
    title: "Governance & Reporting",
    description:
      "Monthly P&L, cash flow, and KPI reporting to investors. Quarterly board reviews. Full transparency — always.",
  },
  {
    step: "06",
    title: "Scale or Exit",
    description:
      "We drive towards the agreed outcome: scale for long-term cash yield, or position for a trade sale at maximum multiple.",
  },
];

const teamMembers = [
  {
    name: "James Whitfield",
    title: "Managing Partner, Acquisitions",
    credentials: "Former PE associate (Pencarrow Private Equity). Led 8 acquisitions across NZ manufacturing and services.",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    title: "Head of Operations",
    credentials: "Ex-COO, Foodstuffs NZ. Built and scaled 3 regional business units. Operational playbook author.",
    linkedin: "#",
  },
  {
    name: "Marcus O'Brien",
    title: "Partner, Capital & Investors",
    credentials: "15 years in HNW investment structuring. Former Craigs Investment Partners. AIP pathway specialist.",
    linkedin: "#",
  },
  {
    name: "Priya Nair",
    title: "Director, Business Development",
    credentials: "Background in SME M&A advisory. 60+ transactions across NZ/AU. Vendor relationship network.",
    linkedin: "#",
  },
];

const resources = [
  {
    title: "How to Evaluate a Business for Acquisition",
    description: "The 12-point framework we use for every deal. Commercial, financial, and operational red flags to watch.",
    category: "Acquisition Guide",
    href: "/insights/evaluate-business-acquisition",
  },
  {
    title: "Business Turnaround Framework",
    description: "Our diagnostic process for underperforming businesses: constraint identification, prioritisation, and execution sequencing.",
    category: "Operations",
    href: "/insights/turnaround-framework",
  },
  {
    title: "Building an Operational Team in NZ",
    description: "How we find, hire, and onboard operators in NZ's tight labour market. Lessons from 12+ businesses.",
    category: "Team Building",
    href: "/insights/operational-team-nz",
  },
  {
    title: "AIP Investor FAQ",
    description: "Active Investor Plus pathway explained. Active ownership criteria, INZ requirements, and what 'active' actually means.",
    category: "AIP",
    href: "/insights/aip-investor-faq",
  },
];

// ── Page ────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="Operational Partners · NZ & Australia"
        heading="Own Profitable Businesses. We Operate Them."
        subheading="Fairhaven Advisory partners with investors and business owners across NZ and Australia to source, acquire, operate, and scale profitable businesses."
        ctaLabel="Schedule Investor Consultation"
        ctaHref="/#get-started"
        secondaryLabel="View Our Portfolio"
        secondaryHref="/#portfolio"
      />

      {/* TRUST BAR */}
      <section className="bg-navy/98 border-b border-gold/10 py-6 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            "We Operate, Not Advise",
            "End-to-End Execution NZ & AU",
            "Accredited Partners Only",
            "Proven Operational Track Record",
          ].map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.08} direction="up">
              <span className="text-sm font-medium text-offwhite/70 flex items-center gap-2" style={{ letterSpacing: "0.5px" }}>
                <span className="text-gold">✦</span> {item}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-24 px-6 bg-offwhite scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="What We Do"
            heading="End-to-end operational partnership."
            description="We're not advisers. We source the deal, acquire it, operate it, and scale it. One partner. Full accountability."
            className="mb-14"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerMs={60}>
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <OperationalPillarCard {...p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* OPERATING STATS */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <GoldLineSectionHeading
              label="Track Record"
              heading="Operators accountable for results."
            />
            <div className="mt-6 space-y-4">
              <p className="text-stone leading-relaxed">
                We don't charge advisory fees. We're partners in the outcomes. Our team takes operational risk on every engagement — if the business doesn't perform, we don't perform.
              </p>
              <p className="text-stone leading-relaxed">
                That alignment is the foundation of how we work. We source our own deals, install our own people, and report transparently every month.
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 gap-6" staggerMs={80}>
            {operatingStats.map((item) => (
              <StaggerItem key={item.label}>
                <StatCard stat={item.stat} label={item.label} tooltip={item.tooltip} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PORTFOLIO / CASE STUDIES */}
      <section id="portfolio" className="py-24 px-6 bg-offwhite scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="Portfolio"
            heading="Real businesses. Real results."
            description="Placeholder case studies — names and metrics are illustrative. Real case studies available under NDA to qualified investors."
            className="mb-14"
          />
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerMs={80}>
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.businessName}>
                <CaseStudyCard {...cs} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.3} className="mt-8 text-center">
            <p className="text-stone text-sm">
              Qualified investors can request our full portfolio deck with verified financials.{" "}
              <Link href="/#get-started" className="text-teal hover:underline font-medium">
                Apply for access →
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="who-we-serve" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="Who We Serve"
            heading="Four types of partners. One operating model."
            description="We work with investors and business owners who want results, not reports."
            className="mb-14"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerMs={60}>
            {investorTypes.map((it) => (
              <StaggerItem key={it.type}>
                <InvestorTypeCard {...it} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* INVESTMENT CRITERIA */}
      <section className="py-24 px-6 bg-navy scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
                Investment Thesis
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-offwhite mb-6"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                What we look for.
              </h2>
              <p className="text-offwhite/70 leading-relaxed mb-6">
                We are selective. We only acquire businesses where we have high conviction that our operational involvement will materially improve performance and protect investor capital.
              </p>
              <p className="text-offwhite/70 leading-relaxed">
                We don't do real estate, financial services, or venture-stage plays. We focus on established, cash-generating SMEs with operational upside.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="rounded-lg border border-gold/20 bg-white/5 backdrop-blur p-8 space-y-6">
                {[
                  {
                    label: "Minimum Investment",
                    value: "NZD $1M+",
                    note: "Per opportunity or portfolio mandate",
                  },
                  {
                    label: "Target Returns",
                    value: "2.5x – 4x",
                    note: "Equity multiple over 3–5 year horizon",
                  },
                  {
                    label: "Business Revenue",
                    value: "$1M – $15M",
                    note: "Established cash-generating SMEs",
                  },
                  {
                    label: "Sectors",
                    value: "Services, Trade, Food, Logistics",
                    note: "NZ & AU focus. No VC or real estate.",
                  },
                  {
                    label: "Geography",
                    value: "NZ (all regions) + AU (east coast)",
                    note: "Primary markets; selective wider AU",
                  },
                  {
                    label: "Business Maturity",
                    value: "3+ years operating history",
                    note: "Profitable or near-breakeven preferred",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-6 pb-5 border-b border-gold/10 last:border-0 last:pb-0">
                    <div>
                      <div className="text-offwhite/60 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                      <div className="text-offwhite font-semibold">{item.value}</div>
                      <div className="text-offwhite/40 text-xs mt-0.5">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="py-24 px-6 bg-offwhite scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="Our Approach"
            heading="From sourcing to exit. Six phases."
            description="Every engagement runs through the same operational framework. No shortcuts. No exceptions."
            className="mb-14"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerMs={60}>
            {approachSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="rounded-lg border border-stone/10 bg-white p-8 relative overflow-hidden group hover:border-teal/30 transition-colors duration-300">
                  <div className="absolute top-6 right-6 text-5xl font-bold text-stone/5 group-hover:text-teal/10 transition-colors duration-500" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                    {step.step}
                  </div>
                  <div className="text-teal font-bold text-sm mb-3 uppercase tracking-widest">{step.step}</div>
                  <h3
                    className="text-xl font-bold text-navy mb-3"
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

      {/* TEAM */}
      <section id="team" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="Team"
            heading="Operators. Not advisers."
            description="Every team member has spent years inside businesses — not beside them. Credentials are verified on request."
            className="mb-14"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerMs={60}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group text-center">
                  {/* Placeholder avatar */}
                  <div className="w-24 h-24 rounded-full bg-navy/10 border-2 border-stone/10 group-hover:border-gold/40 transition-colors mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy/30" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-0.5">{member.name}</h3>
                  <p className="text-teal text-xs font-semibold uppercase tracking-wide mb-2">{member.title}</p>
                  <p className="text-stone text-xs leading-relaxed mb-3">{member.credentials}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold/80 font-medium transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <p className="text-stone text-sm">
              Placeholder headshots and bios — real team details to be added.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-24 px-6 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <GoldLineSectionHeading
            label="Resources"
            heading="Operator-grade guides."
            description="Educational content built from operational experience — not theoretical frameworks. No email required."
            className="mb-14"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerMs={60}>
            {resources.map((r) => (
              <StaggerItem key={r.href}>
                <Link href={r.href} className="block group rounded-lg border border-stone/10 bg-white p-8 hover:border-gold/30 transition-colors duration-300">
                  <span className="text-xs font-semibold uppercase tracking-widest text-teal mb-3 block">{r.category}</span>
                  <h3
                    className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed mb-4">{r.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Read guide <span className="arrow-animate">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GET STARTED */}
      <section id="get-started" className="py-24 px-6 bg-navy scroll-mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-4">
              Accredited Partners Only
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-offwhite mb-4"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Three ways to get started.
            </h2>
            <p className="text-offwhite/70 text-lg max-w-xl mx-auto">
              We qualify all partners before sharing deal flow. The process is simple and fast.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerMs={80}>
            {[
              {
                step: "1",
                title: "Schedule a Consultation",
                description: "15-minute call to assess mutual fit. We'll explain our current deal pipeline and investment criteria. No commitments.",
                cta: "Book 15-min Call",
                href: "https://calendly.com",
                highlight: true,
              },
              {
                step: "2",
                title: "Download Our Criteria",
                description: "Get our full investment criteria, sector focus, and anonymised case study pack. Sent immediately on email confirmation.",
                cta: "Download Criteria Pack",
                href: "#",
                highlight: false,
              },
              {
                step: "3",
                title: "Apply to Our Program",
                description: "Formal investor intake form. Takes 10 minutes. Pre-qualified investors gain access to live deal pipeline.",
                cta: "Apply Now",
                href: "#",
                highlight: false,
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className={`rounded-lg p-8 h-full flex flex-col gap-4 ${item.highlight ? "bg-teal/10 border border-teal/30" : "bg-white/5 border border-gold/10"}`}>
                  <div className={`text-sm font-bold uppercase tracking-widest ${item.highlight ? "text-teal" : "text-gold"}`}>
                    Step {item.step}
                  </div>
                  <h3
                    className="text-xl font-bold text-offwhite"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-offwhite/60 text-sm leading-relaxed flex-1">{item.description}</p>
                  <a
                    href={item.href}
                    className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold transition-colors ${item.highlight ? "bg-teal text-white hover:bg-teal/90" : "border border-gold/30 text-gold hover:border-gold hover:bg-gold/10"}`}
                  >
                    {item.cta}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
