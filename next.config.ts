import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssl.cdn-redfin.com",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      // Unsplash (random/featured photos)
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      // Unsplash (direct images)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // RandomUser.me (agent avatars)
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default nextConfig;
