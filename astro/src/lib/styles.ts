/**
 * Shared style utilities mapping CMS field values to DaisyUI Tailwind classes.
 * Used by both Astro components and React islands.
 */

/**
 * DaisyUI semantic colors that have a matching `-content` counterpart.
 * When these are used as backgrounds, text must use the `-content` variant
 * for proper contrast.
 */
const COLORED_BACKGROUNDS = new Set([
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
])

/**
 * Maps CMS sectionSpacing field to Tailwind padding classes.
 * Falls back to the provided defaultSpacing if no value set.
 *
 * Values:
 *   none    → py-0
 *   compact → py-16 md:py-20
 *   default → py-20 md:py-28 lg:py-32
 *   large   → py-24 md:py-32 lg:py-40
 *   xl      → py-32 md:py-40 lg:py-48
 */
export function sectionSpacingClass(
  spacing?: string | null,
  defaultSpacing: string = 'default',
): string {
  const v = spacing || defaultSpacing
  return (
    {
      none: 'py-0',
      compact: 'py-16 md:py-20',
      default: 'py-20 md:py-28 lg:py-32',
      large: 'py-24 md:py-32 lg:py-40',
      xl: 'py-32 md:py-40 lg:py-48',
    }[v] ?? 'py-20 md:py-28 lg:py-32'
  )
}

/**
 * Returns the correct text color class for a given background color.
 * Handles DaisyUI auto-contrast: if bg is 'primary', text becomes 'text-primary-content'.
 * For base-* backgrounds, returns 'text-base-content'.
 */
export function autoContrastText(backgroundColor?: string | null): string {
  if (!backgroundColor || backgroundColor === 'transparent') return 'text-base-content'
  if (COLORED_BACKGROUNDS.has(backgroundColor)) return `text-${backgroundColor}-content`
  return 'text-base-content'
}

/**
 * Builds the standard section wrapper classes: background + spacing + text contrast.
 * Use this in block components to get consistent section styling.
 *
 * @example
 * ```astro
 * <section class:list={[sectionClasses(backgroundColor, sectionSpacing)]}>
 * ```
 */
export function sectionClasses(
  backgroundColor?: string | null,
  spacing?: string | null,
  defaultSpacing: string = 'default',
): string {
  const bg = backgroundColor ? `bg-${backgroundColor}` : ''
  const text = autoContrastText(backgroundColor)
  const pad = sectionSpacingClass(spacing, defaultSpacing)
  return `${bg} ${text} ${pad}`
}

/**
 * Returns prose modifier class for colored backgrounds.
 * Lexical rich text rendered inside <div class="prose"> needs `prose-invert`
 * (or the DaisyUI equivalent) when on a colored background.
 */
export function proseContrastClass(backgroundColor?: string | null): string {
  if (!backgroundColor) return ''
  if (COLORED_BACKGROUNDS.has(backgroundColor)) return 'prose-invert'
  return ''
}

/**
 * Returns muted text class that works on both base and colored backgrounds.
 * On base-* backgrounds: text-base-content/60
 * On colored backgrounds: text-{color}-content/80
 */
export function mutedTextClass(backgroundColor?: string | null): string {
  if (!backgroundColor || backgroundColor === 'transparent') return 'text-base-content/60'
  if (COLORED_BACKGROUNDS.has(backgroundColor)) return `text-${backgroundColor}-content/80`
  return 'text-base-content/60'
}

/**
 * Maps CMS cardStyle group fields to DaisyUI Tailwind classes.
 * Used by Feature USPs, DirectoryGrid cards, etc.
 */
export function buildCardClasses(
  cardStyle?: {
    background?: string | null
    border?: string | null
    radius?: string | null
    shadow?: string | null
    padding?: string | null
    textSize?: string | null
  } | null,
): string {
  if (!cardStyle) {
    return 'bg-base-200/60 rounded-xl p-6 border border-base-content/5'
  }

  const bg =
    {
      'base-200': 'bg-base-200',
      'base-100': 'bg-base-100',
      'base-300': 'bg-base-300',
      primary: 'bg-primary text-primary-content',
      transparent: 'bg-transparent',
      glass: 'glass-md',
    }[cardStyle.background ?? 'base-200'] ?? `bg-${cardStyle.background ?? 'base-200'}`

  const border =
    {
      none: '',
      subtle: 'border border-base-content/10',
      default: 'border border-base-content/20',
    }[cardStyle.border ?? 'none'] ?? ''

  const radius =
    {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    }[cardStyle.radius ?? 'xl'] ?? 'rounded-xl'

  const shadow =
    {
      none: '',
      hover: 'shadow-hover-lift',
      sm: 'shadow-layered-sm',
      md: 'shadow-layered-md',
    }[cardStyle.shadow ?? 'none'] ?? ''

  const padding =
    {
      sm: 'p-4',
      md: 'p-5',
      lg: 'p-6',
      xl: 'p-8',
      '2xl': 'p-10',
    }[cardStyle.padding ?? 'md'] ?? 'p-6'

  const textSize =
    {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    }[cardStyle.textSize ?? 'sm'] ?? 'text-sm'

  return [bg, border, radius, shadow, padding, textSize].filter(Boolean).join(' ')
}

/**
 * Maps CMS link appearance and size to DaisyUI button classes.
 */
export function buildButtonClasses(appearance?: string | null, size?: string | null): string {
  if (appearance === 'inline') {
    return ''
  }

  const baseClass =
    {
      default: 'btn btn-primary',
      primary: 'btn btn-primary',
      outline: 'btn btn-outline',
      ghost: 'btn btn-ghost',
      secondary: 'btn btn-secondary',
      destructive: 'btn btn-error',
    }[appearance ?? 'default'] ?? 'btn btn-primary'

  const sizeClass =
    {
      default: '',
      sm: 'btn-sm',
      lg: 'btn-lg',
      icon: 'btn-circle btn-sm',
      clear: '',
    }[size ?? 'default'] ?? ''

  return [baseClass, sizeClass].filter(Boolean).join(' ')
}

/**
 * Resolve a CMS link to an href string.
 * Handles both 'reference' (internal page) and 'custom' (external URL) link types.
 */
export function resolveLinkUrl(
  link?: {
    type?: string | null
    reference?: {
      value?: { slug?: string; breadcrumbs?: Array<{ url?: string }> } | string | number | null
    } | null
    url?: string | null
    section?: string | null
  } | null,
): string {
  if (!link) return '#'

  if (link.type === 'reference' && link.reference?.value) {
    const ref = link.reference.value
    if (typeof ref === 'object' && ref !== null) {
      // Prefer breadcrumb URL if available (handles nested slugs)
      const breadcrumbs = ref.breadcrumbs
      if (breadcrumbs && breadcrumbs.length > 0) {
        const lastCrumb = breadcrumbs[breadcrumbs.length - 1]
        if (lastCrumb?.url) {
          const base = lastCrumb.url
          return link.section ? `${base}#${link.section}` : base
        }
      }

      // Fall back to slug
      const slug = ref.slug
      if (slug) {
        const base = slug === 'home' ? '/' : `/${slug}`
        return link.section ? `${base}#${link.section}` : base
      }
    }
  }

  if (link.type === 'custom' && link.url) {
    return link.url
  }

  // Fallback: try url field directly
  return link.url ?? '#'
}

/**
 * Resolve a media URL to a full URL.
 */
export function resolveMediaUrl(url?: string | null): string {
  if (!url) return ''
  if (/^https?:\/\//.test(url)) return url
  const origin = import.meta.env.PAYLOAD_API_URL || 'https://payblocks-cms.agenticflows.workers.dev'
  return `${origin}${url.startsWith('/') ? url : `/${url}`}`
}
