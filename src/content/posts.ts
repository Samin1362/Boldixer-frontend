/**
 * Blog posts.
 *
 * Each card is one text node in the design shaped
 * `category \n\n title-line-1 \n title-line-2` with a character override:
 * category 20px #FFC700, title 25px black. Cards 1 and 2 set that as the
 * override; card 3 inverts it (yellow base, black override) for the same
 * result.
 *
 * ⚠️ The headlines below are real, on-topic subjects for this company, but the
 * articles do not exist — every `href` is still "#". Either write the three
 * posts or delete the Blog section from app/page.tsx before launch. A news
 * section that never opens is worse than no news section.
 *
 * Dates are not shown anywhere at the moment: the footer's "Blog Insights"
 * column was replaced by the contact block, so these only surface if a card
 * starts rendering them.
 */
export const posts = [
  {
    category: "Construction",
    title: "What a realistic build timeline actually looks like",
    date: "March 12, 2026",
    href: "#",
    image: { src: "/images/blog/post-construction.png", width: 275, height: 181 },
    alt: "Workers cutting flooring on a construction site seen from above",
  },
  {
    category: "Real Estate",
    title: "Buying a property to renovate: what to check first",
    date: "January 28, 2026",
    href: "#",
    image: { src: "/images/blog/post-architect.png", width: 274, height: 175 },
    alt: "Worker in a blue hard hat kneeling to fix a concrete step",
  },
  {
    category: "Building",
    title: "Choosing materials that survive an Atlantic winter",
    date: "November 4, 2025",
    href: "#",
    image: { src: "/images/blog/post-building.png", width: 228, height: 178 },
    alt: "Close-up of an angle grinder throwing sparks",
  },
] as const;

export const postsMeta = {
  eyebrow: "News",
  title: "From the Site",
};
