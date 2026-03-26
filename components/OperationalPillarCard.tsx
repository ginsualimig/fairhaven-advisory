"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface OperationalPillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function OperationalPillarCard({
  icon,
  title,
  description,
  href = "#",
}: OperationalPillarCardProps) {
  return (
    <motion.div
      className="group relative rounded-lg border border-stone/10 bg-white p-8 flex flex-col gap-4 hover:border-gold/40 transition-colors duration-300"
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(15,23,42,0.10)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500 rounded-t-lg" />

      <div className="text-teal">{icon}</div>
      <h3
        className="text-xl font-bold text-navy"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        {title}
      </h3>
      <p className="text-stone text-sm leading-relaxed flex-1">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
      >
        Learn More <span className="arrow-animate">→</span>
      </Link>
    </motion.div>
  );
}
