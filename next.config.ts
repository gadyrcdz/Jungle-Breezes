import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // NO uses output: 'export' en Vercel - quítalo si lo tienes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // NO necesitas basePath ni assetPrefix en Vercel
}

module.exports = nextConfig