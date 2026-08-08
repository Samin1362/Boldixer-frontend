"use client";

import { useEffect, useState } from "react";

/**
 * True once the page has scrolled past `threshold`.
 *
 * The Figma has no scrolled state — this only pins the nav row, it does not
 * change the header's appearance.
 */
export function useStickyHeader(threshold = 72): boolean {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setStuck(window.scrollY > threshold);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return stuck;
}
