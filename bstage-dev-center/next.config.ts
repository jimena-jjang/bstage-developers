import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bstage-developers",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
