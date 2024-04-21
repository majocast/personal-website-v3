/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "https://i.ibb.co/",
            // ...
          },
        ],
      },
};

export default nextConfig;
