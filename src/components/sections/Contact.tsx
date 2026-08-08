import Image from "next/image";
import { Container, Reveal } from "@/components/ui";
import { QuoteForm } from "./QuoteForm";

/**
 * Contact — "Get a Full Quote". Figma Frame 7 (1440x1024 canvas, unscaled):
 *   background  1453x1024 full-bleed greyscale city with the worker composited in
 *   card        637x740 white, r=25, at x=103 y=217 (7.2% from the left)
 *   heading     38px/700
 *   inputs      502x84 r=35, 1px #888888, 28px apart
 *   button      216x82 r=35 black, 25px/700
 *
 * Card padding is asymmetric in the design — 85px left, 50px right — which is
 * reproduced at lg and evened out on smaller screens.
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <Image
        src="/images/hero/contact-bg-city.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />

      <Container className="relative py-section lg:py-section-lg">
        <Reveal className="w-full rounded-[25px] bg-white p-8 sm:p-12 lg:w-[44.2%] lg:min-h-[740px] lg:py-[42px] lg:pr-[50px] lg:pl-[85px]">
          <h2 className="text-[30px] font-bold lg:text-[38px]">
            Get a Full Quote
          </h2>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
