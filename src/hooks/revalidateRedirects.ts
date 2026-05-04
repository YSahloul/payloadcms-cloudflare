import type { CollectionAfterChangeHook } from 'payload'

import { purgePath } from '@/utilities/cachePurge'
import { serverUrl } from '@/config/server'

export const revalidateRedirects: CollectionAfterChangeHook = async ({ req: { payload } }) => {
  payload.logger.info(`Purging redirects cache`)
  // Purge homepage and common paths so the Astro middleware picks up new redirects
  await purgePath(serverUrl, '/')
  return undefined
}
