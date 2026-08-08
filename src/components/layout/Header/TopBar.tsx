import { Icon } from "@/components/ui";
import { site } from "@/content/site";

/** Figma: 1449x72 bar, fill #090909, 15px/700 white, contents inset 36px. */
export function TopBar() {
  return (
    <div className="bg-primary-deep text-white">
      <div className="flex h-[52px] items-center gap-6 px-gutter sm:gap-12 lg:h-[72px] lg:px-9">
        <a
          href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2.5 text-xs font-bold transition-colors hover:text-gold-bright sm:text-sm"
        >
          <Icon name="figma:topbar-phone" size={17} />
          <span>{site.phone}</span>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-2.5 text-xs font-bold transition-colors hover:text-gold-bright sm:text-sm"
        >
          <Icon name="figma:topbar-mail" size={13} />
          <span>{site.email}</span>
        </a>
      </div>
    </div>
  );
}
