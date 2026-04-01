/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/resources/:slug",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
