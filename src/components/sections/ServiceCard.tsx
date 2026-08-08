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
    <article className="group flex min-h-[398px] flex-col border border-line bg-white p-7 transition-colors duration-200 hover:border-ink lg:min-h-[466px]">
      <div className="flex grow flex-col justify-end pb-6">
        <Icon
          name={service.icon}
          size={62}
          className={cn(
            "transition-transform duration-200 group-hover:-translate-y-1",
            !service.multicolor && "text-brand",
          )}
        />
      </div>

      <p className="text-[19px] font-bold text-ink">{service.kicker}</p>
      <h3 className="mt-1 text-[30px] leading-tight font-bold text-ink lg:text-[37px]">
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
