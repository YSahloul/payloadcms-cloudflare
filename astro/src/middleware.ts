import { defineMiddleware } from 'astro:middleware'
import { getPayloadFetch, getRedirects, type RedirectEntry } from './lib/payload'

const REDIRECT_CACHE_TTL_MS = 60_000
interface RedirectCache {
  map: Map<string, RedirectEntry>
  expiresAt: number
}
let redirectCache: RedirectCache | null = null

/** Routes owned by Astro (not proxied to Payload). */
const ASTRO_OWNED_ROUTES = [
  '/api/og.png',
]

function isPayloadPath(pathname: string): boolean {
  if (ASTRO_OWNED_ROUTES.some((r) => pathname === r)) return false
  return (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next/')
  )
}

async function getRedirectMap(runtime: any): Promise<Map<string, RedirectEntry>> {
  const now = Date.now()
  if (redirectCache && redirectCache.expiresAt > now) {
    return redirectCache.map
  }
  const fetchFn = getPayloadFetch(runtime)
  const map = await getRedirects(fetchFn)
  redirectCache = { map, expiresAt: now + REDIRECT_CACHE_TTL_MS }
  return map
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url)
  const runtime = (context.locals as any).runtime

  // ── CMS-managed redirects ──────────────────────────────────────────────
  if (!isPayloadPath(url.pathname)) {
    const redirectMap = await getRedirectMap(runtime)
    const match = redirectMap.get(url.pathname)
    if (match) {
      const status = match.type === 'temporary' ? 302 : 301
      const location = match.destination.startsWith('http')
        ? match.destination
        : new URL(match.destination, url.origin).toString()
      return new Response(null, { status, headers: { Location: location } })
    }
  }

  // ── Astro pages / API routes ───────────────────────────────────────────
  if (!isPayloadPath(url.pathname)) {
    return next()
  }

  // ── Proxy to Payload CMS via service binding ───────────────────────────
  const cmsBinding = runtime?.env?.PAYLOAD_CMS
  if (!cmsBinding) {
    return next()
  }

  const payloadOrigin = new URL(
    import.meta.env.PAYLOAD_API_URL || 'https://cms.yourdomain.com',
  )
  const payloadUrl = new URL(url.pathname + url.search, payloadOrigin)

  const headers = new Headers(context.request.headers)
  headers.set('Host', payloadOrigin.hostname)

  // CSRF fix: rewrite Origin/Referer to Payload's hostname
  const browserOrigin = headers.get('Origin')
  if (browserOrigin) headers.set('Origin', payloadOrigin.origin)
  const referer = headers.get('Referer')
  if (referer) {
    try {
      const refUrl = new URL(referer)
      refUrl.hostname = payloadOrigin.hostname
      refUrl.protocol = payloadOrigin.protocol
      refUrl.port = payloadOrigin.port
      headers.set('Referer', refUrl.toString())
    } catch {}
  }

  const proxyRequest = new Request(payloadUrl.toString(), {
    method: context.request.method,
    headers,
    body: context.request.body,
    redirect: 'manual',
  })

  let response = await cmsBinding.fetch(proxyRequest)

  // Rewrite redirect locations back to the site's hostname
  const newHeaders = new Headers(response.headers)
  const location = newHeaders.get('Location')
  if (location) {
    try {
      const locUrl = new URL(location, payloadOrigin)
      if (locUrl.hostname === payloadOrigin.hostname) {
        locUrl.hostname = url.hostname
        locUrl.protocol = url.protocol
        newHeaders.set('Location', locUrl.toString())
      }
    } catch {}
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  })
})
