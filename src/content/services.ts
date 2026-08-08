import type { IconName } from "@/lib/icons";

/**
 * Services cards. Frame 4's text was converted to outlines, so copy was read
 * from the render and sizes were derived by measuring glyph ink against the
 * known 64px heading in Frame 3.
 *
 * The design's "Make With Fiter" is corrected to "Filter" — the nearest real
 * word, though the phrase is meaningless either way and wants replacing with a
 * real one-line description per service. The fourth title
 * reads "Architect Desig" in the Figma only because the card row overflows the
 * canvas and clips it — that is a layout bug, not copy, so the full word is
 * restored here.
 */
export type Service = {
  kicker: string;
  title: string;
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
    kicker: "Make With Filter",
    title: "Interior Design",
    icon: "noto-v1:building-construction",
    multicolor: true,
    href: "#",
  },
  {
    kicker: "Make With Filter",
    title: "Exterior Design",
    icon: "ic:outline-maps-home-work",
    href: "#",
  },
  {
    kicker: "Make With Filter",
    title: "Home Design",
    icon: "ion:hammer-sharp",
    href: "#",
  },
  {
    kicker: "Make With Filter",
    title: "Architect Design",
    icon: "fluent:wrench-screwdriver-24-regular",
    href: "#",
  },
];

export const servicesMeta = {
  eyebrow: "Services",
  title: "What We Do",
};
