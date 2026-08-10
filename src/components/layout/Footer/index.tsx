import { Container, Reveal } from "@/components/ui";
import { FooterBrand } from "./FooterBrand";
import { FooterNav } from "./FooterNav";
import { NewsletterForm } from "./NewsletterForm";
import { FooterContact } from "./FooterContact";
import { FooterBottomBar } from "./FooterBottomBar";

/**
 * Site footer. Figma Frame 9 — note this frame uses a **1516** canvas, wider
 * than the 1440 used everywhere else.
 *
 * Column x-positions 49 / 497 / 758 / 1064 with widths ~382 / 231 / 276 / 411,
 * approximated as fr units. All footer type carries 0.1em tracking.
 *
 * The Figma footer has **no social row** — the original Bootstrap theme did,
 * but the redesign dropped it. See plan.md.
 *
 * The fourth column was "Blog Insights", listing three posts that do not exist
 * beside invented dates. It is now the contact block — same slot, same widths.
 */
export function Footer() {
  return (
    <footer className="bg-footer">
      <Container className="py-section lg:py-section-lg">
        {/*
          Design column widths are 382/231/276/411 in a 1516 canvas — wider than
          the 1220 column here, so the ratios are kept but the nav column gets
          enough room that the 30px "Main Pages" heading stays on one line, and
          the updates column stays >=276px for the 276px-wide fields.
        */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.95fr_1.15fr_1.35fr] lg:gap-8">
          {/* Columns arrive left to right, 90ms apart. */}
          <Reveal>
            <FooterBrand />
          </Reveal>
          <Reveal delay={90}>
            <FooterNav />
          </Reveal>
          <Reveal delay={180}>
            <NewsletterForm />
          </Reveal>
          <Reveal delay={270}>
            <FooterContact />
          </Reveal>
        </div>
      </Container>
      <FooterBottomBar />
    </footer>
  );
}
