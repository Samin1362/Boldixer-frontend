"use client";

import { useSyncExternalStore } from "react";

/**
 * One global "the curtain is up" flag.
 *
 * The preloader owns it; anything that should animate *after* the intro rather
 * than behind it reads it. A module-level store rather than context because
 * it flips exactly once per page load and has no provider to hang off.
 */
let ready = false;
const listeners = new Set<() => void>();

export function markAppReady() {
  if (ready) return;
  ready = true;
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

/** False during the intro, true once it has lifted. Always false on the server. */
export function useAppReady() {
  return useSyncExternalStore(
    subscribe,
    () => ready,
    () => false,
  );
}
