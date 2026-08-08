"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type VideoLightboxProps = {
  open: boolean;
  onClose: () => void;
  url: string;
};

/** Modal video player behind the collage's play control. */
export function VideoLightbox({ open, onClose, url }: VideoLightboxProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-100 transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div onClick={onClose} className="absolute inset-0 bg-ink/85" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Company video"
        className="relative mx-auto mt-[12vh] aspect-video w-[min(92vw,960px)]"
      >
        {open && (
          <iframe
            src={url}
            title="Company video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
            className="h-full w-full"
          />
        )}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-sm font-bold text-white/70 transition-colors hover:text-gold-bright"
        >
          Close
        </button>
      </div>
    </div>
  );
}
