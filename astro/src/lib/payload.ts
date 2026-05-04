/**
 * Payload API client for the Astro frontend worker.
 * Uses Cloudflare service binding (PAYLOAD_CMS) for zero-latency worker-to-worker fetch.
 */

const PAYLOAD_ORIGIN = import.meta.env.PAYLOAD_API_URL || 'https://cms.yourdomain.com'

export type Fetcher = (url: string | Request, init?: RequestInit) => Promise<Response>

/**
 * Get the fetch function to use for Payload API calls.
 * Prefers the PAYLOAD_CMS service binding; falls back to global fetch.
 */
export function getPayloadFetch(runtime: any): Fetcher {
  const binding = runtime?.env?.PAYLOAD_CMS
  if (binding?.fetch) {
    return (url: string | Request, init?: RequestInit) => {
      const req = typeof url === 'string' ? new Request(url, init) : new Request(url, init)
      return binding.fetch(req)
    }
  }
  return globalThis.fetch
}

/** Build a Payload REST API URL with raw bracket query params. */
function payloadUrl(collection: string, params: Record<string, string>): string {
  const qs = Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&')
  return `${PAYLOAD_ORIGIN}/api/${collection}?${qs}`
}

/**
 * Fetch a page by slug.
 */
export async function getPage(
  fetchFn: Fetcher,
  pageSlug: string,
  depth = 2,
): Promise<any | null> {
  try {
    const url = payloadUrl('pages', {
      'where[slug][equals]': pageSlug,
      limit: '1',
      depth: String(depth),
    })
    const res = await fetchFn(url)
    if (!res.ok) return null
    const data = (await res.json()) as any
    return data.docs?.[0] ?? null
  } catch {
    return null
  }
}

/**
 * Fetch published posts.
 */
export async function getPosts(fetchFn: Fetcher, limit = 20): Promise<any[]> {
  try {
    const url = payloadUrl('posts', {
      'where[_status][equals]': 'published',
      limit: String(limit),
      depth: '1',
      sort: '-publishedAt',
    })
    const res = await fetchFn(url)
    if (!res.ok) return []
    const data = (await res.json()) as any
    return data.docs ?? []
  } catch {
    return []
  }
}

/**
 * Fetch a single post by slug.
 */
export async function getPost(fetchFn: Fetcher, postSlug: string): Promise<any | null> {
  try {
    const url = payloadUrl('posts', {
      'where[slug][equals]': postSlug,
      limit: '1',
      depth: '2',
    })
    const res = await fetchFn(url)
    if (!res.ok) return null
    const data = (await res.json()) as any
    return data.docs?.[0] ?? null
  } catch {
    return null
  }
}

/**
 * Fetch theme config global.
 */
export async function getThemeConfig(fetchFn: Fetcher): Promise<any | null> {
  try {
    const res = await fetchFn(`${PAYLOAD_ORIGIN}/api/globals/themeConfig?depth=2`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

/**
 * Fetch header global.
 */
export async function getHeader(fetchFn: Fetcher): Promise<any | null> {
  try {
    const res = await fetchFn(`${PAYLOAD_ORIGIN}/api/globals/header?depth=2`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

/**
 * Fetch footer global.
 */
export async function getFooter(fetchFn: Fetcher): Promise<any | null> {
  try {
    const res = await fetchFn(`${PAYLOAD_ORIGIN}/api/globals/footer?depth=2`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

/**
 * Fetch all published pages (for nav + sitemap).
 */
export async function getAllPages(fetchFn: Fetcher): Promise<any[]> {
  try {
    const url = payloadUrl('pages', {
      limit: '100',
      depth: '0',
      'select[slug]': 'true',
      'select[updatedAt]': 'true',
      'select[title]': 'true',
      'select[breadcrumbs]': 'true',
    })
    const res = await fetchFn(url)
    if (!res.ok) return []
    const data = (await res.json()) as any
    return data.docs ?? []
  } catch {
    return []
  }
}

/**
 * Fetch all active redirects.
 */
export interface RedirectEntry {
  source: string
  destination: string
  type: 'permanent' | 'temporary'
}

export async function getRedirects(fetchFn: Fetcher): Promise<Map<string, RedirectEntry>> {
  const map = new Map<string, RedirectEntry>()
  try {
    const url = payloadUrl('redirects', {
      limit: '500',
      depth: '0',
      'select[from]': 'true',
      'select[to]': 'true',
      'select[type]': 'true',
    })
    const res = await fetchFn(url)
    if (!res.ok) return map
    const data = (await res.json()) as any
    for (const doc of data.docs ?? []) {
      if (doc.from && doc.to) {
        map.set(doc.from, {
          source: doc.from,
          destination: doc.to,
          type: doc.type === 'temporary' ? 'temporary' : 'permanent',
        })
      }
    }
  } catch {
    // best-effort
  }
  return map
}
