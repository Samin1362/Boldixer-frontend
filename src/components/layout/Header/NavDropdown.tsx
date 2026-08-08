"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/content/nav";

/**
 * Nav item with an optional submenu.
 *
 * Opens on hover (pointer) and on Enter/Space/ArrowDown (keyboard), closes on
 * Escape or focus leaving the item. The Figma shows no open state, so the
 * panel styling follows the design's card language: white, square corners,
 * 1px hairline.
 */
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  if (!item.children) {
    return (
      <li className="flex h-full">
        <Link
          href={item.href}
          className="flex h-full items-center px-6 text-[15px] font-bold transition-colors hover:text-gold-deep xl:px-8"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={wrapperRef}
      className="relative flex h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="flex h-full items-center gap-2.5 px-6 text-[15px] font-bold transition-colors hover:text-gold-deep xl:px-8"
      >
        {item.label}
        <Icon
          name="figma:nav-chevron"
          size={6}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <ul
        id={menuId}
        className={cn(
          "absolute top-full left-0 z-50 min-w-[220px] border border-line bg-white py-2 shadow-lg",
          "origin-top transition-[opacity,transform] duration-200",
          open
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-95 opacity-0",
        )}
      >
        {item.children.map((child) => (
          <li key={child.label}>
            <Link
              href={child.href}
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-gold"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
