"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The Lazy Loader — crawls to ~72%, stalls, then jumps to 100%.
 * Label uses mix-blend-difference so it reads over both bar and track.
 */
export function LazyLoader({
  label = "COMPILING... (EVENTUALLY)",
  progress,
  auto = true,
  className,
}: {
  label?: string;
  progress?: number;
  auto?: boolean;
  className?: string;
}) {
  const [value, setValue] = React.useState(progress ?? 0);

  React.useEffect(() => {
    if (progress !== undefined || !auto) return;
    let v = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (v < 72) {
        v += Math.random() * 1.2;
        timer = setTimeout(tick, 180);
      } else {
        timer = setTimeout(() => {
          setValue(100);
          timer = setTimeout(() => {
            v = 0;
            setValue(0);
            tick();
          }, 1400);
        }, 2200);
      }
      setValue(Math.min(v, 100));
    };
    tick();
    return () => clearTimeout(timer);
  }, [auto, progress]);

  const shown = progress ?? value;

  return (
    <div className={cn("relative h-8 overflow-hidden bg-white shadow-[inset_0_0_0_2px_var(--color-ink)]", className)}>
      <div className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-200 ease-linear" style={{ width: shown + "%" }} />
      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
        <span className="font-mono text-xs leading-4 uppercase text-white">{label}</span>
      </div>
    </div>
  );
}
