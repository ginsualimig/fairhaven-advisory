"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const initial =
    direction === "left"
      ? { opacity: 0, x: -32, y: 0 }
      : { opacity: 0, x: 0, y: 24 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerMs = 50,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerMs / 1000,
          },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface GoldLineSectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  labelClassName?: string;
}

export function GoldLineSectionHeading({
  label,
  heading,
  description,
  className,
  headingClassName,
  labelClassName,
}: GoldLineSectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <AnimatedSection direction="left" className={className}>
      <div ref={ref}>
        {label && (
          <span
            className={`text-xs font-semibold uppercase ${labelClassName ?? "text-teal"}`}
            style={{ letterSpacing: "0.5px" }}
          >
            {label}
          </span>
        )}
        <div className="relative inline-block mt-2">
          <h2
            className={`text-3xl md:text-4xl font-bold ${headingClassName ?? "text-navy"}`}
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {heading}
          </h2>
          {/* Animated gold line */}
          <motion.div
            className="h-[2px] bg-gold mt-2 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>
        {description && (
          <p className="text-stone mt-3 max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </AnimatedSection>
  );
}
