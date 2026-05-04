/**
 * Cache purge helpers for Cloudflare Workers.
 *
 * On Cloudflare, the Next.js `revalidatePath` / `revalidateTag` APIs are not
 * available. Instead, the Astro frontend worker uses Cache-Control TTL + SWR,
 * and we can explicitly purge if a Cloudflare cache purge token is provided.
 */

/**
 * Purge specific URLs from the Cloudflare edge cache.
 * Requires CLOUDFLARE_ZONE_ID and CLOUDFLARE_CACHE_API_TOKEN env vars.
 */
export async function purgeCloudflareCache(urls: string[]) {
  const zoneId = (globalThis as any).cloudflare?.env?.CLOUDFLARE_ZONE_ID
  const token = (globalThis as any).cloudflare?.env?.CLOUDFLARE_CACHE_API_TOKEN

  if (!zoneId || !token || urls.length === 0) return

  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: urls }),
      },
    )
    if (!res.ok) {
      console.warn('[cache-purge] Cloudflare purge failed:', await res.text())
    }
  } catch (err) {
    console.warn('[cache-purge] Error:', err)
  }
}

/**
 * Purge a path on all custom domains.
 * In practice the Astro worker handles caching via Cache-Control, so this is
 * only needed if you want immediate invalidation.
 */
export async function purgePath(baseUrl: string, path: string) {
  const url = new URL(path, baseUrl).toString()
  await purgeCloudflareCache([url])
}
