/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['nasa.gov', 'apod.nasa.gov']
  }
}

module.exports = nextConfig
