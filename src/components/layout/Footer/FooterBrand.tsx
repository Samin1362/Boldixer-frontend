import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/footer";
import { site } from "@/content/site";

/**
 * Figma: 310x112 logo raster at x=49, blurb 382px wide, 18px/500 with 40px
 * leading and 0.1em tracking.
 *
 * The logo sits on a **white plaque** rather than straight on the navy. The
 * mark is navy and gold on white: dropped onto the footer, "TABELA" reads as a
 * hole. A plaque is the honest fix and how the logo is supplied — the
 * alternative would be a single-colour knockout version, which does not exist.
 *
 * The **shorter** crop is used, same as the header. The full lockup carries the
 * pillars and the slogan baked into the pixels, and the blurb underneath is
 * exactly those two lines — rendering both duplicated the copy and hid it from
 * search and screen readers inside an image.
 */
export function FooterBrand() {
  return (
    <div>
      <Link
        href="/"
        aria-label={`${site.name} ${site.tagline} — home`}
        className="inline-block rounded-[14px] bg-white p-5"
      >
        <Image
          src="/images/brand/tabela-robusta-lockup.png"
          alt=""
          width={935}
          height={404}
          sizes="(max-width: 1024px) 240px, 280px"
          className="h-auto w-[220px] lg:w-[260px]"
        />
      </Link>
      <p className="mt-10 max-w-[382px] text-base leading-[2.2] font-medium tracking-[0.1em] text-white">
        {footer.blurb}
      </p>
    </div>
  );
}
