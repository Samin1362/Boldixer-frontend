import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { hero } from "@/content/hero";

/**
 * Hero. Figma Frame 1, below the header (1450 canvas):
 *   section    #F8F8F8, 865px tall
 *   h1         line 1 26px/600, lines 2-3 63px/600 with 72px leading
 *   buttons    113x48 and 115x48, 24px apart, 12px/600 white labels
 *   photo      737x865 flush to the right edge (50.8% of canvas), bottom-aligned
 *
 * The "About Compnay" label is white on brand yellow in the design — about
 * 1.9:1 contrast. Reproduced as drawn; see plan.md Phase 15.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Photo: right half on large screens, stacked below the copy on small. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50.8%] lg:block">
        <Image
          src={hero.image.src}
          alt=""
          aria-hidden
          fill
          priority
          sizes="51vw"
          className="object-cover object-bottom"
        />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[520px] flex-col justify-center py-16 lg:min-h-[865px] lg:w-[52%] lg:py-24">
          <h1 className="font-semibold text-ink">
            <span className="block text-[22px] leading-tight sm:text-[26px]">
              {hero.kicker}
            </span>
            <span className="mt-3 block text-[44px] leading-[1.14] sm:text-[54px] lg:text-[63px] lg:leading-[72px]">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {hero.actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                variant={action.variant}
                size="sm"
                className="text-white"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>

      {/* Small screens: the photo sits under the copy rather than beside it. */}
      <div className="relative mx-auto block aspect-[376/455] w-[min(88%,420px)] lg:hidden">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 88vw, 0px"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
}
