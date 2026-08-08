import { NavDropdown } from "./NavDropdown";
import { navItems } from "@/content/nav";

/**
 * Figma: 5 items separated by 4 vertical 1px hairlines spanning the full 82px
 * bar height. No divider before the first item or after the last.
 */
export function DesktopNav() {
  return (
    <nav aria-label="Main" className="hidden h-full lg:flex">
      <ul className="flex h-full items-stretch [&>li+li]:border-l [&>li+li]:border-ink/15">
        {navItems.map((item) => (
          <NavDropdown key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  );
}
