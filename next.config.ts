import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import { serverUrl } from './src/config/server'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // R2 + Cloudflare Images handles optimization at the edge
    remotePatterns: [
      {
        hostname: new URL(serverUrl).hostname,
        protocol: 'https' as 'http' | 'https',
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
}

export default withPayload(nextConfig)
