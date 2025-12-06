/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // на будущее: если подгружаешь фото с внешних CDN
    domains: ['images.unsplash.com', 'cdn.booksy.com', 'static.booksy.com'],
  },
  reactStrictMode: true,
};
module.exports = nextConfig;
