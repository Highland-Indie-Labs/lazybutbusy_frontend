"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/** Underlined input; focus lifts it into a bordered raised box. */
export const Input = React.forwardRef<HTMLInputElement, FieldProps>(function Input(
  { label, error, className, ...props },
  ref,
) {
  return (
    <label className="flex flex-col gap-2">
      {label && (
        <span className="font-mono text-xs leading-4 font-medium tracking-[1.2px] uppercase text-ink">{label}</span>
      )}
      <input
        ref={ref}
        {...props}
        className={cn(
          "box-border w-full rounded-none border-0 bg-transparent px-0 py-2 font-body text-[16px] leading-6 text-ink outline-none",
          "shadow-[inset_0_-2px_0_0_var(--color-ink)] transition-[box-shadow,padding,background] duration-[120ms] ease-snap",
          "focus:bg-white focus:px-3 focus:shadow-[inset_0_0_0_2px_var(--color-ink),4px_4px_0_0_var(--color-ink)]",
          className,
        )}
      />
      {error && <span className="font-mono text-xs leading-4 font-medium uppercase text-error">{error}</span>}
    </label>
  );
});

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }>(
  function Textarea({ label, error, className, ...props }, ref) {
    return (
      <label className="flex flex-col gap-2">
        {label && (
          <span className="font-mono text-xs leading-4 font-medium tracking-[1.2px] uppercase text-ink">{label}</span>
        )}
        <textarea
          ref={ref}
          rows={4}
          {...props}
          className={cn(
            "box-border w-full resize-y rounded-none border-0 bg-transparent p-3 font-body text-[16px] leading-6 text-ink outline-none",
            "shadow-[inset_0_0_0_2px_var(--color-ink)]",
            className,
          )}
        />
        {error && <span className="font-mono text-xs leading-4 font-medium uppercase text-error">{error}</span>}
      </label>
    );
  },
);
