import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type PlusBoxProps = {
  href?: string;
  /** Accessible name — the box has no visible text. */
  label: string;
  className?: string;
};

/**
 * The bordered "+" affordance used on service and blog cards.
 * Figma: 75x66, no corner radius, white fill, 1px #C4C4C4 stroke,
 * icon `ant-design:plus-outlined`. Scaled to the 1200 container.
 */
export function PlusBox({ href, label, className }: PlusBoxProps) {
  const classes = cn(
    "inline-flex h-[55px] w-[62px] items-center justify-center border border-line-strong bg-white text-ink",
    "transition-colors duration-200 hover:border-ink hover:bg-brand",
    className,
  );

  const inner = <Icon name="ant-design:plus-outlined" size={20} />;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={label}>
        {inner}
      </Link>
    );
  }

  return (
    <span className={classes} role="img" aria-label={label}>
      {inner}
    </span>
  );
}
