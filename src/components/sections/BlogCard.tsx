import Image from "next/image";
import Link from "next/link";
import { PlusBox } from "@/components/ui";

type BlogCardProps = {
  category: string;
  title: string;
  href: string;
  alt: string;
  image: { src: string; width: number; height: number };
};

/**
 * Figma: 444x544 card — 444x294 image, then category 20px #FFC700 and a
 * 2-line 25px black title, with a 75x66 PlusBox at the bottom.
 */
export function BlogCard({ category, title, href, alt, image }: BlogCardProps) {
  return (
    <article className="group relative flex h-full flex-col bg-white">
      <div className="relative aspect-[444/294] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 444px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex grow flex-col pt-6">
        <p className="text-gold-deep text-[20px] font-bold">{category}</p>
        <h3 className="mt-3 text-[22px] leading-[1.2] font-bold text-ink lg:text-[25px]">
          <Link href={href} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        {/* Decorative: the title link already covers the whole card. */}
        <PlusBox decorative label={`Read more: ${title}`} className="mt-auto" />
      </div>
    </article>
  );
}
