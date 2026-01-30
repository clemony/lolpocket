import { DocSchema } from '#shared/schema'
import * as v from 'valibot'

// types/comments.ts

export const RemovalTypeSchema = v.picklist(['mod', 'user'])

export const commentSchema = v.object({
  id: v.pipe(v.string(), v.uuid('Comment id malformed')),
  parent_id: v.nullable(v.pipe(v.string(), v.uuid('Parent id malformed'))),
  thread_id: v.nullable(v.pipe(v.string(), v.uuid('Thread id malformed'))),
  uuid: v.pipe(v.string(), v.uuid('An author id has been slain')),
  //
  content: DocSchema,
  //
  created: v.pipe(v.string(), v.isoTimestamp('incorrect date format')),
  html: v.nullish(v.string()),
  removed: v.nullable(RemovalTypeSchema),
  //
  score: v.nullish(v.number()),
  updated: v.pipe(v.string(), v.isoTimestamp('incorrect date format')),
})
