import Link from "next/link";
import { footer } from "@/content/footer";

/**
 * Figma: heading 30px/700, links 22px/500 with 60px leading and 0.1em
 * tracking (both come from character overrides on a single text node).
 */
export function FooterNav() {
  const { title, links } = footer.columns.pages;

  return (
    <nav aria-label="Footer">
      <h2 className="text-h3 tracking-[0.1em] text-white">{title}</h2>
      <ul className="mt-8 space-y-4 lg:mt-12">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-lg font-medium tracking-[0.1em] text-white transition-colors hover:text-gold-bright"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
