/**
 * Portfolio slides. Spelling corrected from the design, which carried the same
 * "Construoction" / "Core Footprint building" placeholder on every card — the
 * copy itself is still placeholder and needs real project names.
 *
 * The Figma shows four card positions, but the outer two are clipped peeks of
 * the adjacent slides: `work-4.png` exports at just 74x320, a sliver rather
 * than a photograph. Three real slides, matching the design's three pagination
 * dashes. A real carousel produces the peek from the track itself.
 */
export const portfolio = {
  eyebrow: "Portfolio",
  title: "Our Works",
  items: [
    {
      category: "Construction",
      title: "Core Footprint building",
      href: "#",
      image: { src: "/images/portfolio/work-1.png", width: 273, height: 325 },
      alt: "Engineer in an orange shirt working at a control panel",
    },
    {
      category: "Construction",
      title: "Core Footprint building",
      href: "#",
      image: { src: "/images/portfolio/work-3.png", width: 267, height: 322 },
      alt: "Technician in orange overalls beside a service van",
    },
    {
      category: "Construction",
      title: "Core Footprint building",
      href: "#",
      image: { src: "/images/portfolio/work-2.png", width: 221, height: 322 },
      alt: "Two workers in orange overalls with cleaning equipment outside a house",
    },
  ],
} as const;
