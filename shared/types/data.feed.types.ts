export type FeedSource = "reddit"
export type FeedVideoProvider = "reddit" | "youtube"

export interface FeedLinkMetadata {
  authorIsBlocked?: boolean
  domain?: string | null
  isSelf?: boolean
  isVideo?: boolean
  linkFlairText?: string | null
  over18?: boolean
  postHint?: string | null
  stickied?: boolean
}

export interface FeedLink {
  author: string | null
  excerpt: string | null
  fetched_at: string
  flair: string | null
  id?: string
  keywords: string[]
  metadata: FeedLinkMetadata
  num_comments: number
  permalink: string
  preview_image_url: string | null
  score: number
  source: FeedSource
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
  video_provider?: FeedVideoProvider | null
  video_url?: string | null
  video_width?: number | null
}

export interface FeedListQuery {
  keyword?: string
  keywords?: string[]
  limit?: number
  offset?: number
  subreddit?: string
}

export interface FeedListResponse {
  items: FeedLink[]
  total: number
}

export interface FeedRefreshResponse {
  cleanedBefore: string
  deletedCount: number
  fetchedCount: number
  sources: string[]
  upsertedCount: number
}
