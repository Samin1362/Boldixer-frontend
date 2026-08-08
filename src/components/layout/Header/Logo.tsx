import Link from "next/link";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * Brand block. Figma: 254x125 #F3C41A panel, flush to the canvas' left edge,
 * extending ~39px below the 82px nav bar. Gear vector is 56x50.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex shrink-0 items-center gap-3 bg-brand px-5 text-white",
        "h-[70px] w-[190px] xl:h-[125px] xl:w-[254px] xl:px-6",
        className,
      )}
      aria-label={`${site.name} ${site.tagline} — home`}
    >
      <Icon name="figma:brand-gear" size={38} className="xl:h-[50px] xl:w-[56px]" />
      <span className="leading-none">
        <span className="block text-lg font-bold tracking-tight xl:text-[26px]">
          {site.name}
        </span>
        <span className="mt-1 block text-[8px] font-bold tracking-[0.12em] xl:text-[10px]">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
