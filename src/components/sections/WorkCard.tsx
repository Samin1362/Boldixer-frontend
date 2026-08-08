import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  category: string;
  title: string;
  href: string;
  alt: string;
  image: { src: string; width: number; height: number };
};

/**
 * Figma: 385x560 white card — 385x460 image with a 100px caption bar.
 * Caption is one text node with overrides: category 20px #FFC700,
 * title 25px black. Arrow is a 15x15 #CCCCCC vector, right-aligned.
 */
export function WorkCard({ category, title, href, alt, image }: WorkCardProps) {
  return (
    // `relative` anchors the title link's full-card click target.
    <article className="group relative h-full bg-white">
      <div className="relative aspect-[385/460] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 80vw, 385px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-end justify-between gap-4 px-5 py-6">
        <div>
          <p className="text-gold-deep text-[20px] font-bold">{category}</p>
          <h3 className="mt-1 text-[25px] leading-tight font-bold text-ink">
            <Link href={href} className="after:absolute after:inset-0">
              {title}
            </Link>
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="mb-1 shrink-0 text-line transition-transform duration-200 group-hover:translate-x-1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </article>
  );
}
