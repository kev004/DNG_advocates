import path from "path";
import type { NextConfig } from "next";

/** Set Turbopack root when the repository contains multiple lockfiles. */
const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
