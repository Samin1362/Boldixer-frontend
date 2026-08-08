"use client";

/**
 * Design-system scratch route (dev reference, not part of the landing page).
 * Renders every token and primitive so they can be checked against the Figma
 * exports in public/images/_reference/frames/.
 */
import { useState } from "react";
import {
  Button,
  CarouselDots,
  Container,
  Icon,
  Input,
  PlusBox,
  Section,
  SectionEyebrow,
  SectionHeading,
} from "@/components/ui";
import { icons, type IconName } from "@/lib/icons";

const swatches = [
  ["brand", "bg-brand", "#F3C41A"],
  ["brand-bright", "bg-brand-bright", "#FFC700"],
  ["accent", "bg-accent", "#F79329"],
  ["accent-deep", "bg-accent-deep", "#ED6C30"],
  ["ink", "bg-ink", "#000000"],
  ["footer", "bg-footer", "#333131"],
  ["surface", "bg-surface", "#F8F8F8"],
  ["muted", "bg-muted", "#888888"],
  ["line", "bg-line", "#CCCCCC"],
  ["line-strong", "bg-line-strong", "#C4C4C4"],
] as const;

const typeScale = [
  ["display / 64", "text-display"],
  ["h1 / 51", "text-h1"],
  ["h2 / 45", "text-h2"],
  ["h3 / 30", "text-h3"],
  ["lg / 22", "text-lg"],
  ["base / 18", "text-base"],
  ["sm / 15", "text-sm"],
  ["xs / 12", "text-xs"],
] as const;

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line py-10">
      <h3 className="text-h3 mb-6">{title}</h3>
      {children}
    </div>
  );
}

export default function StyleguidePage() {
  const [slide, setSlide] = useState(1);

  return (
    <main className="py-16">
      <Container>
        <SectionEyebrow number="00">Styleguide</SectionEyebrow>
        <SectionHeading as="h1" size="display" className="mt-2">
          Boldixer Pro costruction
        </SectionHeading>
        <p className="text-lg text-muted mt-4 max-w-2xl">
          Phase 1 tokens and Phase 2 primitives. Copy typos are reproduced from
          the design on purpose.
        </p>

        <Row title="Color">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {swatches.map(([name, cls, hex]) => (
              <div key={name}>
                <div className={`${cls} h-20 w-full border border-line`} />
                <p className="text-sm mt-2 font-semibold">{name}</p>
                <p className="text-xs text-muted">{hex}</p>
              </div>
            ))}
          </div>
        </Row>

        <Row title="Type scale">
          <div className="space-y-4">
            {typeScale.map(([name, cls]) => (
              <div
                key={name}
                className="flex flex-wrap items-baseline gap-x-6 border-b border-line pb-3"
              >
                <span className="text-xs text-muted w-28 shrink-0">{name}</span>
                <span className={cls}>We Help Pepole Elevate Happines</span>
              </div>
            ))}
          </div>
        </Row>

        <Row title="Eyebrows">
          <div className="space-y-2">
            <SectionEyebrow number="01">About Us</SectionEyebrow>
            <SectionEyebrow number="04" spaced>
              Services
            </SectionEyebrow>
            <SectionEyebrow number="06">Portfollo</SectionEyebrow>
            <SectionEyebrow number="07" spaced>
              News
            </SectionEyebrow>
          </div>
        </Row>

        <Row title="Buttons">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="brand" size="sm">
                About Compnay
              </Button>
              <Button variant="dark" size="sm">
                Get a Quote
              </Button>
              <span className="text-xs text-muted">size sm — hero</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="brand" size="md">
                Read more
              </Button>
              <span className="text-xs text-muted">size md — about</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="dark" size="lg" radius="soft">
                Get a Quote
              </Button>
              <Button variant="bright" size="lg" radius="soft">
                Subscribe Now
                <Icon name="la:telegram-plane" size={22} />
              </Button>
              <span className="text-xs text-muted">size lg, radius soft</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="md">
                Outline
              </Button>
              <Button variant="brand" size="md" disabled>
                Disabled
              </Button>
              <Button variant="dark" size="md" href="/">
                As link
              </Button>
            </div>
          </div>
        </Row>

        <Row title="Inputs">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <Input label="Full Name" placeholder="Full Name" />
              <Input label="Email id" placeholder="Email id" type="email" />
              <p className="text-xs text-muted">tone outline — contact card</p>
            </div>
            <div className="space-y-4 bg-footer p-8">
              <Input label="Enter Full Name" tone="filled" placeholder="Enter Full Name" />
              <Input label="Enter Email" tone="filled" placeholder="Enter Email" type="email" />
              <p className="text-xs text-white/60">tone filled — footer</p>
            </div>
          </div>
        </Row>

        <Row title="PlusBox">
          <div className="flex flex-wrap items-center gap-6">
            <PlusBox label="Read more about Interior Design" href="#" />
            <PlusBox label="Static plus box" />
          </div>
        </Row>

        <Row title="Carousel dots">
          <div className="bg-brand p-8">
            <CarouselDots count={3} activeIndex={slide} onSelect={setSlide} />
          </div>
          <div className="mt-4">
            <CarouselDots count={4} activeIndex={slide} onSelect={setSlide} tone="dark" />
          </div>
        </Row>

        <Row title={`Icons (${Object.keys(icons).length} bundled, offline)`}>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {(Object.keys(icons) as IconName[]).map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 border border-line p-4 text-center"
              >
                <Icon name={name} size={40} />
                <code className="text-xs break-all text-muted">{name}</code>
              </div>
            ))}
          </div>
        </Row>
      </Container>

      <Section tone="surface" className="mt-16">
        <SectionEyebrow number="00" spaced>
          Section
        </SectionEyebrow>
        <SectionHeading className="mt-2">Surface tone</SectionHeading>
        <p className="text-lg text-muted mt-4">
          Section wrapper with the shared vertical rhythm and container.
        </p>
      </Section>

      <Section tone="brand">
        <SectionHeading>Brand tone</SectionHeading>
      </Section>

      <Section tone="footer">
        <SectionHeading>Footer tone</SectionHeading>
      </Section>
    </main>
  );
}
