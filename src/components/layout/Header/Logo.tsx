import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * Brand block. Figma: 254x125 panel, flush to the canvas' left edge, extending
 * ~39px below the 82px nav bar.
 *
 * The panel is **white**, which is a reversal of both the design's yellow and
 * the gold of the previous phase. The real logo is navy and gold on white: on
 * gold the "ROBUSTA" half disappears, on navy the "TABELA" half does. It needs
 * a light ground, so the panel becomes the ground and a navy hairline holds the
 * edge — otherwise the block would vanish into the white nav bar and lose the
 * overhang that the design uses to bite into the hero.
 *
 * The lockup crop drops the two smallest lines of the logo (the pillars and the
 * slogan); at this size they would be ~6px and unreadable. The full lockup is
 * used in the footer and the OG image.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "border-primary/15 flex shrink-0 items-center border-r border-b bg-white px-4",
        "h-[70px] w-[190px] xl:h-[125px] xl:w-[254px] xl:px-6",
        className,
      )}
      aria-label={`${site.name} ${site.tagline} — home`}
    >
      <Image
        src="/images/brand/tabela-robusta-lockup.png"
        alt=""
        width={935}
        height={404}
        priority
        sizes="254px"
        className="h-auto w-full"
      />
    </Link>
  );
}
