/**
 * Lexical → HTML serializer for PayloadCMS rich text.
 * Server-side only — no React needed.
 */

import type { LexicalNode } from '../components/blocks/richtext/types'

export interface OverrideStyle {
  [key: string]: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function serializeLexical(
  nodes: LexicalNode[],
  overrideStyle?: OverrideStyle,
  _parentType?: string,
): string {
  if (!Array.isArray(nodes)) return ''
  return nodes.map((node) => serializeNode(node, overrideStyle)).join('')
}

function getOverrideClass(nodeType: string, overrideStyle?: OverrideStyle): string {
  if (!overrideStyle) return ''
  const cls = overrideStyle[nodeType]
  return cls ? ` class="${cls}"` : ''
}

function serializeNode(node: LexicalNode, overrideStyle?: OverrideStyle): string {
  if (!node) return ''

  switch (node.type) {
    case 'text':
      return serializeTextNode(node)
    case 'paragraph':
      return `<p${getOverrideClass('p', overrideStyle)}>${serializeLexical(node.children, overrideStyle, 'paragraph')}</p>`
    case 'heading':
      return `<${node.tag}${getOverrideClass(node.tag, overrideStyle)}>${serializeLexical(node.children, overrideStyle, 'heading')}</${node.tag}>`
    case 'list': {
      const tag = node.listType === 'number' ? 'ol' : 'ul'
      return `<${tag}>${serializeLexical(node.children, overrideStyle, 'list')}</${tag}>`
    }
    case 'listitem':
      return `<li>${serializeLexical(node.children, overrideStyle, 'listitem')}</li>`
    case 'link': {
      const rel = node.fields?.newTab ? 'noopener noreferrer' : undefined
      const target = node.fields?.newTab ? '_blank' : undefined
      const href = node.fields?.url || node.fields?.doc?.value?.slug || '#'
      return `<a href="${href}"${rel ? ` rel="${rel}"` : ''}${target ? ` target="${target}"` : ''}>${serializeLexical(node.children, overrideStyle, 'link')}</a>`
    }
    case 'quote':
      return `<blockquote>${serializeLexical(node.children, overrideStyle, 'quote')}</blockquote>`
    case 'linebreak':
      return '<br>'
    case 'upload':
      return serializeUploadNode(node)
    case 'block':
      return serializeBlockNode(node, overrideStyle)
    default:
      if (node.children) {
        return serializeLexical(node.children, overrideStyle, node.type)
      }
      return ''
  }
}

function serializeTextNode(node: LexicalNode): string {
  let text = escapeHtml(node.text || '')
  if (node.format & 1) text = `<strong>${text}</strong>`
  if (node.format & 2) text = `<em>${text}</em>`
  if (node.format & 8) text = `<u>${text}</u>`
  if (node.format & 16) text = `<s>${text}</s>`
  if (node.format & 4) text = `<code>${text}</code>`
  if (node.format & 64) text = `<sub>${text}</sub>`
  if (node.format & 128) text = `<sup>${text}</sup>`
  return text
}

function serializeUploadNode(node: LexicalNode): string {
  const value = node.value || node.fields?.value
  if (!value) return ''

  const url =
    typeof value.url === 'string'
      ? value.url
      : typeof value.filename === 'string'
        ? `/api/media/file/${value.filename}`
        : ''

  const alt = value.alt || ''
  const width = value.width
  const height = value.height

  if (value.mimeType?.startsWith('image/')) {
    return `<img src="${url}" alt="${escapeHtml(alt)}"${width ? ` width="${width}"` : ''}${height ? ` height="${height}"` : ''} loading="lazy">`
  }
  if (value.mimeType?.startsWith('video/')) {
    return `<video src="${url}" controls></video>`
  }

  return `<a href="${url}" download>${escapeHtml(value.filename || 'Download')}</a>`
}

function serializeBlockNode(node: LexicalNode, overrideStyle?: OverrideStyle): string {
  const fields = node.fields || {}
  const blockType = fields.blockType

  if (blockType === 'banner') {
    const style = fields.style || 'info'
    const styleClass =
      {
        info: 'border-blue-200 bg-blue-50 text-blue-900',
        warning: 'border-yellow-200 bg-yellow-50 text-yellow-900',
        error: 'border-red-200 bg-red-50 text-red-900',
        success: 'border-green-200 bg-green-50 text-green-900',
      }[style] || 'border-blue-200 bg-blue-50 text-blue-900'

    return `<div class="rounded-md border px-4 py-3 ${styleClass}">${serializeLexical(fields.content?.root?.children || [], overrideStyle)}</div>`
  }

  return ''
}

/**
 * Convert a full Payload richText object to HTML.
 */
export function richTextToHtml(richText: any, overrideStyle?: OverrideStyle): string {
  if (!richText || typeof richText !== 'object') return ''
  const children = richText.root?.children
  if (!Array.isArray(children)) return ''
  return serializeLexical(children, overrideStyle)
}
