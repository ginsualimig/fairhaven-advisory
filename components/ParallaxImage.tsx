"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  children?: ReactNode;
}

export default function ParallaxImage({ src, alt, sizes, className = "", children }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -18, reduceMotion ? 0 : 18]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-[-8%]" style={{ y }}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
      {children}
    </div>
  );
}
