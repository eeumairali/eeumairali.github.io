/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for GitHub Pages
  // The GitHub Action will handle the CNAME
}

module.exports = nextConfig
