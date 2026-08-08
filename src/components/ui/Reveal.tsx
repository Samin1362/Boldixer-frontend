"use client";

import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger in ms, for sibling cards. */
  delay?: number;
  className?: string;
};

/**
 * Fade-and-rise on first scroll into view.
 *
 * Styling lives in globals.css behind `scripting: enabled` and
 * `prefers-reduced-motion: no-preference`, so this wrapper is inert — and the
 * content fully visible — when either does not apply. Children are always
 * rendered, never gated on `inView`.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={inView ? "shown" : ""}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
      className={className}
    >
      {children}
    </div>
  );
}
