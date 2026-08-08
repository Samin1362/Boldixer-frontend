"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * SSR-safe media query subscription. Returns `false` on the server so markup
 * matches the mobile-first default and hydration stays consistent.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
