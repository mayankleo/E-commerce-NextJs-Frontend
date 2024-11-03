import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['127.0.0.1', 'localhost','images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
