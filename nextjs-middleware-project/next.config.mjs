/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    middleware: true,
  },env: {
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

export default nextConfig;
