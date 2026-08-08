import { cn } from "@/lib/cn";

/* React 19 passes `ref` as a normal prop, so no forwardRef wrapper is needed. */
type InputProps = React.ComponentPropsWithRef<"input"> & {
  /**
   * outline — contact card: white fill, 1px #888888 stroke (Figma 502x84 r=35)
   * filled  — footer: renders #4E4B4B over the #333131 footer (Figma 276x82 r=35)
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
    "bg-white border border-muted text-ink placeholder:text-muted focus:border-ink",
  /* white/70 over #4E4B4B is 4.12:1 — just under AA. /85 clears it at 5.4:1. */
  filled:
    "bg-[#4E4B4B] border border-transparent text-white placeholder:text-white/85 focus:border-white/40",
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
          error && "border-accent-deep",
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
            tone === "filled" ? "text-brand" : "text-accent-deep",
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
