/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/eJVz3DEfb4",
        permanent: true,
      },
      {
        source: "/download",
        destination:
          "https://link-target.net/617946/download-viper-x",
        permanent: true,
      },
    ];
  },
};
