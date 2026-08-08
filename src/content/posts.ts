/**
 * Blog posts. Copy verbatim from the design, including the missing spaces in
 * "Cranes,hammers and nails.this".
 *
 * Each card is one text node shaped `category \n\n title-line-1 \n title-line-2`
 * with a character override: category 20px #FFC700, title 25px black. Cards 1
 * and 2 set that as the override; card 3 inverts it (yellow base, black
 * override) for the same result.
 *
 * Dates are not shown on the cards — they appear in the footer's "Blog
 * Insights" column (Phase 12), so they live here to avoid duplicating copy.
 */
export const posts = [
  {
    category: "Construction",
    title: "As we've all discovered by now, the world can change",
    date: "November 28, 2020",
    href: "#",
    image: { src: "/images/blog/post-construction.png", width: 275, height: 181 },
    alt: "Workers cutting flooring on a construction site seen from above",
  },
  {
    category: "Architect",
    title: "Houses are in the upcoming raft helper alone",
    date: "August 22, 2020",
    href: "#",
    image: { src: "/images/blog/post-architect.png", width: 274, height: 175 },
    alt: "Worker in a blue hard hat kneeling to fix a concrete step",
  },
  {
    category: "Building",
    title: "Cranes,hammers and nails.this is the foundation",
    date: "May 20, 2020",
    href: "#",
    image: { src: "/images/blog/post-building.png", width: 228, height: 178 },
    alt: "Close-up of an angle grinder throwing sparks",
  },
] as const;

export const postsMeta = {
  eyebrow: "News",
  title: "Blog Insight",
};
