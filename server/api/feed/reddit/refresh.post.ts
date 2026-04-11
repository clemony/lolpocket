import type { PostRefreshResponse } from "#shared/types"
import type { H3Event } from "h3"
import { refreshLeagueofLegendsRedditFeed } from "~~/server/domain/feed/reddit"

function assertPostRefreshSecret(event: H3Event) {
  const config = useRuntimeConfig()
  const expected = config.FEED_REFRESH_SECRET

  if (!expected) {
    if (import.meta.dev) return

    throw createError({
      statusCode: 500,
      statusMessage: "Missing FEED_REFRESH_SECRET runtime config"
    })
  }

  const provided = getHeader(event, "x-feed-refresh-secret")

  if (provided !== expected) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid feed refresh secret"
    })
  }
}

export default defineEventHandler(
  async (event): Promise<PostRefreshResponse> => {
    assertPostRefreshSecret(event)
    return await refreshLeagueofLegendsRedditFeed()
  }
)
