/**
 * Footer content. Frame 9 sits on a 1516 canvas (wider than the 1440 used
 * elsewhere). Every string carries 0.1em letter-spacing in the design.
 */
export const footer = {
  blurb:
    "Learning with us is fun & addictive. Earn points for correct answers, race against the clock, and level up. Our bite-sized lessons are effective, and we are good",
  columns: {
    pages: {
      title: "Main Pages",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Team", href: "#" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
    updates: {
      title: "Gets Updates",
      namePlaceholder: "Enter Full Name",
      emailPlaceholder: "Enter Email",
      cta: "Subscribe Now",
    },
    insights: {
      title: "Blog Insights",
    },
  },
} as const;
