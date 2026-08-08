"use client";

import { cn } from "@/lib/cn";
import { useStickyHeader } from "@/hooks/useStickyHeader";

/**
 * Return-to-top control. Appears once the hero is well out of the way.
 *
 * `useStickyHeader` is just a rAF-throttled "scrolled past N" flag, so it does
 * the job here too rather than adding a second scroll listener.
 *
 * The scroll itself is left to `scroll-behavior: smooth` on `html` — passing an
 * explicit `behavior` would override the reduced-motion opt-out that already
 * resets that property.
 */
export function BackToTop() {
  const visible = useStickyHeader(700);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "bg-gold text-ink fixed right-5 bottom-5 z-110 grid h-12 w-12 place-items-center rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)]",
        "transition-[opacity,transform] duration-300 ease-[var(--ease-out-soft)]",
        // Its `shadow-*` utility outranks the base focus ring, so restate it.
        "focus-visible:shadow-[0_0_0_2px_#fff,0_0_0_4px_var(--color-ink)]",
        "hover:bg-gold-bright hover:-translate-y-1 lg:right-8 lg:bottom-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
