"use client";

import { cn } from "@/lib/cn";

type CarouselDotsProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  /** Dashes sit on the brand panel in Portfolio, so default to white. */
  tone?: "light" | "dark";
  className?: string;
  label?: string;
};

/**
 * Dash pagination from the Portfolio section (Figma uses `ci:line-l` for the
 * active dash and `ci:line-m` for the rest — reproduced as sized bars so they
 * stay crisp and remain real buttons).
 */
export function CarouselDots({
  count,
  activeIndex,
  onSelect,
  tone = "light",
  className,
  label = "Choose slide",
}: CarouselDotsProps) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      role="tablist"
      aria-label={label}
    >
      {Array.from({ length: count }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active}
            aria-label={`Slide ${i + 1}`}
            onClick={() => onSelect(i)}
            className="group py-2"
          >
            <span
              className={cn(
                "block h-[5px] transition-all duration-300",
                active ? "w-11" : "w-6",
                tone === "light"
                  ? active
                    ? "bg-white"
                    : "bg-white/50 group-hover:bg-white/80"
                  : active
                    ? "bg-ink"
                    : "bg-ink/40 group-hover:bg-ink/70",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
