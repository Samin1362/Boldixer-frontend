/**
 * Global site content.
 *
 * The Figma was full of misspellings ("costruction", "Compnay", "Pepole",
 * "Happines", "Portfollo", "Construoction", "Webstie", "Fiter", "CONSTUTION").
 * They were reproduced verbatim while the build was a fidelity exercise, and
 * corrected once real copy became the goal. Content lives here and in the
 * sibling files — never inline in components.
 *
 * Contact details are the client's real ones as of this revision. The address
 * and the Terms/Privacy URLs are the only fields still unfilled — see the
 * notes on each.
 */
export const site = {
  name: "Tabela Robusta",
  /** The legal form, as it appears on the logo. */
  tagline: "Unipessoal Lda",
  /** The four pillars from the logo, in the brand's own language. */
  pillars: ["Construção", "Imobiliário", "Confiança", "Qualidade"],
  /** The company's own slogan, taken from the logo. */
  slogan: "Construímos mais que estruturas, construímos futuro.",

  phone: "+351 926 088 779",
  /** Public enquiries — topbar, mobile drawer, footer, quote section. */
  email: "contact@tabelarobusta.com",
  /** The manager's direct line. Footer only; deliberately not in the topbar. */
  emailManager: "gerente@tabelarobusta.com",

  /**
   * ⚠️ Not supplied yet. The footer contact block and the LocalBusiness JSON-LD
   * both skip the address while this is null rather than printing a blank line.
   */
  address: null as {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  } | null,

  copyright: "Copyright © Tabela Robusta Unipessoal Lda - 2026",
  /**
   * ⚠️ Both still point at "#" — no policy pages exist. Either supply the URLs
   * or drop the two entries; a legal link that goes nowhere is worse than none.
   */
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

/** `tel:` needs digits and a leading +, nothing else. */
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
