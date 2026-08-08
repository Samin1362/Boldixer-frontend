import Image from "next/image";
import {
  Button,
  Container,
  Reveal,
  SectionEyebrow,
  SectionHeading,
} from "@/components/ui";
import { about } from "@/content/about";

/**
 * About. Figma Frame 3 (1440 canvas, unscaled — raw values are accurate here):
 *   photo    550x562 flush to the canvas' LEFT edge (x=0), top-aligned
 *   eyebrow  20px/700 #F3C41A at x=646
 *   h2       64px/600, 77px leading, 2 lines
 *   body     22px/600 #C4C4C4 with a bold black-81% run
 *   button   184x82 r=50, 20px/600 white label
 *
 * The photo bleeds to the viewport edge rather than sitting in the container,
 * so it is absolutely placed on large screens.
 */
export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-section lg:py-section-lg"
    >
      {/*
        Source crop is 285x242 stretched to 550x562 in the design — a ~20%
        vertical distortion. Using object-cover instead: this asset is slated
        for replacement and baking in the stretch would outlive the bad source.
      */}
      <Reveal
        variant="mask"
        duration={900}
        className="top-section absolute left-0 hidden w-[38.2%] lg:block lg:h-[562px]"
      >
        <Image
          src={about.image.src}
          alt=""
          aria-hidden
          fill
          sizes="38vw"
          className="object-cover"
        />
      </Reveal>

      <Container>
        <div className="lg:ml-[44%] lg:min-h-[562px]">
          {/* `as` stays a div — SectionEyebrow renders a <p>, which cannot sit inside a span. */}
          <Reveal variant="left">
            <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading
              size="display"
              className="mt-6 text-[40px] leading-tight sm:text-[52px] lg:text-[64px] lg:leading-[77px]"
            >
              {about.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </SectionHeading>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-muted mt-8 max-w-[797px] text-lg font-semibold lg:mt-16">
              {about.body.before}
              <strong className="font-bold text-ink/80">
                {about.body.emphasis}
              </strong>
              {about.body.after}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <Button
              href={about.cta.href}
              variant="gold"
              size="md"
              className="mt-10 lg:mt-14"
            >
              {about.cta.label}
            </Button>
          </Reveal>
        </div>
      </Container>

      {/* Small screens: photo below the copy instead of beside it. */}
      <Container className="mt-12 lg:hidden">
        <Reveal variant="zoom" className="relative aspect-[285/242] w-full">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 0px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
