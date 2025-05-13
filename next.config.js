/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://1sol.github.io/portfolio";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: !debug ? `${repository}/` : "",
  trailingSlash: true,
};

module.exports = nextConfig;
