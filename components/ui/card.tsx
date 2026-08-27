import * as React from "react";
import { cn } from "@/lib/utils";
import type { ShadowSize, Surface } from "@/types";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: Surface;
  shadow?: ShadowSize;
  /** Dashed 2px edge = the "wrong way" / abandoned card. */
  dashed?: boolean;
  rounded?: boolean;
  interactive?: boolean;
}

const SURFACE: Record<Surface, string> = {
  paper: "bg-surface-card text-body-text",
  white: "bg-white text-body-text",
  grey: "bg-surface-alt text-body-text",
  chip: "bg-surface-high text-body-text",
  dark: "bg-surface-dark text-on-dark",
  black: "bg-ink text-on-dark",
};

export function Card({
  surface = "paper",
  shadow = "md",
  dashed = false,
  rounded = false,
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative box-border p-8",
        SURFACE[surface],
        rounded ? "rounded-lg" : "rounded-none",
        dashed
          ? "border-2 border-dashed border-ink"
          : cn("shadow-[inset_0_0_0_2px_var(--color-ink)]", shadow === "md" && "shadow-hard-md", shadow === "sm" && "shadow-hard-sm"),
        interactive &&
          "transition-[transform,box-shadow] duration-[120ms] ease-snap hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
