import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge cannot tell that `text-display` / `text-h1` / `text-h2` /
 * `text-h3` are font sizes rather than colors, so it treated them as
 * conflicting with `text-white` and silently dropped the size — which is how
 * the Portfolio heading lost its 45px and rendered at body size. Registering
 * the custom keys fixes it for every consumer of `cn`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3"] }],
    },
  },
});

/** Merge conditional class names, resolving conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
