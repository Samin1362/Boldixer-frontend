import { Icon, PlusBox } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { Service } from "@/content/services";

/**
 * Figma card: 314x466, 1px hairline, no corner radius, no shadow.
 * Content offsets from the card's top edge: icon 138, text 230, plus box 348.
 *
 * The design's left insets are inconsistent (icon 15/30/40/25, text 19, plus
 * box 40 across the four cards) — normalized to a single padding here.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    // px-5 matches the design's ~19px text inset and leaves the 37px title
    // enough width to stay on one line.
    <article className="group flex min-h-[398px] flex-col border-line hover:border-primary border bg-white px-5 py-7 transition-colors duration-200 lg:min-h-[466px]">
      <div className="flex grow flex-col justify-end pb-6">
        <Icon
          name={service.icon}
          size={62}
          className={cn(
            "transition-transform duration-200 group-hover:-translate-y-1",
            !service.multicolor && "text-gold",
          )}
        />
      </div>

      <p className="text-[19px] font-bold text-ink">{service.kicker}</p>
      {/*
        Measured at 37px, but the longer titles wrap at that size in a 4-up row.
        32px keeps all four on one line — the design only avoided this by
        letting the fourth card overflow the canvas and clip ("Architect Desig").
      */}
      <h3 className="mt-1 text-[30px] leading-tight font-bold text-ink lg:text-[32px]">
        {service.title}
      </h3>

      <PlusBox
        href={service.href}
        label={`Read more about ${service.title}`}
        className="mt-7"
      />
    </article>
  );
}
