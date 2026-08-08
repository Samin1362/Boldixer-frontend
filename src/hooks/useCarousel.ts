"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Scroll-snap carousel.
 *
 * Built on native overflow scrolling rather than a transform track, so touch
 * drag, momentum, trackpad and keyboard scrolling all come from the platform.
 * The hook only tracks which slide is nearest and exposes `goTo`.
 */
export function useCarousel(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        // Nearest slide to the track's left scroll edge wins.
        let nearest = 0;
        let best = Infinity;
        for (let i = 0; i < track.children.length; i++) {
          const el = track.children[i] as HTMLElement;
          const delta = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (delta < best) {
            best = delta;
            nearest = i;
          }
        }
        setActiveIndex(nearest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  const next = useCallback(
    () => goTo(Math.min(activeIndex + 1, count - 1)),
    [goTo, activeIndex, count],
  );
  const prev = useCallback(
    () => goTo(Math.max(activeIndex - 1, 0)),
    [goTo, activeIndex],
  );

  return { trackRef, activeIndex, goTo, next, prev };
}
