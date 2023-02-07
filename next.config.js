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
  env: {
    mapBox_key:
      "pk.eyJ1Ijoic3VsZW0iLCJhIjoiY2xkdHMza2lkMDhwajNvbHNnNGhpbTJhMCJ9.H9XU29atfbHy8u1EyNvAdg",
  },
};

module.exports = nextConfig;
