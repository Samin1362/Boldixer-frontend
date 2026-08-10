/**
 * Hero copy.
 *
 * The design's h1 is one text node with a character-level size override:
 * line 1 at 25px and lines 2-3 at 60px raw (26px / 63px effective).
 *
 * The headline is the company's own slogan in English — the logo carries
 * "Construímos mais que estruturas, construímos futuro" and the site is
 * English, so it is translated rather than invented.
 */
export const hero = {
  kicker: "Construction & Real Estate in Portugal",
  titleLines: ["We Build More", "Than Structures"],
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
