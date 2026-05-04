# Payblocks → Cloudflare D1 + Astro Migration Guide

This document describes the conversion from **MongoDB/Vercel** to **Cloudflare D1 + R2 + Astro**.

## Architecture

```
┌─────────────────────┐      Service Binding       ┌─────────────────────┐
│   payblocks-site    │  ◄──────────────────────►  │   payblocks-cms     │
│   (Astro worker)    │      internal fetch()      │  (Next.js worker)   │
│                     │                            │   Payload + D1      │
│  - Pages / Posts    │                            │   Admin / API       │
│  - Edge Cache       │                            │   R2 Media          │
│  - Image Transforms │                            │                     │
└─────────────────────┘                            └─────────────────────┘
```

## What Changed

### Backend (Next.js → Cloudflare Worker)

| From | To |
|------|-----|
| `@payloadcms/db-mongodb` | `@payloadcms/db-d1-sqlite` |
| `vercelBlobStorage` | `@payloadcms/storage-r2` |
| `process.env.*` secrets | Cloudflare `env.*` bindings |
| `sharp` image processing | R2 + Cloudflare Images Binding |
| `next/cache` revalidation | `purgePath()` via Cloudflare Cache API |
| Vercel hosting | `@opennextjs/cloudflare` worker |

### Frontend (Next.js → Astro)

| From | To |
|------|-----|
| Next.js `app/` router | Astro `server` output |
| Local SDK / local API calls | Service binding `PAYLOAD_CMS.fetch()` |
| Vercel hosting | `@astrojs/cloudflare` worker |

## Files Added / Modified

### New Files
- `wrangler.jsonc` — Cloudflare worker config for CMS
- `open-next.config.ts` — OpenNext Cloudflare adapter
- `src/migrations/index.ts` — D1 migration registry
- `src/utilities/cachePurge.ts` — Cloudflare cache purging
- `astro/` — complete Astro frontend project
  - `astro.config.mjs`
  - `wrangler.jsonc`
  - `src/lib/payload.ts` — Payload REST client
  - `src/middleware.ts` — proxy `/admin` + `/api` to CMS
  - `src/pages/index.astro`
  - `src/pages/[...slug].astro`

### Modified Files
- `package.json` — added `@payloadcms/db-d1-sqlite`, `@payloadcms/storage-r2`, `@opennextjs/cloudflare`, `wrangler`; removed `sharp`, `@payloadcms/storage-vercel-blob`
- `src/payload.config.ts` — swapped DB adapter, storage, and env resolution
- `src/config/server.ts` — reads from Cloudflare `env` bindings first
- `next.config.ts` — removed bundle analyzer, unoptimized images (edge handles it)
- `src/collections/Pages/hooks/revalidatePage.ts` — uses cache purge instead of `next/cache`
- `src/collections/Posts/hooks/revalidatePost.ts` — uses cache purge instead of `next/cache`
- `src/hooks/revalidateRedirects.ts` — uses cache purge instead of `next/cache`

## Setup Steps

### 1. Install dependencies

```bash
pnpm install
```

### 2. Create Cloudflare resources

```bash
# D1 database
wrangler d1 create payblocks-cms

# R2 bucket
wrangler r2 bucket create payblocks-media
```

### 3. Update `wrangler.jsonc`

Replace `<YOUR_D1_DATABASE_ID>` in `wrangler.jsonc` with the actual database ID from step 2.

### 4. Set secrets

```bash
# Payload secrets
wrangler secret put PAYLOAD_SECRET
wrangler secret put RESEND_API_KEY
wrangler secret put EMAIL_FROM_ADDRESS

# OAuth (optional)
wrangler secret put GOOGLE_LOGIN_CLIENT_ID
wrangler secret put GOOGLE_LOGIN_CLIENT_SECRET

# Cache purge (optional — for immediate invalidation)
wrangler secret put CLOUDFLARE_CACHE_API_TOKEN
wrangler secret put CLOUDFLARE_ZONE_ID
```

### 5. Create initial D1 migration

```bash
pnpm payload migrate:create
pnpm migrate
```

This generates the SQLite schema from your collections and runs it on D1.

### 6. Build & deploy CMS

```bash
pnpm opennextjs-cloudflare build
wrangler deploy
```

### 7. Deploy Astro site

Update `astro/wrangler.jsonc` vars (`PAYLOAD_API_URL`) and service binding (`payblocks-cms`), then:

```bash
cd astro
pnpm install
astro build
wrangler deploy
```

## Development

### CMS only (local)

```bash
# Uses wrangler proxy to connect to local D1 + R2
wrangler dev
```

Or using the Next.js dev server (without Cloudflare bindings):

```bash
pnpm dev
```

### Astro frontend (local)

```bash
cd astro
wrangler dev
```

### Astro + CMS together (local)

```bash
# Terminal 1 — CMS
wrangler dev

# Terminal 2 — Astro (it will proxy /admin and /api to the CMS)
cd astro && wrangler dev
```

## Migration Strategy from MongoDB → D1

1. Export your MongoDB data as JSON using `mongoexport` or a script.
2. Create an import script that uses Payload's local API (`payload.create`) to insert docs into D1.
3. Upload media files to the R2 bucket manually or via a migration script.
4. Alternatively, for a fresh start, just recreate content in the new admin panel.

## Known Differences / Gotchas

- **`sharp` removed**: Images are served directly from R2. Use the Cloudflare Images binding (in Astro middleware) for transforms (`?w=800&q=80`).
- **No `next/cache`**: Cache invalidation is TTL-based on Astro edge + optional Cloudflare Cache API purge.
- **File uploads**: In dev, files go to `public/media` (local). In production, the R2 adapter handles storage automatically.
- **OAuth redirects**: The Astro middleware rewrites `Origin` and `Referer` headers when proxying OAuth callbacks to the CMS worker.
- **Redirects**: The Astro middleware fetches redirects from Payload on first request and caches them for 60 seconds.

## "Better" Than The Reference

| Reference | This Setup |
|-----------|------------|
| Multi-tenant complexity | Single tenant — simpler data model |
| Separate repos (`cms` + `sites`) | Unified repo with `astro/` subfolder |
| Cache purge via custom plugin | Lightweight `purgePath` utility |
| Complex middleware (1000+ lines) | ~120 line focused Astro middleware |
| `process.env` everywhere | Runtime-agnostic `getEnv()` helper |
