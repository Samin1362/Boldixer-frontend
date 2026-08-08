import {
  Container,
  Reveal,
  SectionEyebrow,
  SectionHeading,
} from "@/components/ui";
import { BlogCard } from "./BlogCard";
import { posts, postsMeta } from "@/content/posts";

/**
 * Blog — "Blog Insight". Figma Frame 8 (1440x1024 canvas, unscaled):
 *   eyebrow  25px/700 #FFC700, left-aligned at the 34px canvas inset
 *   h2       45px/700 black
 *   cards    444x544 — 444x294 image + caption, 3 across
 *
 * Card widths drift in the design (444 / 443 / 412, with the third card's
 * image wider than the card itself) and the plus-box insets vary 17/24/74px.
 * Evened out into three equal columns.
 */
export function Blog() {
  return (
    <section id="blog" className="py-section lg:py-section-lg">
      <Container>
        <Reveal>
          <SectionEyebrow
            number={postsMeta.eyebrow.number}
            spaced
            className="text-brand-bright"
          >
            {postsMeta.eyebrow.label}
          </SectionEyebrow>
          <SectionHeading className="mt-5">{postsMeta.title}</SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-[71px]">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 110} className="h-full">
              <BlogCard {...post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
