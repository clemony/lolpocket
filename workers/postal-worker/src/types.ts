export interface Env {
  POSTAL_CACHE: KVNamespace
  POSTAL_LOCALE?: string
  POSTAL_REFRESH_SECRET?: string
  REDDIT_CLIENT_ID?: string
  REDDIT_CLIENT_SECRET?: string
  REDDIT_USER_AGENT?: string
}

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
  keywords: string[]
  metadata: PostMetadata
  num_comments: number
  permalink: string
  preview_image_url: string | null
  score: number
  source: PostSource
  source_created_at: string
  source_id: string
  subreddit: string
  thumbnail_url: string | null
  title: string
  url: string
  video_dash_url?: string | null
  video_duration?: number | null
  video_height?: number | null
  video_hls_url?: string | null
  video_id?: string | null
  video_provider?: PostVideoProvider | null
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

export interface MetadataPayload {
  fetchedAt: string
  locale: string
  metadata: {
    author: string | null
    date: string | null
    description: string | null
    image: string | null
    title: string | null
    url: string | null
  }
  url: string
}

export interface PbeMeta extends MetadataPayload {
  wikiLastModified: string | null
}

export interface PatchNotesMeta extends MetadataPayload {
  patch: string
  riotSlug: string
}
