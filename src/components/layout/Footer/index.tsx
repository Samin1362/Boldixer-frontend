import { Container } from "@/components/ui";
import { FooterBrand } from "./FooterBrand";
import { FooterNav } from "./FooterNav";
import { NewsletterForm } from "./NewsletterForm";
import { FooterPosts } from "./FooterPosts";
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
 */
export function Footer() {
  return (
    <footer className="bg-footer">
      <Container className="py-section lg:py-section-lg">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.85fr_1fr_1.5fr] lg:gap-10">
          <FooterBrand />
          <FooterNav />
          <NewsletterForm />
          <FooterPosts />
        </div>
      </Container>
      <FooterBottomBar />
    </footer>
  );
}
