"use client";

import { useInView } from "@/hooks/useInView";

/**
 * up / down / left / right — 28px slide + fade, the default vocabulary.
 * fade  — opacity only, for things that shouldn't move (backgrounds, overlays).
 * zoom  — 0.94 scale, for photography and collages.
 * mask  — left-to-right clip wipe, no fade; reads as a curtain pulling back.
 */
export type RevealVariant = "up" | "down" | "left" | "right" | "fade" | "zoom" | "mask";

type RevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Stagger in ms, for sibling cards. Keep under ~400 total or it drags. */
  delay?: number;
  /** Override the 600ms default. */
  duration?: number;
  /**
   * Extra gate. The element reveals only once it is in view *and* this is true.
   * Hero content passes the app-ready flag so it animates as the preloader
   * lifts rather than behind it.
   */
  when?: boolean;
  /** Re-hide and replay when the element leaves the viewport. Off by default. */
  repeat?: boolean;
  as?: "div" | "li" | "span";
  className?: string;
};

/**
 * Fade/slide on scroll into view.
 *
 * Styling lives in globals.css behind `scripting: enabled` and
 * `prefers-reduced-motion: no-preference`, so this wrapper is inert — and the
 * content fully visible — when either does not apply. Children are always
 * rendered, never gated on `inView`. Only `opacity`, `transform` and
 * `clip-path` animate, so every reveal stays on the compositor.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration,
  when = true,
  repeat = false,
  as: Tag = "div",
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ once: !repeat });

  const style: React.CSSProperties & Record<string, string | number> = {};
  if (delay) style["--reveal-delay"] = `${delay}ms`;
  if (duration) style["--reveal-duration"] = `${duration}ms`;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal={variant}
      data-shown={inView && when ? "" : undefined}
      style={Object.keys(style).length ? style : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
