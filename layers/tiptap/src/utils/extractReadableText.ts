import type { JSONContent } from '@tiptap/core'

export function extractReadableText(content: JSONContent): string {
  let text = ''

  function traverse(node: JSONContent) {
    if (!node)
      return

    // If this node contains text
    if (node.text)
      text += node.text

    // If this node is an emoji (e.g. { type: 'emoji', attrs: { name: 'smile' } })
    if (node.type === 'emoji' && node.attrs?.name)
      text += `:${node.attrs.name}:`

    // If this node is a mention (with data-name)
    if (node.type === 'mentions' && node.attrs?.['data-name'])
      text += `@${node.attrs['data-name']}`

    // Recurse into children
    if (node.content)
      node.content.forEach(traverse)
  }

  traverse(content)
  return text.trim()
}
