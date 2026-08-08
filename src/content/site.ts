/**
 * Global site content.
 *
 * The Figma is full of misspellings ("costruction", "Compnay", "Pepole",
 * "Happines", "Portfollo", "Construoction", "Webstie", "Fiter", "CONSTUTION").
 * They were reproduced verbatim while the build was a fidelity exercise, and
 * corrected once real copy became the goal. Content lives here and in the
 * sibling files — never inline in components.
 *
 * ⚠️ Everything below is still placeholder *data*. Correct spelling is not the
 * same as correct information: the phone, email and copyright are invented.
 */
export const site = {
  name: "Tabela Robusta",
  /** The legal form, as it appears on the logo. */
  tagline: "Unipessoal Lda",
  /** The four pillars from the logo, in the brand's own language. */
  pillars: ["Construção", "Imobiliário", "Confiança", "Qualidade"],
  /** The company's own slogan, taken from the logo. */
  slogan: "Construímos mais que estruturas, construímos futuro.",
  phone: "(+123) 123 4567 890",
  email: "info@domain.com",
  copyright: "Copyright © Tabela Robusta Unipessoal Lda - 2026",
  legal: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  /**
   * NOT rendered — the Figma footer has no social row (the original Bootstrap
   * theme did). Kept here for when they're wanted; see plan.md Phase 12.
   */
  socials: [
    { label: "Facebook", href: "#", icon: "ri:facebook-fill" },
    { label: "LinkedIn", href: "#", icon: "ri:linkedin-fill" },
    { label: "Twitter", href: "#", icon: "ri:twitter-fill" },
  ],
} as const;
