/** @type {import('next').NextConfig} */

// On GitHub Pages a *project* site is served from a subpath
// (https://<user>.github.io/FizjosferaElk/), so we need basePath there.
// Locally and on root-domain hosts this stays empty.
const basePath = process.env.GITHUB_PAGES === 'true' ? '/FizjosferaElk' : '';

const nextConfig = {
  // Static export — single `/` route, no backend.
  output: 'export',
  // Plain <img> tags are used; disable the Image Optimization API for export.
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  // Exposed to the client bundle so <img> src values can be prefixed.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
