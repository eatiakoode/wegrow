/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, max-age=0",
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '165.232.183.146',
        port: '5000',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
