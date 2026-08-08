import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Render without the max-width cap, for full-bleed section backgrounds. */
  bleed?: boolean;
};

/** The 1200px content column from the Figma 1440 canvas. */
export function Container({
  className,
  bleed = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(bleed ? "w-full px-gutter" : "container-boldixer", className)}
      {...props}
    />
  );
}
