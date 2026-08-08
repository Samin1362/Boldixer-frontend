import { cn } from "@/lib/cn";

/* React 19 passes `ref` as a normal prop, so no forwardRef wrapper is needed. */
type InputProps = React.ComponentPropsWithRef<"input"> & {
  /**
   * outline — contact card: white fill, 1px stroke (Figma 502x84 r=35)
   * filled  — footer: `primary-soft` over the navy footer (Figma 276x82 r=35)
   */
  tone?: "outline" | "filled";
  /** Visually hidden label. Every field needs one. */
  label: string;
  /** Validation message. Sets aria-invalid and is announced on change. */
  error?: string;
  wrapperClassName?: string;
};

const tones = {
  outline:
    "bg-white border border-muted text-ink placeholder:text-muted focus:border-primary",
  /* `primary-soft` lifts the field off the footer (2.04:1 edge); the white/85
     placeholder on it is 6.09:1. */
  filled:
    "bg-primary-soft border border-transparent text-white placeholder:text-white/85 focus:border-gold-bright",
} as const;

/** Pill-rounded form field matching the design's r=35 controls. */
export function Input({
  tone = "outline",
  label,
  error,
  id,
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const errorId = `${inputId}-error`;

  return (
    <div className={cn("w-full", wrapperClassName)}>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "h-[70px] w-full rounded-[29px] px-8 text-lg outline-none transition-colors duration-200",
          tones[tone],
          // Tone-aware: `danger` on the navy field is 1.41:1, effectively no
          // indicator. `danger-soft` clears the 3:1 needed for a non-text cue.
          error && (tone === "filled" ? "border-danger-soft" : "border-danger"),
          className,
        )}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className={cn(
            "mt-2 px-8 text-sm font-semibold",
            tone === "filled" ? "text-danger-soft" : "text-danger",
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
