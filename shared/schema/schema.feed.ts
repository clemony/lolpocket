import * as v from "valibot"

export const feedSourceSchema = v.picklist(["reddit"])

export const feedKeywordSchema = v.pipe(v.string(), v.trim(), v.minLength(1))

export const feedLinkMetadataSchema = v.object({
  authorIsBlocked: v.optional(v.boolean()),
  domain: v.optional(v.nullable(v.string())),
  isSelf: v.optional(v.boolean()),
  isVideo: v.optional(v.boolean()),
  linkFlairText: v.optional(v.nullable(v.string())),
  over18: v.optional(v.boolean()),
  postHint: v.optional(v.nullable(v.string())),
  stickied: v.optional(v.boolean()),
})

export const feedLinkSchema = v.object({
  author: v.nullable(v.string()),
  fetched_at: v.pipe(v.string(), v.isoTimestamp()),
  flair: v.nullable(v.string()),
  id: v.optional(v.string()),
  keywords: v.array(feedKeywordSchema),
  metadata: feedLinkMetadataSchema,
  num_comments: v.number(),
  permalink: v.pipe(v.string(), v.url()),
  preview_image_url: v.nullable(v.string()),
  score: v.number(),
  source: feedSourceSchema,
  source_created_at: v.pipe(v.string(), v.isoTimestamp()),
  source_id: v.pipe(v.string(), v.minLength(1)),
  subreddit: v.pipe(v.string(), v.minLength(1)),
  thumbnail_url: v.nullable(v.string()),
  title: v.pipe(v.string(), v.minLength(1)),
  updated_at: v.optional(v.string()),
  url: v.pipe(v.string(), v.url()),
})

export const feedListQuerySchema = v.object({
  keyword: v.optional(v.pipe(v.string(), v.trim(), v.minLength(1))),
  keywords: v.optional(v.array(feedKeywordSchema)),
  limit: v.optional(v.pipe(v.number(), v.minValue(1), v.maxValue(100))),
  offset: v.optional(v.pipe(v.number(), v.minValue(0))),
  subreddit: v.optional(v.pipe(v.string(), v.trim(), v.minLength(1))),
})
