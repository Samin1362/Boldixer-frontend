"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";
import { markAppReady } from "@/hooks/useAppReady";
import { site } from "@/content/site";

/** Below this the intro reads as a flicker rather than a beat. */
const MIN_VISIBLE_MS = 450;
/** Fade-out length — must match the `duration-500` below. */
const FADE_MS = 500;
/**
 * Hard ceiling. `load` waits on every blocking resource, so on a slow
 * connection it can be seconds away — far longer than anyone should stare at a
 * curtain. Past this the intro leaves regardless.
 */
const MAX_VISIBLE_MS = 2500;

/**
 * Intro curtain.
 *
 * Server-rendered so it is painted with the first frame — mounting it on the
 * client instead would flash the un-hydrated page first, which is the exact
 * thing a preloader exists to prevent. It waits for `load` (not just
 * hydration) so hero imagery is decoded before the reveal, then unmounts
 * itself completely; nothing is left in the DOM afterwards.
 *
 * With scripting disabled it is hidden in CSS (`[data-preloader]` in
 * globals.css) because nothing would ever dismiss it.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const start = performance.now();
    let done = false;
    let fadeTimer: ReturnType<typeof setTimeout>;
    let goneTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      if (done) return;
      done = true;
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      // setState only ever runs from a timer, never synchronously in the effect.
      fadeTimer = setTimeout(() => {
        setPhase("out");
        markAppReady();
        goneTimer = setTimeout(() => setPhase("gone"), FADE_MS);
      }, remaining);
    };

    const ceiling = setTimeout(finish, MAX_VISIBLE_MS);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(ceiling);
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      data-preloader
      aria-hidden="true"
      className={cn(
        "bg-ink-soft fixed inset-0 z-300 grid place-items-center",
        "transition-opacity duration-500 ease-[var(--ease-out-soft)]",
        phase === "out" && "pointer-events-none opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-7">
        <span className="bg-brand grid h-20 w-20 place-items-center">
          <Icon
            name="figma:brand-gear"
            size={38}
            className="animate-spin-slow text-ink"
          />
        </span>

        <span className="text-[20px] font-bold tracking-[0.3em] text-white uppercase">
          {site.name}
        </span>

        {/* Indeterminate sweep — there is no real progress figure to report. */}
        <span className="block h-0.5 w-40 overflow-hidden bg-white/15">
          <span className="animate-sweep bg-brand block h-full w-1/4" />
        </span>
      </div>
    </div>
  );
}
