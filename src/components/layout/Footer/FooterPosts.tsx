import Link from "next/link";
import { footer } from "@/content/footer";
import { posts } from "@/content/posts";

/**
 * Figma: heading 30px/700, entries 20px/700 white with the date overridden to
 * #C4C4C4, separated by 1px #888888 rules.
 *
 * Titles here read slightly differently from the blog cards ("Cranes, hammers
 * and nails. This is..." with spaces, vs the cards' run-together version) —
 * `content/posts.ts` is the single source, so the card spelling wins.
 */
export function FooterPosts() {
  return (
    <div>
      <h2 className="text-h3 tracking-[0.1em] text-white">
        {footer.columns.insights.title}
      </h2>
      <ul className="mt-8 lg:mt-12">
        {posts.map((post, i) => (
          <li
            key={post.title}
            className={i > 0 ? "border-t border-muted pt-6 mt-6" : undefined}
          >
            <Link href={post.href} className="group block">
              <p className="text-[20px] leading-[1.4] font-bold tracking-[0.1em] text-white transition-colors group-hover:text-brand">
                {post.title}
              </p>
              <p className="mt-3 text-[20px] font-bold tracking-[0.1em] text-line-strong">
                {post.date}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
