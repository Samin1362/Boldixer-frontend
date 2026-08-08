import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Background treatment. */
  tone?: "white" | "surface" | "brand" | "footer";
  /** Skip the inner Container when the section manages its own layout. */
  bare?: boolean;
  containerClassName?: string;
};

const tones = {
  white: "bg-white text-ink",
  surface: "bg-surface text-ink",
  brand: "bg-brand text-ink",
  footer: "bg-footer text-white",
} as const;

/** Section wrapper carrying the vertical rhythm and background tone. */
export function Section({
  className,
  containerClassName,
  tone = "white",
  bare = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-section lg:py-section-lg", tones[tone], className)}
      {...props}
    >
      {bare ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
