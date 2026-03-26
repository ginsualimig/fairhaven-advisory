"use client";

import { motion } from "framer-motion";

interface CaseStudyMetrics {
  revenueGrowth: string;
  timeline: string;
  teamSize: string;
  status: string;
}

interface CaseStudyCardProps {
  businessName: string;
  tagline: string;
  category: "Acquisition" | "Turnaround" | "Scaling";
  metrics: CaseStudyMetrics;
  narrative: string[];
  bgColor?: string;
}

const categoryColors: Record<string, string> = {
  Acquisition: "bg-teal/10 text-teal border-teal/20",
  Turnaround: "bg-gold/10 text-gold border-gold/20",
  Scaling: "bg-navy/10 text-navy border-navy/20",
};

export default function CaseStudyCard({
  businessName,
  tagline,
  category,
  metrics,
  narrative,
  bgColor = "bg-white",
}: CaseStudyCardProps) {
  return (
    <motion.div
      className={`rounded-lg border border-stone/10 ${bgColor} overflow-hidden`}
      whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(15,23,42,0.10)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Header */}
      <div className="p-8 border-b border-stone/10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-2xl font-bold text-navy"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {businessName}
          </h3>
          <span
            className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[category]}`}
          >
            {category}
          </span>
        </div>
        <p className="text-stone text-sm">{tagline}</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-stone/10">
        {[
          { label: "Revenue Growth", value: metrics.revenueGrowth },
          { label: "Timeline", value: metrics.timeline },
          { label: "Team Size", value: metrics.teamSize },
          { label: "Status", value: metrics.status },
        ].map((m) => (
          <div key={m.label} className="p-5 border-r last:border-r-0 border-stone/10">
            <div className="text-xl font-bold text-gold mb-1">{m.value}</div>
            <div className="text-xs text-stone uppercase tracking-wide">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="p-8 space-y-3">
        {narrative.map((para, i) => (
          <p key={i} className="text-stone text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
