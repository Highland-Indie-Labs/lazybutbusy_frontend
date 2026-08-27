"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ShadowSize } from "@/types";

type Variant = "primary" | "secondary" | "inverse" | "abandoned";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  shadow?: ShadowSize;
  /** Lazy Orange hover shadow. Use sparingly. */
  accent?: boolean;
  arrow?: boolean;
  block?: boolean;
}

const VARIANT: Record<Variant, string> = {
  primary: "bg-ink text-paper shadow-[inset_0_0_0_2px_var(--color-ink)]",
  secondary: "bg-paper text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
  inverse: "bg-white text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
  abandoned: "bg-surface-dim text-outline shadow-[inset_0_0_0_2px_var(--color-outline)] cursor-not-allowed",
};

const SIZE: Record<Size, string> = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

/**
 * Neobrutalist button. Hover depresses into its own shadow (+2px,+2px, 8→4px)
 * — chunky mechanical shift, never a soft fade.
 */
export function Button({
  variant = "primary",
  size = "md",
  shadow,
  accent = false,
  arrow = false,
  block = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const offset: ShadowSize = shadow ?? (size === "lg" ? "md" : size === "sm" ? "none" : "sm");
  const rest = offset === "md" ? "shadow-hard-md" : offset === "sm" ? "shadow-hard-sm" : "";
  const hover =
    offset === "none"
      ? ""
      : accent
        ? "hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-accent"
        : "hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-sm";

  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-none border-0 font-mono text-[16px] leading-6 font-medium tracking-[1.6px] uppercase",
        "transition-[transform,box-shadow] duration-[120ms] ease-snap",
        SIZE[size],
        VARIANT[variant],
        variant !== "abandoned" && rest,
        variant !== "abandoned" && hover,
        block && "flex w-full",
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2.5} aria-hidden />}
    </button>
  );
}
