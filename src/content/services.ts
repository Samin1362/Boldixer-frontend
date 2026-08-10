import type { IconName } from "@/lib/icons";

/**
 * Services cards. Frame 4's text was converted to outlines, so copy was read
 * from the render and sizes were derived by measuring glyph ink against the
 * known 64px heading in Frame 3.
 *
 * The design put the meaningless string "Make With Fiter" above all four
 * titles. That slot is an overline, so it now carries a short scope label, and
 * a one-line description was added below each title — the design had no room
 * for one and the cards said nothing about the actual work as a result.
 *
 * The fourth title reads "Architect Desig" in the Figma only because the card
 * row overflows the canvas and clips it — a layout bug, not copy, so the full
 * word is restored.
 */
export type Service = {
  /** Short scope label above the title. */
  kicker: string;
  title: string;
  /** One line on what the service actually covers. */
  blurb: string;
  icon: IconName;
  /**
   * The noto-v1 crane keeps its own multi-tone palette, but that palette was
   * orange and teal — it is recoloured to gold/navy in lib/icons.ts. The
   * other three are single-tone and take `gold` from the component.
   */
  multicolor?: boolean;
  href: string;
};

export const services: Service[] = [
  {
    kicker: "Fit-Out & Finishes",
    title: "Interior Design",
    blurb:
      "Layouts, finishes and joinery that make a space work as well as it looks.",
    icon: "noto-v1:building-construction",
    multicolor: true,
    href: "#contact",
  },
  {
    kicker: "Facades & Outdoors",
    title: "Exterior Design",
    blurb:
      "Facades, roofing and terraces — everything the weather reaches first.",
    icon: "ic:outline-maps-home-work",
    href: "#contact",
  },
  {
    kicker: "Builds & Renovation",
    title: "Home Design",
    blurb:
      "From an empty plot or a tired house to somewhere ready to move into.",
    icon: "ion:hammer-sharp",
    href: "#contact",
  },
  {
    kicker: "Plans & Approvals",
    title: "Architect Design",
    blurb:
      "Drawings, permits and technical detail, settled before the first delivery.",
    icon: "fluent:wrench-screwdriver-24-regular",
    href: "#contact",
  },
];

export const servicesMeta = {
  eyebrow: "Services",
  title: "What We Do",
};
