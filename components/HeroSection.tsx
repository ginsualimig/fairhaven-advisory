import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  eyebrow?: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({
  heading,
  subheading,
  eyebrow = "Fairhaven Advisory / New Zealand & Australia",
  image,
  imageAlt,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 52]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, reduceMotion ? 1 : 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-teal/20" />
      <div className="absolute inset-0 opacity-[0.035] bg-grid pointer-events-none" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-stretch lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div className="relative z-10 flex items-center px-6 py-24 md:px-10 lg:py-32" style={{ opacity: contentOpacity }}>
          <div className="max-w-2xl">
            <motion.span
              className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
            </motion.span>
            <motion.h1
              className="mb-8 max-w-xl font-serif text-4xl font-bold leading-[1.08] text-offwhite md:text-5xl lg:text-[4.25rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="mb-10 max-w-xl text-lg leading-relaxed text-offwhite/70 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {subheading}
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton>
                <Link href="/#what-we-do" className="inline-flex items-center gap-3 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-[0_8px_24px_rgba(212,175,55,0.16)] transition-all hover:bg-gold/85 hover:shadow-[0_12px_30px_rgba(212,175,55,0.24)]">
                  Explore our approach <span aria-hidden="true" className="h-2 w-2 rotate-45 border-b border-r border-current" />
                </Link>
              </MagneticButton>
              <Link href="/contact" className="text-sm font-medium text-offwhite/80 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold">
                Start a conversation
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
          <motion.div className="absolute inset-[-6%]" style={{ scale: imageScale, y: imageY }}>
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-center" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/15 to-transparent lg:from-navy lg:via-navy/20" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" />
          <div className="absolute bottom-8 right-8 hidden max-w-[210px] border-l border-gold/70 pl-4 text-xs leading-relaxed text-offwhite/75 md:block">
            Quietly building durable value through better decisions and stronger operations.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </section>
  );
}
