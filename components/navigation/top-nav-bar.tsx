"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, CTA_LABEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TopNavBar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="relative z-10 box-border w-full border-b-2 border-ink bg-paper shadow-hard-sm">
      <div className="flex items-center justify-between gap-6 px-8 py-4">
        <Link href="/" className="flex items-center gap-4 no-underline">
          <Image
            src="/logo/logo-sloth-small.jpg"
            alt="Lazy But Busy sloth mascot"
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-md object-cover grayscale shadow-[inset_0_0_0_2px_var(--color-ink)]"
          />
          <span className="font-display text-[16px] leading-6 font-bold tracking-[-0.8px] uppercase whitespace-nowrap text-ink">
            Lazy But Busy
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b-2 border-transparent px-1.5 py-0.5 font-body text-[16px] leading-6 no-underline transition-colors duration-[120ms] ease-snap",
                  active ? "text-ink shadow-[inset_0_0_0_1px_var(--color-ink)]" : "text-muted hover:border-ink hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-none bg-ink px-6 py-2 font-mono text-[16px] leading-6 tracking-[1.6px] uppercase whitespace-nowrap text-paper no-underline shadow-[inset_0_0_0_2px_var(--color-ink)] shadow-hard-sm transition-[transform,box-shadow] duration-[120ms] ease-snap hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:block"
          >
            {CTA_LABEL}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center bg-paper text-ink shadow-[inset_0_0_0_2px_var(--color-ink)] lg:hidden"
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.12, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden border-t-2 border-ink bg-paper lg:hidden"
          >
            <ul className="m-0 flex list-none flex-col p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-ink last:border-b-0">
                  <Link
                    href={link.href}
                    className="block min-h-[52px] px-8 py-4 font-mono text-[16px] leading-6 tracking-[1.6px] uppercase text-ink no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t-2 border-ink">
                <Link href="/contact" className="block min-h-[52px] bg-ink px-8 py-4 font-mono text-[16px] leading-6 tracking-[1.6px] uppercase text-paper no-underline">
                  {CTA_LABEL}
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
