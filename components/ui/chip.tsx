import * as React from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "outline" | "status" | "raised" | "banner" | "version" | "metric" | "tag";

const VARIANT: Record<ChipVariant, string> = {
  outline: "rounded-full bg-surface-high px-2 py-1 font-mono text-[16px] leading-6 uppercase text-muted shadow-[inset_0_0_0_1px_var(--color-ink)]",
  status: "rounded-full bg-surface-alt px-4 py-2 font-mono text-xs font-medium leading-4 text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
  raised: "rounded-full bg-surface-high px-4 py-2 font-mono text-xs font-medium leading-4 text-ink shadow-[inset_0_0_0_2px_var(--color-ink)] shadow-hard-sm",
  banner: "rounded-full bg-surface-alt px-4 py-1 font-mono text-[16px] leading-6 uppercase text-ink shadow-[inset_0_0_0_2px_var(--color-ink)] shadow-hard-sm",
  version: "rounded-full bg-paper px-2 py-1 font-mono text-xs font-medium leading-4 text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
  metric: "rounded-none px-2 py-1 font-mono text-[16px] leading-6 uppercase text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
  tag: "rounded-none bg-ink px-3 py-1 font-mono text-xs font-medium leading-4 uppercase text-paper",
};

export function Chip({
  variant = "outline",
  tilt = false,
  className,
  children,
}: {
  variant?: ChipVariant;
  tilt?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 whitespace-nowrap", VARIANT[variant], tilt && "-rotate-2", className)}>
      {children}
    </span>
  );
}
