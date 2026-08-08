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
              "xl:animate-header-drop xl:fixed xl:top-0 xl:right-0 xl:left-0 xl:z-50 xl:shadow-[0_2px_20px_rgba(0,0,0,0.08)]",
          )}
        >
          <div className="flex h-[70px] items-center xl:h-[82px]">
            <Logo
              className={cn(
                "xl:absolute xl:top-0 xl:left-0 xl:z-10",
                // The 125px block would overhang a pinned bar, so clip it there.
                stuck && "xl:h-[82px]",
              )}
            />

            <div className="ml-auto flex h-full items-center xl:ml-[254px] xl:w-[calc(100%-254px)] xl:justify-between">
              <DesktopNav />
              <NavActions
                className="px-gutter xl:pr-6"
                searchOpen={searchOpen}
                menuOpen={menuOpen}
                onSearchToggle={() => setSearchOpen((v) => !v)}
                onMenuToggle={() => setMenuOpen((v) => !v)}
              />
            </div>
          </div>
        </div>

        {/* Reserve the pinned bar's height so content doesn't jump. */}
        {stuck && <div aria-hidden className="hidden h-[82px] xl:block" />}
      </header>

      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
