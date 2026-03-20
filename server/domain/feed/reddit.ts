import type { FeedLink, FeedRefreshResponse } from "#shared/types"
import { Buffer } from "node:buffer"
import { decode } from "html-entities"
import { supabaseAdminRequest } from "~~/server/utils/supabase/admin"
import { deriveFeedKeywords } from "./keywords"

const REDDIT_FEED_MIN_COMMENTS = 30
const REDDIT_FEED_MIN_SCORE = 100
const REDDIT_EXCERPT_MAX_LENGTH = 400
const REDDIT_URL_RE = /^https?:\/\//
const MARKDOWN_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g
const MARKDOWN_IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g
const LEADING_FORMATTING_RE = /^[>#\s-]+/gm
const ORDERED_LIST_RE = /^\d+\.\s+/gm
const MARKDOWN_STYLE_RE = /[*_~`]+/g
const WHITESPACE_RE = /\s+/g

interface RedditAccessTokenResponse {
  access_token: string
  expires_in: number
  scope: string
  token_type: string
}

interface RedditListingChild {
  data: RedditPost
}

interface RedditListingResponse {
  data: {
    children: RedditListingChild[]
  }
}

interface RedditPost {
  author: string
  author_is_blocked?: boolean
  created_utc: number
  domain?: string
  id: string
  is_self: boolean
  is_video: boolean
  link_flair_text: string | null
  num_comments: number
  over_18: boolean
  permalink: string
  post_hint?: string
  preview?: {
    images?: Array<{
      source?: {
        url?: string
      }
    }>
  }
  score: number
  selftext?: string
  stickied: boolean
  subreddit: string
  thumbnail?: string
  title: string
  url: string
  url_overridden_by_dest?: string
}

interface RedditListingSpec {
  limit: number
  sort: "hot" | "new" | "top"
  time?: "day"
}

let cachedToken:
  | {
      accessToken: string
      expiresAt: number
    }
  | undefined

function decodeRedditUrl(url?: string | null) {
  if (!url || !REDDIT_URL_RE.test(url)) return null

  return decodeRedditText(url)
}

function decodeRedditText(value?: string | null) {
  if (!value) return null

  return decode(value)
}

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) return value

  const sliced = value.slice(0, maxLength + 1)
  const boundary = sliced.lastIndexOf(" ")

  if (boundary < Math.floor(maxLength * 0.6)) {
    return `${value.slice(0, maxLength).trim()}...`
  }

  return `${sliced.slice(0, boundary).trim()}...`
}

function createRedditExcerpt(selftext?: string | null) {
  const decoded = decodeRedditText(selftext)
  if (!decoded) return null

  const text = decoded
    .replace(MARKDOWN_LINK_RE, "$1")
    .replace(MARKDOWN_IMAGE_RE, "$1")
    .replace(LEADING_FORMATTING_RE, "")
    .replace(ORDERED_LIST_RE, "")
    .replace(MARKDOWN_STYLE_RE, "")
    .replace(WHITESPACE_RE, " ")
    .trim()

  if (!text) return null

  return truncateText(text, REDDIT_EXCERPT_MAX_LENGTH)
}

function shouldPersistRedditPost(item: FeedLink) {
  return (
    item.score >= REDDIT_FEED_MIN_SCORE &&
    item.num_comments >= REDDIT_FEED_MIN_COMMENTS
  )
}

async function getRedditAccessToken() {
  const config = useRuntimeConfig()

  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.accessToken
  }

  if (!config.REDDIT_CLIENT_ID || !config.REDDIT_CLIENT_SECRET) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing Reddit OAuth runtime config"
    })
  }

  const auth = Buffer.from(
    `${config.REDDIT_CLIENT_ID}:${config.REDDIT_CLIENT_SECRET}`
  ).toString("base64")

  const body = new URLSearchParams({
    grant_type: "client_credentials"
  }).toString()

  const token = await $fetch<RedditAccessTokenResponse>(
    "https://www.reddit.com/api/v1/access_token",
    {
      body,
      headers: {
        authorization: `Basic ${auth}`,
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": config.REDDIT_USER_AGENT
      },
      method: "POST"
    }
  )

  cachedToken = {
    accessToken: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000
  }

  return token.access_token
}

async function fetchRedditListing(
  subreddit: string,
  spec: RedditListingSpec
): Promise<FeedLink[]> {
  const config = useRuntimeConfig()
  const token = await getRedditAccessToken()
  const listing = await $fetch<RedditListingResponse>(
    `https://oauth.reddit.com/r/${subreddit}/${spec.sort}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        "user-agent": config.REDDIT_USER_AGENT
      },
      query: {
        limit: spec.limit,
        raw_json: 1,
        t: spec.time
      }
    }
  )

  return listing.data.children
    .map(({ data }) => normalizeRedditPost(data))
    .filter((item): item is FeedLink => item !== null)
}

function normalizeRedditPost(post: RedditPost): FeedLink | null {
  const permalink = decodeRedditUrl(`https://www.reddit.com${post.permalink}`)
  const url = decodeRedditUrl(post.url_overridden_by_dest ?? post.url)
  const preview = decodeRedditUrl(post.preview?.images?.[0]?.source?.url)
  const thumbnail = decodeRedditUrl(post.thumbnail)

  if (!permalink || !url) return null

  return {
    author: post.author || null,
    excerpt: post.is_self ? createRedditExcerpt(post.selftext) : null,
    fetched_at: new Date().toISOString(),
    flair: post.link_flair_text,
    keywords: deriveFeedKeywords({
      flair: post.link_flair_text,
      subreddit: post.subreddit,
      title: post.title
    }),
    metadata: {
      authorIsBlocked: post.author_is_blocked,
      domain: post.domain ?? null,
      isSelf: post.is_self,
      isVideo: post.is_video,
      linkFlairText: post.link_flair_text,
      over18: post.over_18,
      postHint: post.post_hint ?? null,
      stickied: post.stickied
    },
    num_comments: post.num_comments ?? 0,
    permalink,
    preview_image_url: preview,
    score: post.score ?? 0,
    source: "reddit",
    source_created_at: new Date(post.created_utc * 1000).toISOString(),
    source_id: post.id,
    subreddit: post.subreddit,
    thumbnail_url: thumbnail,
    title: post.title,
    url: post.is_self ? permalink : url
  }
}

function dedupeFeedLinks(items: FeedLink[]) {
  const byId = new Map<string, FeedLink>()

  for (const item of items) {
    byId.set(`${item.source}:${item.source_id}`, item)
  }

  return [...byId.values()].sort((a, b) =>
    a.source_created_at < b.source_created_at ? 1 : -1
  )
}

export async function fetchLeagueofLegendsRedditFeed() {
  const subreddit = "leagueoflegends"
  const [recent, top] = await Promise.all([
    fetchRedditListing(subreddit, { limit: 50, sort: "new" }),
    fetchRedditListing(subreddit, { limit: 50, sort: "top", time: "day" })
  ])

  return dedupeFeedLinks([...recent, ...top])
}

export async function refreshLeagueofLegendsRedditFeed(): Promise<FeedRefreshResponse> {
  const fetchedItems = await fetchLeagueofLegendsRedditFeed()
  const items = fetchedItems.filter(shouldPersistRedditPost)
  const cleanedBefore = new Date(
    Date.now() - 90 * 24 * 60 * 60 * 1000
  ).toISOString()

  await supabaseAdminRequest<FeedLink[]>("feed_links", {
    body: JSON.stringify(items),
    headers: {
      Prefer: "resolution=merge-duplicates,return=minimal"
    },
    method: "POST",
    query: {
      on_conflict: "source,source_id"
    }
  })

  const { data: deletedRows } = await supabaseAdminRequest<
    Array<{ id: string }>
  >("feed_links", {
    headers: {
      Prefer: "return=representation"
    },
    method: "DELETE",
    query: {
      source_created_at: `lt.${cleanedBefore}`
    }
  })

  return {
    cleanedBefore,
    deletedCount: deletedRows?.length ?? 0,
    fetchedCount: fetchedItems.length,
    sources: ["reddit:new", "reddit:top:day"],
    upsertedCount: items.length
  }
}
