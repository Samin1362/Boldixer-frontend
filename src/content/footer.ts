/**
 * Footer content. Frame 9 sits on a 1516 canvas (wider than the 1440 used
 * elsewhere). Every string carries 0.1em letter-spacing in the design.
 */
export const footer = {
  /*
   * The template shipped e-learning copy here ("Earn points for correct
   * answers, race against the clock…"), which was wrong for a construction
   * company in every way. Replaced with the brand's own words — the four
   * pillars and the slogan, both read off the logo — in English to match the
   * rest of the site.
   */
  blurb:
    "Construction · Real Estate · Trust · Quality. We build more than structures — we build the future.",
  columns: {
    pages: {
      title: "Main Pages",
      /* "Team" is gone: there is no team page and no team section to anchor to. */
      links: [
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
    /*
     * Replaces the old "Blog Insights" column, which listed three posts that
     * do not exist next to invented dates. Contact details earn the space; a
     * construction client wants a phone number, not a reading list.
     */
    contact: {
      title: "Get in Touch",
      enquiriesLabel: "Enquiries",
      managerLabel: "Manager",
    },
    updates: {
      title: "Get Updates",
      namePlaceholder: "Enter Full Name",
      emailPlaceholder: "Enter Email",
      cta: "Subscribe Now",
    },
  },
} as const;
