import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

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
