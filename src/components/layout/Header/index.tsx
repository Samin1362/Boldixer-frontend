"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { NavActions } from "./NavActions";
import { MobileDrawer } from "./MobileDrawer";
import { SearchOverlay } from "./SearchOverlay";

/**
 * Site header.
 *
 * Figma geometry (1440 canvas):
 *   topbar    full width, h=72, #090909
 *   brand     254x125 #F3C41A, flush left, overhangs the nav row by ~39px
 *   nav bar   h=82 white, 5 items with 4 hairline dividers, 3 circles right
 *
 * The brand block's overhang is why the nav row is `relative` with the logo
 * absolutely placed on large screens — it must paint over the hero below.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const stuck = useStickyHeader(72);

  return (
    <>
      <header className="relative z-50">
        <TopBar />

        <div
          className={cn(
            "relative bg-white",
            stuck &&
              "lg:fixed lg:top-0 lg:right-0 lg:left-0 lg:z-50 lg:shadow-[0_2px_20px_rgba(0,0,0,0.08)]",
          )}
        >
          <div className="flex h-[70px] items-center lg:h-[82px]">
            <Logo
              className={cn(
                "lg:absolute lg:top-0 lg:left-0 lg:z-10",
                // The 125px block would overhang a pinned bar, so clip it there.
                stuck && "lg:h-[82px]",
              )}
            />

            <div className="ml-auto flex h-full items-center lg:ml-[254px] lg:w-[calc(100%-254px)] lg:justify-between">
              <DesktopNav />
              <NavActions
                className="px-gutter lg:pr-6"
                searchOpen={searchOpen}
                menuOpen={menuOpen}
                onSearchToggle={() => setSearchOpen((v) => !v)}
                onMenuToggle={() => setMenuOpen((v) => !v)}
              />
            </div>
          </div>
        </div>

        {/* Reserve the pinned bar's height so content doesn't jump. */}
        {stuck && <div aria-hidden className="hidden h-[82px] lg:block" />}
      </header>

      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
