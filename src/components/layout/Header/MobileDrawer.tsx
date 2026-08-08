"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Off-canvas panel behind the hamburger. The Figma shows the hamburger at every
 * width alongside the full nav, so this doubles as the mobile menu and as the
 * desktop off-canvas panel.
 */
export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn("fixed inset-0 z-100", !open && "pointer-events-none")}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/60 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className={cn(
          "absolute top-0 right-0 flex h-full w-[min(88vw,380px)] flex-col overflow-y-auto bg-white outline-none",
          "transition-transform duration-300 ease-[var(--ease-out-soft)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between bg-primary px-6 py-5 text-white">
          <span className="leading-none">
            <span className="block text-lg font-bold">{site.name}</span>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.12em]">
              {site.tagline}
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/60 text-xl leading-none transition-colors hover:bg-white hover:text-primary"
          >
            &times;
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 px-6 py-6">
          <ul className="divide-y divide-line">
            {navItems.map((item) => {
              const isOpen = expanded === item.label;
              return (
                <li key={item.label} className="py-1">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        className="flex w-full items-center justify-between py-3 text-left text-base font-bold"
                      >
                        {item.label}
                        <Icon
                          name="figma:nav-chevron"
                          size={7}
                          className={cn(
                            "transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {isOpen && (
                        <ul className="pb-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block py-2 pl-4 text-[15px] text-muted transition-colors hover:text-ink"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-base font-bold"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-line px-6 py-6 text-sm">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-3 font-bold"
          >
            <Icon name="figma:topbar-phone" size={16} />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-bold">
            <Icon name="figma:topbar-mail" size={13} />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
