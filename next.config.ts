import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add hostname to allow images from external sources
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
