"use client";

import { useEffect, useRef } from "react";
import { Input } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Search panel behind the magnifier button.
 *
 * The Figma has no search screen and there is no search backend yet, so this is
 * UI only — submitting closes the panel. Wire it to a real endpoint when one
 * exists.
 */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const t = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div onClick={onClose} className="absolute inset-0 bg-ink/80" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative mx-auto mt-[18vh] w-[min(92vw,720px)]"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <Input
            ref={inputRef}
            label="Search the site"
            name="q"
            type="search"
            placeholder="Type to search..."
            autoComplete="off"
          />
        </form>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 text-sm font-bold text-white/70 transition-colors hover:text-brand"
        >
          Close
        </button>
      </div>
    </div>
  );
}
