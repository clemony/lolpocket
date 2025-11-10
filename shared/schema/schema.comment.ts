import type { fromDate, ZonedDateTime } from '@internationalized/date'
import type { HTMLContent, JSONContent } from '@tiptap/core'
import * as v from 'valibot'

// types/comments.ts

export interface Thread {
  id: UUID
  comments: UUID[]
}

export const NodeSchema = v.object({
  content: v.fallback(v.array(
    v.object({
      type: v.fallback(v.string(), 'p')
    })
  ), []),
  type: v.fallback(v.string(), 'p')
})

export const DocSchema = v.object({
  content: v.fallback(v.array(NodeSchema), []),
  type: v.fallback(v.string(), 'doc')
})

export const RemovalTypeSchema = v.picklist(['mod', 'user'])

export const commentSchema = v.object({
  author_id: v.fallback(v.pipe(v.string(), v.uuid('An author id has been slain')), 'mysterious summoner'),
  id: v.pipe(v.string(), v.uuid('Comment id malformed')),
  parent_id: v.nullable(v.pipe(v.string(), v.uuid('Parent id malformed'))),
  thread_id: v.nullable(v.pipe(v.string(), v.uuid('Thread id malformed'))),
  content: DocSchema,
  removed: v.nullable(RemovalTypeSchema),
  //
  downvotes: v.fallback(v.array(v.string()), []),
  upvotes: v.fallback(v.array(v.string()), []),
  //
  created: v.optional(v.string()),
  updated: v.optional(v.string()),
})

export type Doc = v.InferOutput<typeof DocSchema>
export type CommentSchema = v.InferOutput<typeof commentSchema>
export type CommentLog = Partial<CommentData>

export interface CommentData extends CommentSchema {
  author: {
    icon: string
    name: string
    tag: string
    puuid: UUID
  }
  replies: UUID[]
}
