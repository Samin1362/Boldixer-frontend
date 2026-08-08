import { cn } from "@/lib/cn";

type SectionHeadingProps = React.ComponentPropsWithoutRef<"h2"> & {
  as?: "h1" | "h2" | "h3";
  /** display=64 (About) · h2=45 (Blog/Services) · h1=51 (Hero) — see plan.md. */
  size?: "display" | "h1" | "h2" | "h3";
};

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
} as const;

/** Section heading. Size and tag are decoupled so document outline stays sane. */
export function SectionHeading({
  as: Tag = "h2",
  size = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return <Tag className={cn(sizes[size], className)} {...props} />;
}
