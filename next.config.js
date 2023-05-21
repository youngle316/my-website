const { withContentlayer } = require('next-contentlayer');
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['psnobj.prod.dl.playstation.net']
  },
};

module.exports = withContentlayer(nextConfig);
