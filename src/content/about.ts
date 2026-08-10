/**
 * About section copy.
 *
 * The body is one text node in the design with a character-level override on a
 * mid-sentence run — Inter Bold, black at 81% opacity, against #C4C4C4 for the
 * rest. That run is used here for the four pillars off the logo, which is the
 * one part of this paragraph that is the company's own words rather than a
 * description of them. The design also hard-breaks after "congue"; that break
 * is dropped so the paragraph reflows responsively.
 */
export const about = {
  eyebrow: "About Us",
  titleLines: ["Built on Trust,", "Finished With Care"],
  body: {
    before:
      "Tabela Robusta Unipessoal Lda is a Portuguese construction and real estate company built on four commitments — ",
    emphasis: "construction, property, trust and quality.",
    after:
      " We take on interior and exterior work, whole homes and the architectural design behind them, and we stay on the same site from the first drawing to the final handover. The people who quote your project are the people who run it, so nothing is lost between what was promised and what gets built.",
  },
  cta: { label: "Our Services", href: "#services" },
  image: {
    src: "/images/about/team-photo.png",
    width: 285,
    height: 242,
    alt: "Site manager in a hard hat and hi-vis vest holding rolled blueprints",
  },
} as const;
