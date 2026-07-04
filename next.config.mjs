/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — single `/` route, no backend.
  output: 'export',
  // Plain <img> tags are used; disable the Image Optimization API for export.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
