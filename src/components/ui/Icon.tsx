import { icons, type IconName } from "@/lib/icons";
import { cn } from "@/lib/cn";

type IconProps = {
  /** Iconify identifier from the Figma layer names, e.g. "ion:hammer-sharp". */
  name: IconName;
  /** Rendered height in px. Width follows the icon's aspect ratio. */
  size?: number;
  className?: string;
  /** Decorative by default; pass a label to expose it to screen readers. */
  label?: string;
};

/**
 * Renders a bundled icon as inline SVG.
 *
 * Server-rendered with no network request — @iconify/react only paints after
 * hydration, which caused a flash of empty space. `body` is static markup
 * generated from committed SVG files, never user input.
 */
export function Icon({ name, size = 24, className, label }: IconProps) {
  const icon = icons[name];
  const width = Math.round((size * icon.width) / icon.height);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      width={width}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
