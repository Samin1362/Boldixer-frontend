import type { IconName } from "@/lib/icons";

/**
 * Services cards. Frame 4's text was converted to outlines, so copy was read
 * from the render and sizes were derived by measuring glyph ink against the
 * known 64px heading in Frame 3.
 *
 * "Make With Fiter" is the design's spelling and is kept. The fourth title
 * reads "Architect Desig" in the Figma only because the card row overflows the
 * canvas and clips it — that is a layout bug, not copy, so the full word is
 * restored here.
 */
export type Service = {
  kicker: string;
  title: string;
  icon: IconName;
  /** noto-v1 crane ships its own palette; the rest take brand yellow. */
  multicolor?: boolean;
  href: string;
};

export const services: Service[] = [
  {
    kicker: "Make With Fiter",
    title: "Interior Design",
    icon: "noto-v1:building-construction",
    multicolor: true,
    href: "#",
  },
  {
    kicker: "Make With Fiter",
    title: "Exterior Design",
    icon: "ic:outline-maps-home-work",
    href: "#",
  },
  {
    kicker: "Make With Fiter",
    title: "Home Design",
    icon: "ion:hammer-sharp",
    href: "#",
  },
  {
    kicker: "Make With Fiter",
    title: "Architect Design",
    icon: "fluent:wrench-screwdriver-24-regular",
    href: "#",
  },
];

export const servicesMeta = {
  eyebrow: { number: "04", label: "Services" },
  title: "What We Do",
};
