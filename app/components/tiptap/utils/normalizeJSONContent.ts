import type { JSONContent } from '@tiptap/vue-3'

export function normalizeJSONContent(jsonContent: JSONContent) {
  return Array.isArray(jsonContent)
    ? { content: jsonContent, type: 'doc' }
    : jsonContent
}