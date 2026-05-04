import fs from 'fs'
import path from 'path'
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite'
import { migrations } from './migrations'
import { r2Storage } from '@payloadcms/storage-r2'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import { CloudflareContext, getCloudflareContext } from '@opennextjs/cloudflare'
import { GetPlatformProxyOptions } from 'wrangler'
import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'

// Plugins
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { resendAdapter } from '@payloadcms/email-resend'

// Collections
import Categories from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import Users from './collections/Users'
import Roles from './collections/Roles'

// Globals
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'
import { ThemeConfig } from './globals/ThemeConfig/config'
import { PageConfig } from './globals/PageConfig/config'

// Hooks / Utils
import { revalidateRedirects } from './hooks/revalidateRedirects'
import { initializeRoles } from './utilities/initRoles'
import { hasPermission } from './utilities/checkPermission'
import localization from './localization.config'
import { serverUrl as NEXT_PUBLIC_SERVER_URL } from '@/config/server'

import { OAuth2Plugin } from 'payload-oauth2'
import type { Config } from './payload-types'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const realpath = (value: string) => (fs.existsSync(value) ? fs.realpathSync(value) : undefined)

const isCLI = process.argv.some((value) => {
  const resolved = realpath(value)
  return (
    resolved?.endsWith(path.join('payload', 'bin.js')) ||
    resolved?.includes('payload-graphql') ||
    resolved?.includes('@payloadcms/graphql')
  )
})
const isProduction = process.env.NODE_ENV === 'production'
const isNextBuild =
  process.env.NEXT_PHASE === 'phase-production-build' ||
  process.env.npm_lifecycle_event === 'build'

const cloudflare: any = isNextBuild
  ? { env: process.env }
  : isCLI || !isProduction
    ? await getCloudflareContextFromWrangler()
    : await getCloudflareContext({ async: true })

const generateTitle = ({ doc }: any) => {
  return doc?.title ? `${doc.title} | Payblocks` : 'Payblocks'
}

const generateURL = ({ doc }: any) => {
  return doc?.slug ? `${NEXT_PUBLIC_SERVER_URL}/${doc.slug}` : NEXT_PUBLIC_SERVER_URL
}

const googleAuthActive = !!(
  cloudflare.env.GOOGLE_LOGIN_CLIENT_ID && cloudflare.env.GOOGLE_LOGIN_CLIENT_SECRET
)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/AdminDashboard/BeforeLogin'],
      afterLogin: googleAuthActive ? ['@/components/AdminDashboard/LoginButton'] : [],
      beforeDashboard: ['@/components/AdminDashboard/BeforeDashboard'],
      afterDashboard: ['@/components/AdminDashboard/BackupDashboard'],
      graphics: {
        Icon: '@/components/AdminDashboard/PayblocksIcon',
        Logo: '@/components/AdminDashboard/PayblocksLogo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: lexicalEditor(),
  db: sqliteD1Adapter({
    binding: (cloudflare.env?.D1 || {}) as any,
    prodMigrations: migrations as any,
  }),
  collections: [Pages, Posts, Media, Categories, Users, Roles],
  globals: [ThemeConfig, Header, Footer, PageConfig],
  cors: [NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  plugins: [
    redirectsPlugin({
      collections: ['pages', 'posts'],
      overrides: {
        fields: (({ defaultFields }: any) => {
          return defaultFields.map((field: any) => {
            if ('name' in field && field.name === 'from') {
              return {
                ...field,
                admin: {
                  description:
                    'Add redirects here. They work immediately after saving. Example: /about or https://example.com/about',
                },
              }
            }
            return field
          })
        }) as any,
        hooks: { afterChange: [revalidateRedirects] },
        access: {
          create: hasPermission('canManageRedirects'),
          read: () => true,
          update: hasPermission('canManageRedirects'),
          delete: hasPermission('canManageRedirects'),
        },
      },
    }),
    nestedDocsPlugin({
      collections: ['categories', 'pages'],
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${(doc as any).slug}`, ''),
    }),
    seoPlugin({ generateTitle, generateURL }),
    formBuilderPlugin({
      fields: { payment: false },
      formOverrides: {
        fields: ({ defaultFields }) => {
          return defaultFields.map((field) => {
            if ('name' in field && field.name === 'confirmationMessage') {
              return {
                ...field,
                editor: lexicalEditor({
                  features: ({ rootFeatures }) => [
                    ...rootFeatures,
                  ],
                }),
              }
            }
            return field
          })
        },
      },
    }),
    r2Storage({
      bucket: (cloudflare.env?.R2 || {}) as any,
      collections: { media: true },
    }),
    OAuth2Plugin({
      enabled: googleAuthActive,
      strategyName: 'google',
      useEmailAsIdentity: true,
      serverURL: NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
      authCollection: 'users',
      clientId: cloudflare.env.GOOGLE_LOGIN_CLIENT_ID || '',
      subFieldName: 'sub',
      clientSecret: cloudflare.env.GOOGLE_LOGIN_CLIENT_SECRET || '',
      tokenEndpoint: 'https://oauth2.googleapis.com/token',
      scopes: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'openid',
      ],
      providerAuthorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
      getUserInfo: async (accessToken: string) => {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        const user = await response.json()
        if (!user.email_verified) throw new Error('Email not verified')
        const allowedDomains = cloudflare.env.ALLOWED_EMAIL_DOMAINS?.split(',')
        if (allowedDomains && !allowedDomains.includes(user.email.split('@')?.[1])) {
          throw new Error('Email domain not allowed')
        }
        return { email: user.email, sub: user.sub, name: user.name }
      },
      successRedirect: (req: PayloadRequest) => {
        if (req.query.state && (req.query.state as string).startsWith('/')) {
          return `${req.query.state}`
        }
        return '/admin'
      },
      failureRedirect: (_, error) => {
        console.error(error)
        return '/login'
      },
    }),
  ],
  email: resendAdapter({
    defaultFromAddress: cloudflare.env.EMAIL_FROM_ADDRESS || 'hello@payblocks.dev',
    defaultFromName: 'Payblocks',
    apiKey: cloudflare.env.RESEND_API_KEY || '',
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  onInit: async (payload) => {
    await initializeRoles(payload)
  },
  localization,
  i18n: {
    supportedLanguages: { en, de },
  },
})

// Adapted from https://github.com/opennextjs/opennextjs-cloudflare/blob/d00b3a13e42e65aad76fba41774815726422cc39/packages/cloudflare/src/api/cloudflare-context.ts#L328C36-L328C46
function getCloudflareContextFromWrangler(): Promise<CloudflareContext> {
  return import(/* webpackIgnore: true */ `${'__wrangler'.replaceAll('_', '')}`).then(
    ({ getPlatformProxy }) =>
      getPlatformProxy({
        environment: process.env.CLOUDFLARE_ENV,
        remoteBindings: false,
      } satisfies GetPlatformProxyOptions),
  )
}
