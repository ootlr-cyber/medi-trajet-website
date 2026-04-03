import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async rewrites() {
    return [
      { source: "/taxi-conventionne-:ville", destination: "/taxi-conventionne/:ville" },
      { source: "/taxi-dialyse-:ville", destination: "/taxi-dialyse/:ville" },
      { source: "/taxi-chimiotherapie-:ville", destination: "/taxi-chimiotherapie/:ville" },
      { source: "/taxi-hopital-:nom", destination: "/taxi-hopital/:nom" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
