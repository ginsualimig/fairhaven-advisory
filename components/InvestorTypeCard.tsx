"use client";

import { motion } from "framer-motion";

interface InvestorTypeCardProps {
  icon: React.ReactNode;
  type: string;
  description: string;
  bullets: string[];
}

export default function InvestorTypeCard({
  icon,
  type,
  description,
  bullets,
}: InvestorTypeCardProps) {
  return (
    <motion.div
      className="group rounded-lg border border-stone/10 bg-offwhite p-8 flex flex-col gap-4 hover:border-teal/40 transition-colors duration-300"
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(15,23,42,0.10)" }}
      transition={{ duration: 0.25 }}
    >
      <div className="text-gold text-3xl">{icon}</div>
      <h3
        className="text-xl font-bold text-navy"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {type}
      </h3>
      <p className="text-stone text-sm leading-relaxed">{description}</p>
      <ul className="space-y-2 mt-auto">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-stone">
            <span className="text-teal mt-0.5 shrink-0">✓</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
