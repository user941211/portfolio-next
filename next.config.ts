import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user941211.github.io',
      }
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
