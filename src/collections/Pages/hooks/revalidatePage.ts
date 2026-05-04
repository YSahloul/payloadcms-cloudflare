import type { CollectionAfterChangeHook } from 'payload'

import type { Page } from '../../../payload-types'
import { serverUrl } from '@/config/server'
import { purgePath } from '@/utilities/cachePurge'
import localization from '@/localization.config'

const nonDefaultLocale = localization.locales.filter(
  (locale) => locale !== localization.defaultLocale,
)

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  const pathsToPurge: string[] = []

  if (doc._status === 'published') {
    const url =
      (doc?.breadcrumbs ? doc?.breadcrumbs[doc?.breadcrumbs?.length - 1].url : `/${doc.slug}`) ||
      `/${doc.slug}`
    const path = doc.slug === 'home' ? '/' : url

    payload.logger.info(`Purging page cache at path: ${path}`)
    pathsToPurge.push(path)
    nonDefaultLocale.forEach((locale) => {
      pathsToPurge.push(`/${locale}${path}`)
    })
  }

  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    const url =
      (previousDoc?.breadcrumbs
        ? previousDoc?.breadcrumbs[previousDoc?.breadcrumbs?.length - 1].url
        : `/${previousDoc.slug}`) || `/${previousDoc.slug}`
    const oldPath = previousDoc.slug === 'home' ? '/' : url

    payload.logger.info(`Purging old page cache at path: ${oldPath}`)
    pathsToPurge.push(oldPath)
    nonDefaultLocale.forEach((locale) => {
      pathsToPurge.push(`/${locale}${oldPath}`)
    })
  }

  for (const p of pathsToPurge) {
    await purgePath(serverUrl, p)
  }

  return doc
}
