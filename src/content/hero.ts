/**
 * Hero copy. Spelling corrected from the Figma — see content/site.ts.
 *
 * The design's h1 is one text node with a character-level size override:
 * line 1 at 25px and lines 2-3 at 60px raw (26px / 63px effective).
 */
export const hero = {
  kicker: "We Provide Main Source In",
  titleLines: ["Tabela Robusta", "Construction"],
  actions: [
    { label: "About Company", href: "#about", variant: "gold" },
    { label: "Get a Quote", href: "#contact", variant: "primary" },
  ],
  image: {
    src: "/images/hero/worker-cutout.png",
    width: 376,
    height: 455,
    alt: "Construction contractor in an orange hard hat and hi-vis vest",
  },
} as const;
