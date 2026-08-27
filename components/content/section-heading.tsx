import * as React from "react";
import { cn } from "@/lib/utils";

/** Eyebrow label: 1px sides/top + 4px bottom rule. */
export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-block border-x border-t border-b-4 border-ink pb-2 font-display text-[16px] leading-6 uppercase text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DisplayHeading({ children, className, as: Tag = "h2" }: { children: React.ReactNode; className?: string; as?: "h1" | "h2" }) {
  return (
    <Tag className={cn("m-0 font-display text-display-lg font-bold uppercase text-ink text-pretty whitespace-pre-line", className)}>
      {children}
    </Tag>
  );
}

export function Headline({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("m-0 font-display text-headline-lg font-bold uppercase text-ink text-pretty", className)}>{children}</h2>;
}
