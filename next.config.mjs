/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xelene.me",
        port: "",
        pathname: "/**.gif",
      },
    ],
  },
};

export default nextConfig;
