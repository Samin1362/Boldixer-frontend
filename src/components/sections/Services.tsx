import {
  Container,
  Reveal,
  SectionEyebrow,
  SectionHeading,
} from "@/components/ui";
import { ServiceCard } from "./ServiceCard";
import { services, servicesMeta } from "@/content/services";

/**
 * Services — "What We Do". Figma Frame 4 (1440 canvas):
 *   eyebrow  centered, ~19px, lighter weight than the About eyebrow
 *   h2       45px, centered
 *   cards    4 x 314x466, 58px gaps
 *
 * The design's card row spans 1430px starting at x=34, so the fourth card runs
 * past the 1440 canvas and gets clipped ("Architect Desig"). Reproduced as four
 * equal columns inside the content container instead, keeping the design's
 * card-to-gap ratio (~0.185).
 */
export function Services() {
  return (
    <section id="services" className="py-section lg:py-section-lg">
      <Container>
        <div className="text-center">
          <Reveal>
            <SectionEyebrow centered>{servicesMeta.eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal delay={90}>
            <SectionHeading className="mt-6">
              {servicesMeta.title}
            </SectionHeading>
          </Reveal>
        </div>
      </Container>

      {/*
        The design's card row spans 1430 of the 1440 canvas — far wider than the
        1220 content column, so it sits outside the Container. Constrained to
        1220 the 37px titles wrap ("Interior / Design").
      */}
      <div className="px-gutter mx-auto mt-14 grid max-w-[1440px] gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-[50px]">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            variant="up"
            delay={i * 90}
            className="h-full"
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
