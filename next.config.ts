import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  images: {
    domains: ['user941211.github.io'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    SITE_URL: process.env.VERCEL_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
