"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui";
import { StatCounter } from "./StatCounter";
import { VideoLightbox } from "./VideoLightbox";
import { useInView } from "@/hooks/useInView";
import { stats, collage } from "@/content/stats";

/**
 * Stats over the overlapping photo collage. Figma Frame 5 (1440x1024 canvas):
 *   back layer   1474x727 at x=2  y=297  (bleeds past the right edge)
 *   front layer  1174x588 at x=285 y=62
 *   icons        y=800, 70x70
 *   stat text    y≈870
 *
 * Both source images are heavily upscaled by the design (the back layer is
 * 513x343 shown at 1474x727) and stretched — `object-cover` crops instead of
 * distorting. See plan.md.
 */
export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [playing, setPlaying] = useState(false);

  return (
    <section aria-label="By the numbers" className="overflow-hidden py-section">
      <div ref={ref} className="relative mx-auto max-w-[1440px] lg:aspect-[1440/1024]">
        {/* Back layer */}
        <div className="absolute inset-x-0 top-[29%] bottom-0 hidden lg:block">
          <Image
            src={collage.wide.src}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Front layer, with the real control over the baked-in play glyph */}
        <div className="relative aspect-[1174/588] w-full lg:absolute lg:top-[6.1%] lg:left-[19.8%] lg:w-[81.5%]">
          <Image
            src={collage.capture.src}
            alt={collage.capture.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 82vw"
            className="object-cover"
          />
          {collage.videoUrl && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play the company video"
              className="absolute top-[49.5%] left-[52.9%] h-[13%] w-[9%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            />
          )}
        </div>

        {/* Stats row */}
        <div className="relative bg-footer py-12 lg:absolute lg:inset-x-0 lg:bottom-[7%] lg:bg-transparent lg:py-0">
          <Container>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <StatCounter {...stat} active={inView} />
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </div>

      {collage.videoUrl && (
        <VideoLightbox
          open={playing}
          onClose={() => setPlaying(false)}
          url={collage.videoUrl}
        />
      )}
    </section>
  );
}
