"use client";

import { useEffect, useState } from "react";

/**
 * Animate 0 → `target` once `active` is true.
 *
 * Reduced-motion collapses the duration to zero so the first frame lands on the
 * final number — the figure is never withheld, and state is only ever set from
 * inside the animation frame rather than the effect body.
 */
export function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 0 : duration;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = total <= 0 ? 1 : Math.min((now - start) / total, 1);
      // easeOutCubic — fast start, settles onto the final number.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
