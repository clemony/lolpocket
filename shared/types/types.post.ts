import type { UseMediaControlsReturn } from "@vueuse/core"
import type * as v from "valibot"

export type PostVideoProvider = "reddit" | "youtube"
export type PostSource = "reddit"

export interface PostMetadata {
  authorIsBlocked?: boolean
  domain?: string | null
  isSelf?: boolean
  isVideo?: boolean
  linkFlairText?: string | null
  over18?: boolean
  postHint?: string | null
  stickied?: boolean
}

export interface Post {
  author: string | null
  excerpt: string | null
  text: string | null
  fetched_at: string
  flair: string | null
  id?: string
  keywords: string[]
  metadata: PostMetadata
  num_comments: number
  permalink: string
  preview_image_url: string | null
  score: number
  source: PostSource
  video_provider?: PostVideoProvider | null
  source_created_at: string
  source_id: string
  subreddit: string
  thumbnail_url: string | null
  title: string
  updated_at?: string
  url: string
  video_dash_url?: string | null
  video_duration?: number | null
  video_height?: number | null
  video_hls_url?: string | null
  video_id?: string | null
  video_url?: string | null
  video_width?: number | null
}

export interface PostListQuery {
  keyword?: string
  keywords?: string[]
  limit?: number
  offset?: number
  subreddit?: string
}

export interface PostListResponse {
  items: Post[]
  total: number
}

export interface PostRefreshResponse {
  cleanedBefore: string
  deletedCount: number
  fetchedCount: number
  sources: string[]
  upsertedCount: number
}
