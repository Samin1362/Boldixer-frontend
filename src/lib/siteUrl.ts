/**
 * Canonical origin. `NEXT_PUBLIC_SITE_URL` wins; the fallback is the domain the
 * company already uses for email (contact@tabelarobusta.com), which is the best
 * available guess until the real deployment domain is confirmed.
 *
 * Used by the metadata base, robots.txt and the sitemap — all three had their
 * own copy of this and all three defaulted to localhost.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tabelarobusta.com";
