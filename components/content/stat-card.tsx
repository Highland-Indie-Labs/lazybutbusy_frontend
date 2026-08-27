import { cn } from "@/lib/utils";

export function StatCard({ value, label, description, interactive = false, className }: { value: string; label: string; description?: string; interactive?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "box-border flex flex-col items-center gap-4 bg-surface-card px-6 pt-6 pb-7 text-center shadow-[inset_0_0_0_2px_var(--color-ink)] shadow-hard-md",
        interactive &&
          "transition-[transform,box-shadow] duration-[120ms] ease-snap hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-sm",
        className,
      )}
    >
      <span className="font-display text-display-lg font-bold text-ink">{value}</span>
      <span className="bg-ink px-3 py-1 font-mono text-xs leading-4 font-medium uppercase text-paper">{label}</span>
      {description && <span className="font-body text-[16px] leading-6 text-body-text">{description}</span>}
    </div>
  );
}
