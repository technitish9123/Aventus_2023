/** @type {import('next').NextConfig} */
// const withImages = require("next-images");

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
