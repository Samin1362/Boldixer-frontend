"use client";

import {
  CarouselDots,
  Container,
  Reveal,
  SectionEyebrow,
  SectionHeading,
} from "@/components/ui";
import { WorkCard } from "./WorkCard";
import { useCarousel } from "@/hooks/useCarousel";
import { portfolio } from "@/content/portfolio";

/**
 * Portfolio — "Our Works". Figma Frame 6 (1457x1024 canvas):
 *   yellow panel  822x1024 #FFC700 on the left = 56.4% of canvas
 *   backdrop      #C4C4C4
 *   eyebrow/h2    white, 22px/700 and 50px/700, at the 114px content inset
 *   cards         385x560 with a 43px gap, overflowing both canvas edges
 *   dashes        40 / 60 / 40 px white, the long one active
 *
 * Slides sit in a full-bleed scroll-snap track so they bleed past the right
 * edge and previous slides peek in from the left once scrolled.
 */
export function Portfolio() {
  const { trackRef, activeIndex, goTo } = useCarousel(portfolio.items.length);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-line-strong">
      {/* Brand panel — full width on small screens, 56.4% from lg. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-full bg-brand-bright lg:w-[56.4%]"
      />

      <div className="relative py-section lg:py-section-lg">
        <Container>
          <Reveal>
            <SectionEyebrow
              number={portfolio.eyebrow.number}
              className="text-white"
            >
              {portfolio.eyebrow.label}
            </SectionEyebrow>
            <SectionHeading className="mt-4 text-white lg:text-[50px]">
              {portfolio.title}
            </SectionHeading>
          </Reveal>
        </Container>

        <div
          ref={trackRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Our works"
          tabIndex={0}
          className="carousel-inset scrollbar-none mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto lg:mt-20 lg:gap-[43px]"
        >
          {portfolio.items.map((item, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${portfolio.items.length}`}
              className="w-[280px] shrink-0 snap-start sm:w-[340px] lg:w-[385px]"
            >
              <WorkCard {...item} />
            </div>
          ))}
          {/* Trailing spacer so the last slide can scroll clear of the edge. */}
          <div aria-hidden className="w-6 shrink-0 lg:w-[43px]" />
        </div>

        <Container className="mt-10 lg:mt-16">
          <CarouselDots
            count={portfolio.items.length}
            activeIndex={activeIndex}
            onSelect={goTo}
            tone="light"
            label="Choose a project"
          />
        </Container>
      </div>
    </section>
  );
}
