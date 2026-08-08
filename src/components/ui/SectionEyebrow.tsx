import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  /** Zero-padded section number, e.g. "01". */
  number: string;
  children: React.ReactNode;
  /** The design uses both "01---About Us" and "04 --- Services". */
  spaced?: boolean;
  className?: string;
};

/**
 * Numbered section label. The design's dash treatment is inconsistent between
 * sections — `spaced` reproduces the "04 --- Services" form, the default
 * reproduces "01---About Us".
 */
export function SectionEyebrow({
  number,
  children,
  spaced = false,
  className,
}: SectionEyebrowProps) {
  const dash = spaced ? " --- " : "---";
  return (
    <p className={cn("eyebrow", className)}>
      {number}
      <span aria-hidden="true">{dash}</span>
      <span className="sr-only"> — </span>
      {children}
    </p>
  );
}
