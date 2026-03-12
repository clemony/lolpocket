import type { FeedLink, FeedRefreshResponse } from "#shared/types"
import { deriveFeedKeywords } from "./keywords"
import { supabaseAdminRequest } from "~~/server/utils/supabase/admin"

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
  stickied: boolean
  subreddit: string
  thumbnail?: string
  title: string
  url: string
  url_overridden_by_dest?: string
}

interface RedditListingSpec {
  limit: number
  sort: "new" | "top"
  time?: "day"
}

let cachedToken:
  | {
      accessToken: string
      expiresAt: number
    }
  | undefined

function decodeRedditUrl(url?: string | null) {
  if (!url || !/^https?:\/\//.test(url)) return null

  return url.replace(/&amp;/g, "&")
}

async function getRedditAccessToken() {
  const config = useRuntimeConfig()

  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.accessToken
  }

  if (!config.REDDIT_CLIENT_ID || !config.REDDIT_CLIENT_SECRET) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing Reddit OAuth runtime config",
    })
  }

  const auth = Buffer.from(
    `${config.REDDIT_CLIENT_ID}:${config.REDDIT_CLIENT_SECRET}`,
  ).toString("base64")

  const body = new URLSearchParams({
    grant_type: "client_credentials",
  }).toString()

  const token = await $fetch<RedditAccessTokenResponse>(
    "https://www.reddit.com/api/v1/access_token",
    {
      body,
      headers: {
        authorization: `Basic ${auth}`,
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": config.REDDIT_USER_AGENT,
      },
      method: "POST",
    },
  )

  cachedToken = {
    accessToken: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000,
  }

  return token.access_token
}

async function fetchRedditListing(
  subreddit: string,
  spec: RedditListingSpec,
): Promise<FeedLink[]> {
  const config = useRuntimeConfig()
  const token = await getRedditAccessToken()
  const listing = await $fetch<RedditListingResponse>(
    `https://oauth.reddit.com/r/${subreddit}/${spec.sort}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        "user-agent": config.REDDIT_USER_AGENT,
      },
      query: {
        limit: spec.limit,
        raw_json: 1,
        t: spec.time,
      },
    },
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
    fetched_at: new Date().toISOString(),
    flair: post.link_flair_text,
    keywords: deriveFeedKeywords({
      flair: post.link_flair_text,
      subreddit: post.subreddit,
      title: post.title,
    }),
    metadata: {
      authorIsBlocked: post.author_is_blocked,
      domain: post.domain ?? null,
      isSelf: post.is_self,
      isVideo: post.is_video,
      linkFlairText: post.link_flair_text,
      over18: post.over_18,
      postHint: post.post_hint ?? null,
      stickied: post.stickied,
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
    url: post.is_self ? permalink : url,
  }
}

function dedupeFeedLinks(items: FeedLink[]) {
  const byId = new Map<string, FeedLink>()

  for (const item of items) {
    byId.set(`${item.source}:${item.source_id}`, item)
  }

  return [...byId.values()].sort((a, b) =>
    a.source_created_at < b.source_created_at ? 1 : -1,
  )
}

export async function fetchLeagueofLegendsRedditFeed() {
  const subreddit = "leagueoflegends"
  const [recent, top] = await Promise.all([
    fetchRedditListing(subreddit, { limit: 50, sort: "new" }),
    fetchRedditListing(subreddit, { limit: 50, sort: "top", time: "day" }),
  ])

  return dedupeFeedLinks([...recent, ...top])
}

export async function refreshLeagueofLegendsRedditFeed(): Promise<FeedRefreshResponse> {
  const items = await fetchLeagueofLegendsRedditFeed()
  const cleanedBefore = new Date(
    Date.now() - 90 * 24 * 60 * 60 * 1000,
  ).toISOString()

  await supabaseAdminRequest<FeedLink[]>("feed_links", {
    body: JSON.stringify(items),
    headers: {
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    method: "POST",
    query: {
      on_conflict: "source,source_id",
    },
  })

  const { data: deletedRows } = await supabaseAdminRequest<Array<{ id: string }>>(
    "feed_links",
    {
      headers: {
        Prefer: "return=representation",
      },
      method: "DELETE",
      query: {
        source_created_at: `lt.${cleanedBefore}`,
      },
    },
  )

  return {
    cleanedBefore,
    deletedCount: deletedRows?.length ?? 0,
    fetchedCount: items.length,
    sources: ["reddit:new", "reddit:top:day"],
    upsertedCount: items.length,
  }
}
