import Image from "next/image";
import { Reveal } from "@/components/ui";
import { QuoteForm } from "./QuoteForm";

/**
 * Contact — "Get a Full Quote". Figma Frame 7 (1440x1024 canvas, unscaled):
 *   background  1453x1024 at x=-11 y=0
 *   card        637x740 white r=25 at x=103 y=217 — i.e. 7.2% / 21.2% of the
 *               canvas, 44.2% wide, 72.3% tall
 *   heading     38px/700
 *   inputs      502x84 r=35, 1px #888888, 28px apart
 *   button      216x82 r=35 black, 25px/700
 *
 * ⚠️ The "background" asset is a flattened screenshot of the whole section —
 * it has a white quote card baked into it (canvas x 124..720, y 222..965). The
 * design hides that by drawing a slightly larger card on top. So the card must
 * be sized against the *canvas*, not the content column: at 1220 it is too
 * small and the baked card shows through as a ghost. The section is aspect-
 * locked at lg so the background maps 1:1 and the cover stays aligned.
 * A clean background plate would remove the need for any of this.
 *
 * Card padding is asymmetric in the design — 85px left, 50px right.
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden lg:aspect-[1440/1024]">
      <Image
        src="/images/hero/contact-bg-city.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        /*
          The design stretches this 731x414 source into 1453x1024 — a ~20%
          horizontal squash — and that stretch is what keeps the baked-in card
          (591px wide once stretched) narrower than the 637px card drawn over
          it. object-cover would scale the image to 1808px wide, growing the
          baked card to 742px and leaving it poking out on the left.
          Below lg the section is not aspect-locked, so cover-from-the-right
          crops the baked card out of frame instead.
        */
        className="object-cover object-right lg:object-fill"
      />

      {/*
        One card only. Rendering separate mobile/desktop copies duplicated the
        h2 and — worse — every input id, which is invalid HTML and breaks
        label-for association. It switches from normal flow to absolute at lg
        instead.
      */}
      <Reveal
        variant="left"
        duration={700}
        className="relative mx-5 my-20 rounded-[25px] bg-white p-8 sm:mx-8 sm:p-12 lg:absolute lg:top-[21.2%] lg:left-[7.2%] lg:m-0 lg:h-[74%] lg:w-[44.2%] lg:overflow-y-auto lg:py-[42px] lg:pr-[50px] lg:pl-[85px]"
      >
        <h2 className="text-[30px] font-bold lg:text-[38px]">
          Get a Full Quote
        </h2>
        <div className="mt-8">
          <QuoteForm />
        </div>
      </Reveal>
    </section>
  );
}
