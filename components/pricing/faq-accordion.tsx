"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQS } from "@/lib/constants";

export function FaqAccordion() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="flex max-w-[840px] flex-col gap-4">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="bg-surface-card shadow-[inset_0_0_0_2px_var(--color-ink)]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent px-6 py-5 text-left"
            >
              <span className="font-display text-[20px] leading-7 font-bold tracking-[-0.8px] text-ink">{faq.q}</span>
              <span className="shrink-0 font-mono text-[20px] leading-7 font-medium text-ink">{isOpen ? "−" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.16, ease: [0.2, 0, 0, 1] }}
                  className="overflow-hidden border-t border-ink"
                >
                  <p className="m-0 px-6 pt-4 pb-5 font-body text-[16px] leading-6 text-body-text">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
