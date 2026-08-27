import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ListItem({ kind = "check", children, className }: { kind?: "check" | "x"; children: React.ReactNode; className?: string }) {
  const Icon = kind === "x" ? X : Check;
  return (
    <div className={cn("flex items-baseline gap-3 font-body text-[18px] leading-7 text-body-text", className)}>
      <Icon size={16} strokeWidth={3} className="shrink-0 translate-y-[3px]" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

/** Terminal-flavoured list row used on dark cards. */
export function OkItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 font-body text-[16px] leading-6 text-on-dark">
      <span className="font-mono text-xs leading-6 font-medium text-white">[OK]</span>
      <span>{children}</span>
    </div>
  );
}
