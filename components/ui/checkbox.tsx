"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string }>(
  function Checkbox({ label, className, ...props }, ref) {
    return (
      <label className={cn("inline-flex cursor-pointer items-center gap-3 font-body text-[16px] leading-6 text-body-text", className)}>
        <input ref={ref} type="checkbox" {...props} className="peer sr-only" />
        <span
          className={cn(
            "inline-flex size-6 shrink-0 items-center justify-center rounded-none bg-paper shadow-[inset_0_0_0_2px_var(--color-ink)]",
            "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink",
            "[&>svg]:hidden peer-checked:[&>svg]:block",
          )}
        >
          <Check size={16} strokeWidth={3} className="-rotate-3 text-ink" aria-hidden />
        </span>
        {label}
      </label>
    );
  },
);
