"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date?: string;
}

export default function CaseStudyCard({ title, excerpt, category, slug, date }: CaseStudyCardProps) {
  return (
    <motion.article
      className="border border-stone/20 rounded-lg bg-white overflow-hidden"
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px rgba(15,23,42,0.14)",
        backgroundColor: "rgba(74,155,142,0.04)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Category bar */}
      <div className="h-1 bg-gold" />

      <div className="p-6">
        <span
          className="inline-block text-xs font-semibold uppercase text-teal mb-3"
          style={{ letterSpacing: "0.5px" }}
        >
          {category}
        </span>
        <h3
          className="text-navy font-semibold text-lg mb-2 group-hover:text-teal transition-colors"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {title}
        </h3>
        <p className="text-stone text-sm leading-relaxed mb-4">{excerpt}</p>

        <div className="flex items-center justify-between">
          {date && <time className="text-xs text-stone/70">{date}</time>}
          <Link
            href={`/insights/${slug}`}
            className="group inline-flex items-center gap-1 text-sm text-gold font-medium hover:underline"
          >
            <span>Read more</span>
            <motion.span
              className="inline-flex gap-0.5"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {["→", "→", "→"].map((arrow, i) => (
                <motion.span
                  key={i}
                  variants={{
                    rest: { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : -8 },
                    hover: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
                >
                  {arrow}
                </motion.span>
              ))}
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
