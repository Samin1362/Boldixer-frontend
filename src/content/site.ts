/**
 * Global site content.
 *
 * NOTE: Spelling throughout the Boldixer content files is reproduced verbatim
 * from the Figma design ("costruction", "Compnay", "Pepole", "Happines",
 * "Portfollo", "Construoction", "Webstie", "Fiter", "CONSTUTION"). This is
 * deliberate — do not "fix" these in components. Change them here if the
 * copy is ever corrected.
 */
export const site = {
  name: "BOLDIXER",
  tagline: "CONSTUTION CO.",
  phone: "(+123) 123 4567 890",
  email: "info@domain.com",
  copyright: "Copyright © Webstie - 2020",
  legal: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  socials: [
    { label: "Facebook", href: "#", icon: "ri:facebook-fill" },
    { label: "LinkedIn", href: "#", icon: "ri:linkedin-fill" },
    { label: "Twitter", href: "#", icon: "ri:twitter-fill" },
  ],
} as const;
