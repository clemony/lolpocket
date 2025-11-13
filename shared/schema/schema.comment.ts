import * as v from "valibot"

// types/comments.ts

export const RemovalTypeSchema = v.picklist(["mod", "user"])

export const commentSchema = v.object({
  author_id: v.pipe(v.string(), v.uuid("An author id has been slain")),
  id: v.pipe(v.string(), v.uuid("Comment id malformed")),
  parent_id: v.nullable(v.pipe(v.string(), v.uuid("Parent id malformed"))),
  thread_id: v.nullable(v.pipe(v.string(), v.uuid("Thread id malformed"))),
  //
  content: DocSchema,
  html: v.nullish(v.string()),
  //
  score: v.nullish(v.number()),
  //
  created: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  removed: v.nullable(RemovalTypeSchema),
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
