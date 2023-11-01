/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: [
      'images.unsplash.com',
      'i.ibb.co',
      'scontent.fotp8-1.fna.fbcdn.net',
      'dknlay9ljaq1f.cloudfront.net',
      'lh3.googleusercontent.com', // google img
      'dev-to-uploads.s3.amazonaws.com',
      'pbs.twimg.com', // twitter img
      'media.licdn.com', // linkedin img
    ],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
