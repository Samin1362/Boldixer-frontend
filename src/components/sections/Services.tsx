import { Container, SectionHeading } from "@/components/ui";
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
          {/* Lighter weight than `eyebrow` — the outlines here are noticeably thinner. */}
          <p className="text-xl text-brand">
            {servicesMeta.eyebrow.number}
            <span aria-hidden="true"> --- </span>
            <span className="sr-only"> — </span>
            {servicesMeta.eyebrow.label}
          </p>
          <SectionHeading className="mt-6">{servicesMeta.title}</SectionHeading>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-[50px]">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
