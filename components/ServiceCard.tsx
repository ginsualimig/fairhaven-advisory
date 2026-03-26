"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px rgba(15,23,42,0.14)",
        backgroundColor: "rgba(74,155,142,0.04)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-lg border border-stone/20 bg-white overflow-hidden"
    >
      <Link
        href={href}
        className="group block p-8 h-full hover:border-teal/60 transition-colors duration-300"
      >
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy/5 text-teal group-hover:bg-teal/10 transition-colors">
            {icon}
          </div>
        )}
        <h3
          className="text-navy font-semibold text-lg mb-2 group-hover:text-teal transition-colors"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {title}
        </h3>
        <p className="text-stone text-sm leading-relaxed">{description}</p>
        <div className="mt-4 inline-flex items-center text-sm text-gold font-medium gap-1 overflow-hidden">
          <span>Learn more</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 0 }}
          >
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
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
