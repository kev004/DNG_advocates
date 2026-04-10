import path from "path";
import type { NextConfig } from "next";

/** Set Turbopack root when the repository contains multiple lockfiles. */
const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: true,
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
