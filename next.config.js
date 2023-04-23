/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/417c7c40a512495db1cda2eeaf005dab/**",
      },
    ],
  },
};

module.exports = nextConfig;
