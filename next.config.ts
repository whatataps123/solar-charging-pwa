// in next.config.ts
import type { NextConfig } from 'next';
import withPWA from '@ducanh2912/next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  workboxOptions: {
    skipWaiting: true,
  },
  // highlight-start
  // This is the important part for you:
  // Disables PWA generation in development mode
  disable: process.env.NODE_ENV === 'development',
  // highlight-end
});

const nextConfig: NextConfig = {
  // Your existing Next.js config
};

export default pwaConfig(nextConfig);