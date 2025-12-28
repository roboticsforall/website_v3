/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
        pathname: "/rfa-cms/**",
      },
      {
        protocol: "https",  
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
  },
    webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

 export default nextConfig;
