import type { IconName } from "@/lib/icons";

/**
 * Stat counters. Each is one Figma text node with character overrides:
 * the number at 45px white, then "+" and the label at 22px #F3C41A.
 *
 * The house-heart and trophy icons were flattened in the file (no Iconify
 * name survived), so they were exported directly as `figma:*` vectors.
 */
export const stats = [
  { value: 2000, suffix: "+", label: "projects Done", icon: "ph:wall-fill" as IconName },
  { value: 100, suffix: "+", label: "Team Members", icon: "healthicons:construction-worker" as IconName },
  { value: 189, suffix: "+", label: "Cups of Coffee", icon: "figma:stat-home-heart" as IconName },
  { value: 10, suffix: "+", label: "Rewards Achieved", icon: "figma:stat-trophy" as IconName },
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
