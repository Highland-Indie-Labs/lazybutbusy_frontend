import * as React from "react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

/** Bordered tile holding a single-ink Lucide icon. 48 or 64px. */
export function IconTile({
  name,
  size = 64,
  dark = false,
  className,
}: {
  name: keyof typeof Icons;
  size?: 48 | 64;
  dark?: boolean;
  className?: string;
}) {
  const Icon = (Icons[name] ?? Icons.Square) as React.ComponentType<{ size?: number; strokeWidth?: number }>;
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-lg shadow-hard-sm",
        dark ? "bg-ink text-white shadow-[inset_0_0_0_2px_var(--color-white)]" : "bg-surface-alt text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Icon size={size >= 64 ? 32 : 24} strokeWidth={2} />
    </div>
  );
}
