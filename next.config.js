/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Enable experimental features for Cloudflare Workers
  experimental: {
    optimizeCss: true,
  },
  
  // Configure images for Cloudflare Workers
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
    domains: [
      'firebasestorage.googleapis.com',
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'via.placeholder.com',
      'api.dicebear.com'
    ]
  },
  
  // Optimize for edge runtime
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'jsdom'];
    }
    return config;
  },
};

module.exports = nextConfig;