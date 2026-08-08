import Link from "next/link";
import { Container } from "@/components/ui";
import { site } from "@/content/site";

/**
 * Figma: a 1516x129 band, fill #C4C4C4 at low opacity — it renders #494646 over
 * the #333131 footer (sampled from the export). Copyright and the two legal
 * links live in one text node separated by runs of spaces; laid out here as a
 * proper split row.
 *
 * The original theme's "DownloadNewThemes.com" watermark is deliberately
 * dropped.
 */
export function FooterBottomBar() {
  return (
    <div className="bg-primary-deep">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-lg font-medium tracking-[0.1em] text-white">
          {site.copyright}
        </p>
        <ul className="flex items-center gap-8">
          {site.legal.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-lg font-medium tracking-[0.1em] text-white transition-colors hover:text-gold-bright"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
