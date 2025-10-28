import type { fromDate, ZonedDateTime } from '@internationalized/date'
import type { HTMLContent, JSONContent } from '@tiptap/core'

// types/comments.ts
export interface CommentItem {
  authorPuuid: string
  id: string
  authorIcon: string
  authorName: string
  authorTag: string
  content: Doc
  createdAt: string
  editedAt: string | null
  parentId?: string | null
  replies?: CommentItem[]
}

export interface Doc {
    type: string
    content: JSONContent[]
  }