import type { IconName } from "@/lib/icons";

/**
 * Stat counters. Each is one Figma text node with character overrides:
 * the number at 45px white, then "+" and the label at 22px #F3C41A.
 *
 * ⚠️⚠️ THE FOUR NUMBERS BELOW ARE STILL PLACEHOLDERS. ⚠️⚠️
 * The template shipped 2000 / 100 / 189 / 10 with "Cups of Coffee" as the
 * third label — a joke, and 2,000 projects is not a claim a unipessoal company
 * can make. The labels are now real categories and the values were pulled down
 * to something a firm this size could plausibly stand behind, but they are
 * invented and must not go live unchanged. Replace all four with real figures
 * from the client, or delete this section.
 *
 * The house-heart and trophy icons were flattened in the file (no Iconify
 * name survived), so they were exported directly as `figma:*` vectors.
 */
export const stats = [
  { value: 150, suffix: "+", label: "Projects Completed", icon: "ph:wall-fill" as IconName },
  { value: 25, suffix: "+", label: "People on Site", icon: "healthicons:construction-worker" as IconName },
  { value: 12, suffix: "+", label: "Years Building", icon: "figma:stat-home-heart" as IconName },
  { value: 40, suffix: "+", label: "Clients Served", icon: "figma:stat-trophy" as IconName },
];

export const collage = {
  /** Back layer — 1474x727 at x=2 y=297 on the 1440x1024 canvas. */
  wide: {
    src: "/images/stats/collage-wide.png",
    alt: "Site team reviewing plans on a construction site",
  },
  /**
   * Front layer — 1174x588 at x=285 y=62. The glowing play button is baked
   * into this image, so the real control is layered over it at ~53%/50%.
   */
  capture: {
    src: "/images/stats/collage-capture.png",
    alt: "Two engineers marking up a blueprint in front of a building under construction",
  },
  /**
   * Embed URL for the play control. The glowing play glyph is part of the
   * photo, so with no URL set the button is not rendered at all rather than
   * shipping a control that looks live but does nothing. Set this and the
   * lightbox activates.
   */
  videoUrl: null as string | null,
} as const;
