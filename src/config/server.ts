/**
 * Server configuration and environment variables.
 * Works on both Node.js (dev) and Cloudflare Workers (production).
 */

function getEnv(key: string): string | undefined {
  // Cloudflare Workers inject env via the global cloudflare object
  const cfEnv = (globalThis as any).cloudflare?.env
  if (cfEnv?.[key]) return cfEnv[key]
  return process.env?.[key]
}

export const serverConfig = {
  serverUrl:
    getEnv('NEXT_PUBLIC_SERVER_URL') ||
    (getEnv('NEXT_PUBLIC_VERCEL_URL')
      ? `https://${getEnv('NEXT_PUBLIC_VERCEL_URL')}`
      : 'http://localhost:3000'),

  isDevelopment: getEnv('NODE_ENV') === 'development',
  isProduction: getEnv('NODE_ENV') === 'production',
} as const

export const { serverUrl } = serverConfig
