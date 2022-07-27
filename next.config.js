/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com', 's3.us-west-2.amazonaws.com', 'secure.notion-static.com']
  }
}

module.exports = nextConfig
