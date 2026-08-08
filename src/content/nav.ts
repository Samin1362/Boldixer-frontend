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
  {
    label: "Home Pages",
    href: "/",
    children: [
      { label: "Home 01", href: "/" },
      { label: "Home 02", href: "#" },
      { label: "Home 03", href: "#" },
    ],
  },
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
      { label: "Testimonials", href: "#testimonials" },
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
