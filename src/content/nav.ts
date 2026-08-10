/**
 * Primary navigation.
 *
 * The Figma showed four dropdown triggers — Home 01/02/03, Blog Grid/Details,
 * a Team page and a whole Shop with cart and checkout. None of that exists:
 * this is a one-page site with no store. Every one of those was a link to "#".
 *
 * The row is now five flat anchors, all of which go somewhere real. Five is
 * also what the header's divider rhythm needs, so the layout is unchanged.
 * `children` is kept on the type — the dropdown still works — for when there
 * are real inner pages to hang off it.
 */
export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];
