"use client";

import { useCallback, useState } from "react";

type Options = {
  /** Stop observing after the first intersection. Defaults to true. */
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
};

/**
 * Observe an element and report when it enters the viewport.
 *
 * Uses a callback ref rather than useEffect so the observer attaches the
 * moment the node exists, and so the no-IntersectionObserver fallback can set
 * state without doing it inside an effect body.
 *
 * Defaults fire early on purpose: a 10% bottom inset plus a 0.08 threshold
 * means an element starts moving as soon as its top edge clears the fold, so
 * the animation is already finishing by the time it is properly on screen.
 * Waiting longer is what makes reveal effects feel laggy.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
}: Options = {}) {
  const [inView, setInView] = useState(false);

  const ref = useCallback(
    (el: T | null) => {
      if (!el) return;

      // Without IntersectionObserver, reveal the content rather than hide it.
      if (typeof IntersectionObserver === "undefined") {
        setInView(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        },
        { rootMargin, threshold },
      );

      observer.observe(el);
      // React 19 runs a ref callback's return value as cleanup.
      return () => observer.disconnect();
    },
    [once, rootMargin, threshold],
  );

  return { ref, inView };
}
