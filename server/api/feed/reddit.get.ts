import type { FeedLink, FeedListQuery, FeedListResponse } from "#shared/types"
import { feedLinkSchema, feedListQuerySchema } from "#shared/schema"
import type { H3Event } from "h3"
import * as v from "valibot"
import { supabaseAdminRequest } from "~~/server/utils/supabase/admin"

function normalizeFeedListQuery(event: H3Event): FeedListQuery {
  const query = getQuery(event)
  const rawKeywords =
    typeof query.keywords === "string" ?
      query.keywords.split(",")
    : Array.isArray(query.keywords) ?
      query.keywords.flatMap((value) => String(value).split(","))
    : []

  const parsed = v.parse(feedListQuerySchema, {
    keywords:
      rawKeywords.length > 0 ?
        rawKeywords
          .map((keyword) => keyword.trim().toLowerCase())
          .filter(Boolean)
      : undefined,
    limit:
      typeof query.limit === "string" ? Number.parseInt(query.limit, 10)
      : undefined,
    offset:
      typeof query.offset === "string" ? Number.parseInt(query.offset, 10)
      : undefined,
    keyword:
      typeof query.keyword === "string" ? query.keyword.trim().toLowerCase()
      : typeof query.k === "string" ? query.k.trim().toLowerCase()
      : undefined,
    subreddit:
      typeof query.subreddit === "string" ? query.subreddit : "leagueoflegends",
  })

  return {
    keyword: parsed.keyword,
    keywords:
      parsed.keywords && parsed.keywords.length > 0 ? parsed.keywords : undefined,
    limit: parsed.limit ?? 25,
    offset: parsed.offset ?? 0,
    subreddit: parsed.subreddit,
  }
}

export default defineEventHandler(async (event): Promise<FeedListResponse> => {
  const query = normalizeFeedListQuery(event)

  const keywordFilters = [
    ...(query.keyword ? [query.keyword] : []),
    ...(query.keywords ?? []),
  ]
  const rangeStart = Math.max(query.offset ?? 0, 0)
  const rangeEnd = rangeStart + Math.max((query.limit ?? 25) - 1, 0)
  const params: Record<string, string | undefined> = {
    limit: String(query.limit ?? 25),
    offset: String(rangeStart),
    order: "source_created_at.desc",
    source: "eq.reddit",
    subreddit: `eq.${query.subreddit ?? "leagueoflegends"}`,
  }

  if (keywordFilters.length === 1) {
    params.keywords = `cs.{${keywordFilters[0]}}`
  }
  else if (keywordFilters.length > 1) {
    params.keywords = `ov.{${keywordFilters.join(",")}}`
  }

  const { countHeader, data } = await supabaseAdminRequest<FeedLink[]>("feed_links", {
    headers: {
      Prefer: "count=exact",
      Range: `${rangeStart}-${rangeEnd}`,
    },
    query: params,
  })

  const items: FeedLink[] = []

  for (const item of data ?? []) {
    const parsed = v.safeParse(feedLinkSchema, item)
    if (parsed.success) items.push(parsed.output)
  }

  return {
    items,
    total: parseCountHeader(countHeader) ?? items.length,
  }
})

function parseCountHeader(contentRange: string | null) {
  if (!contentRange) return null

  const total = contentRange.split("/")[1]
  if (!total) return null

  const parsed = Number.parseInt(total, 10)
  return Number.isFinite(parsed) ? parsed : null
}
