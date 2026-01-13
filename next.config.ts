import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable Partial Prerendering
    ppr: true,
    // Enable React Compiler
    reactCompiler: true,
  },
  // Logging configuration
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
