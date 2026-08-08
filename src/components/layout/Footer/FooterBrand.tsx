import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/footer";
import { site } from "@/content/site";

/**
 * Figma: 310x112 logo raster at x=49, blurb 382px wide, 18px/500 with 40px
 * leading and 0.1em tracking.
 *
 * The footer lockup is a different mark from the header's — a gold gear with a
 * building inside — so it stays a raster. Its baked background is #313131,
 * effectively identical to the footer's #333131, so it blends seamlessly.
 */
export function FooterBrand() {
  return (
    <div>
      <Link href="/" aria-label={`${site.name} ${site.tagline} — home`}>
        <Image
          src="/images/brand/boldixer-logo.png"
          alt=""
          width={211}
          height={73}
          className="h-auto w-[240px] lg:w-[310px]"
        />
      </Link>
      <p className="mt-10 max-w-[382px] text-base leading-[2.2] font-medium tracking-[0.1em] text-white">
        {footer.blurb}
      </p>
    </div>
  );
}
