/**
 * About section copy. Spelling verbatim from the Figma — see content/site.ts.
 *
 * The body is one text node with a character-level override on chars 29-54
 * ("felis porttitor volutpat.") — Inter Bold, black at 81% opacity, against
 * #C4C4C4 for the rest. The design also hard-breaks after "congue"; that break
 * is dropped here so the paragraph reflows responsively.
 */
export const about = {
  eyebrow: "About Us",
  titleLines: ["We Help Pepole ", "Elevate Happines"],
  body: {
    before: "Vivamus suscipit tortor eget ",
    emphasis: "felis porttitor volutpat.",
    after:
      " Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis",
  },
  cta: { label: "Read more", href: "#services" },
  image: {
    src: "/images/about/team-photo.png",
    width: 285,
    height: 242,
    alt: "Site manager in a hard hat and hi-vis vest holding rolled blueprints",
  },
} as const;
