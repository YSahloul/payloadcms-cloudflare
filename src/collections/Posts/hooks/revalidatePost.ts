import type { CollectionAfterChangeHook } from 'payload'

import type { Post } from '../../../payload-types'
import { serverUrl } from '@/config/server'
import { purgePath } from '@/utilities/cachePurge'

export const revalidatePost: CollectionAfterChangeHook<Post> = async ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/posts/${doc.slug}`
    payload.logger.info(`Purging post cache at path: ${path}`)
    await purgePath(serverUrl, path)
  }

  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/posts/${previousDoc.slug}`
    payload.logger.info(`Purging old post cache at path: ${oldPath}`)
    await purgePath(serverUrl, oldPath)
  }

  return doc
}
