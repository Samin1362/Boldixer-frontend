import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel serves the real thing; no reason to advertise the framework. */
  poweredByHeader: false,

  images: {
    /* All imagery is local, so no remotePatterns are needed. */
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        /* Fingerprinted by filename; safe to cache hard. */
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
