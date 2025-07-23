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
        hostname: 'api.wegrowinfraventures.com',
        port: '5000',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
