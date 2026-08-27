"use client";

import { motion } from "motion/react";

/** Chunky reveal: offsets in, no soft fade-scale. Respects reduced motion via Motion defaults. */
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.24, ease: [0.2, 0, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
