import { Container, Reveal } from "@/components/ui";
import { pillars } from "@/content/clients";

/**
 * The band below About. Figma had four client logos on a single row at
 * x=60/413/729/1045 of the 1440 canvas — those were four real, unrelated firms
 * shipped with the template and have been removed (see content/clients.ts).
 *
 * Same rhythm, same four positions, but the band now carries the four pillars
 * from the logo. Text rather than images means it also survives the swap back
 * to a logo strip without a layout change.
 */
export function Pillars() {
  return (
    <section aria-label="What we stand for" className="pb-section lg:pb-section-lg">
      <Container>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pillars.map((pillar, i) => (
            <li key={pillar.label}>
              <Reveal variant="up" delay={i * 70}>
                {/* Gold hairline over each entry — the eyebrow rule, repeated. */}
                <div className="border-gold border-t-2 pt-5">
                  <h2 className="text-[22px] font-bold tracking-[0.02em] text-ink">
                    {pillar.label}
                  </h2>
                  <p className="text-muted mt-2 text-base leading-relaxed font-medium">
                    {pillar.note}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
