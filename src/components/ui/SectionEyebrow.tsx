import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  children: React.ReactNode;
  /** Centre the rule + label as a unit (Services). */
  centered?: boolean;
  className?: string;
};

/**
 * Section label.
 *
 * The Figma drew these as "01---About Us" / "04 --- Services", but the numbers
 * were inconsistent (01, 04, 06, 07 — gaps left by sections that never made it
 * into the redesign) and read as noise, so they were dropped. The dash survives
 * as a short brand rule, which keeps the original silhouette without the
 * bookkeeping.
 */
export function SectionEyebrow({
  children,
  centered = false,
  className,
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        centered && "justify-center",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="h-0.5 w-9 shrink-0 bg-current transition-[width] duration-500 ease-[var(--ease-out-soft)]"
      />
      {children}
    </p>
  );
}
