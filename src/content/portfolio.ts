/**
 * Portfolio slides.
 *
 * The design carried the same "Construoction / Core Footprint building"
 * placeholder on all three cards. The captions below name the *type* of work
 * instead — that is true of what the company does, where a specific project
 * name and date would not be.
 *
 * ⚠️ Real project names, locations and photography still need to come from the
 * client; the images here are template stock and are the weakest part of the
 * page. See plan.md Phase 31.
 *
 * The Figma shows four card positions, but the outer two are clipped peeks of
 * the adjacent slides: `work-4.png` exports at just 74x320, a sliver rather
 * than a photograph. Three real slides, matching the design's three pagination
 * dashes. A real carousel produces the peek from the track itself.
 */
export const portfolio = {
  eyebrow: "Portfolio",
  title: "Our Work",
  items: [
    {
      category: "Interior",
      title: "Commercial Fit-Out",
      href: "#contact",
      image: { src: "/images/portfolio/work-1.png", width: 273, height: 325 },
      alt: "Engineer in an orange shirt working at a control panel",
    },
    {
      category: "Maintenance",
      title: "Callout & Repairs",
      href: "#contact",
      image: { src: "/images/portfolio/work-3.png", width: 267, height: 322 },
      alt: "Technician in orange overalls beside a service van",
    },
    {
      category: "Exterior",
      title: "Residential Renovation",
      href: "#contact",
      image: { src: "/images/portfolio/work-2.png", width: 221, height: 322 },
      alt: "Two workers in orange overalls with cleaning equipment outside a house",
    },
  ],
} as const;
