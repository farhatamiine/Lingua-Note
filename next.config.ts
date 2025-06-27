// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Prevent Webpack from crawling outside the project
    config.snapshot = {
      managedPaths: [/^(.next|node_modules)/],
    };

    // Skip problematic system folders if globbing happens
    config.module.rules.push({
      test: /\.ts$/,
      loader: "ignore-loader",
      include: [
        "C:\\Users\\farha\\Cookies",
        "C:\\Users\\farha\\Application Data",
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
