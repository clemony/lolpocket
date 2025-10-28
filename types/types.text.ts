<<<<<<< HEAD
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
  content: JSONContent[]
  type: string
=======
// types/comments.ts
export interface Comment {
  id: string
  authorId: string
  content: string // tiptap JSON or HTML
  createdAt: string
  parentId?: string | null
  replies?: Comment[]
>>>>>>> refs/remotes/origin/main
}