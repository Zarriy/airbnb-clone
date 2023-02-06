/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      { protocol: "https", hostname: "a0.muscache.com" },
    ],
  },
};

module.exports = nextConfig;
