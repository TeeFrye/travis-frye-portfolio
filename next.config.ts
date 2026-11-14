import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Next 16 only allows 75 by default; 90 is for detailed screenshots.
    qualities: [75, 90],
  },
};

export default nextConfig;
