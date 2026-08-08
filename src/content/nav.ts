/**
 * Primary navigation.
 *
 * The Figma shows four dropdown triggers but no open state, so the submenu
 * contents below are inferred: real in-page anchors where the landing page has
 * a matching section, and template-standard placeholders ("#") elsewhere.
 * Swap these for real routes as pages are added.
 */
export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  /*
   * The design's "Home 01 / 02 / 03" submenu was template scaffolding for
   * alternate homepage layouts that do not exist here, so Home is a plain link.
   * The row still holds five items, which is what the divider rhythm needs.
   */
  { label: "Home", href: "/" },
  {
    label: "Blog",
    href: "#blog",
    children: [
      { label: "Blog Insight", href: "#blog" },
      { label: "Blog Grid", href: "#" },
      { label: "Blog Details", href: "#" },
    ],
  },
  {
    label: "Pages",
    href: "#about",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Team", href: "#" },
    ],
  },
  {
    label: "Shop",
    href: "#",
    children: [
      { label: "Shop", href: "#" },
      { label: "Product Details", href: "#" },
      { label: "Cart", href: "#" },
      { label: "Checkout", href: "#" },
    ],
  },
  { label: "Contact Us", href: "#contact" },
];
