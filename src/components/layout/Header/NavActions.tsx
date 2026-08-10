"use client";

import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Figma: three 69x59 ellipses, white fill, 1px #000000 stroke. */
const circle =
  "inline-flex h-[46px] w-[54px] items-center justify-center rounded-full border border-ink/20 " +
  "transition-colors duration-200 hover:border-primary hover:bg-gold xl:h-[59px] xl:w-[69px]";

type NavActionsProps = {
  onSearchToggle: () => void;
  onMenuToggle: () => void;
  searchOpen: boolean;
  menuOpen: boolean;
  className?: string;
};

export function NavActions({
  onSearchToggle,
  onMenuToggle,
  searchOpen,
  menuOpen,
  className,
}: NavActionsProps) {
  return (
    <div className={cn("flex items-center gap-2 xl:gap-3", className)}>
      <button
        type="button"
        className={circle}
        aria-label="Search"
        aria-expanded={searchOpen}
        onClick={onSearchToggle}
      >
        <Icon name="figma:nav-search" size={22} />
      </button>

      {/*
        The design's third circle was a shopping cart linking to "#". There is
        no shop — the Shop nav group went with it — so a cart icon here is a
        promise the site cannot keep. Removed; two circles, not three.
      */}

      <button
        type="button"
        className={circle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
      >
        {/* Figma draws two 27px rules 22px apart, not the usual three. */}
        <span className="flex w-[27px] flex-col gap-[7px]">
          <span
            className={cn(
              "block h-[2.5px] w-full bg-ink transition-transform duration-200",
              menuOpen && "translate-y-[4.75px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-[2.5px] w-full bg-ink transition-transform duration-200",
              menuOpen && "-translate-y-[4.75px] -rotate-45",
            )}
          />
        </span>
      </button>
    </div>
  );
}
