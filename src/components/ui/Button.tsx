import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Figma geometry (1440 canvas → scaled to the 1200 container):
 *   hero pills       113x48  r=50 (clamps to full)  text 12/600
 *   "Read more"      184x82  r=50 (clamps to full)  text 20/600
 *   "Get a Quote"    216x82  r=35                   text 25/700
 *   "Subscribe Now"  276x85  r=35                   text 18/700
 */
/**
 * `text-ink` on the gold variants is not a style choice — white on gold is
 * 3.09:1 and fails AA. Ink on gold is 5.75:1. Do not override it.
 */
const variants = {
  gold: "bg-gold text-ink hover:bg-gold-bright",
  primary: "bg-primary text-white hover:bg-primary-deep",
  bright: "bg-gold-bright text-ink hover:bg-gold",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
} as const;

const sizes = {
  /* Hero pills are unusually tight: 113px wide around 94px of text. */
  sm: "h-12 px-3 text-xs font-semibold",
  md: "h-[68px] px-9 text-lg font-semibold",
  lg: "h-[68px] px-10 text-xl font-bold",
} as const;

const radii = {
  /** r=50 clamped — hero pills, "Read more". */
  full: "rounded-full",
  /** r=35 at design scale — contact and footer controls. */
  soft: "rounded-[29px]",
} as const;

type BaseProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  radius?: keyof typeof radii;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap leading-none transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

/** Pill button. Renders an <a> when `href` is given, otherwise a <button>. */
export function Button({
  variant = "gold",
  size = "md",
  radius = "full",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    radii[radius],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
