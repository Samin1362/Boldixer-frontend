/**
 * Footer content. Frame 9 sits on a 1516 canvas (wider than the 1440 used
 * elsewhere). Every string carries 0.1em letter-spacing in the design.
 */
export const footer = {
  /*
   * The template shipped e-learning copy here ("Earn points for correct
   * answers, race against the clock…"), which was wrong for a construction
   * company in every way. Replaced with the brand's own words — the four
   * pillars and the slogan, both read off the logo — rather than inventing
   * marketing copy. Swap for a real company description when one exists.
   */
  blurb:
    "Construção · Imobiliário · Confiança · Qualidade. Construímos mais que estruturas, construímos futuro.",
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
      title: "Get Updates",
      namePlaceholder: "Enter Full Name",
      emailPlaceholder: "Enter Email",
      cta: "Subscribe Now",
    },
    insights: {
      title: "Blog Insights",
    },
  },
} as const;
