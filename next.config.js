/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://pgf7hywzb5.execute-api.us-east-1.amazonaws.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
