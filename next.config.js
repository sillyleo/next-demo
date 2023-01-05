/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    urlImports: [
      "https://framer.com/m/",
      "https://framerusercontent.com/",
      "https://ga.jspm.io/",
      "https://jspm.dev/",
      "https://unpkg.com/",
      "https://esm.sh/",
    ],
  },
};

module.exports = {
  trailingSlash: true,
  ...nextConfig,
};
