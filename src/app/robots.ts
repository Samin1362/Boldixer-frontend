import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Dev-only design-system route; not useful in search results.
      disallow: "/styleguide",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
