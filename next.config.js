/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
};

module.exports = nextConfig;
