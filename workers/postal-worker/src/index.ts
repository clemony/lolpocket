import { getCachedJson, putCachedJson, readCachedString } from "./lib/kv"
import {
  badRequest,
  json,
  methodNotAllowed,
  notFound,
  unauthorized
} from "./lib/response"
import type {
  ManualRefreshTarget,
  StoredPatchNotesMeta,
  StoredPbeMeta
} from "./meta/service"
import { refreshPatchNotesMeta, refreshPbeMeta } from "./meta/service"
import type { StoredRedditFeed } from "./reddit/service"
import {
  filterFeedItems,
  parseFeedQuery,
  refreshLeagueOfLegendsRedditFeed
} from "./reddit/service"
import type { Env } from "./types"

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url)

    if (request.method === "GET") {
      if (url.pathname === "/api/feed/reddit") {
        return await handleRedditFeedRequest(url, env)
      }

      if (url.pathname === "/cdn/meta/pbe_latest.json") {
        return await handleStaticMetaRequest<StoredPbeMeta>(
          "meta:pbe:latest",
          env,
          60 * 60
        )
      }

      if (url.pathname === "/cdn/meta/patch_latest.json") {
        return await handleStaticMetaRequest<StoredPatchNotesMeta>(
          "meta:patch:latest",
          env,
          60 * 60
        )
      }

      const patchMatch = url.pathname.match(
        /^\/cdn\/meta\/patch-notes\/([^/]+)\.json$/
      )
      if (patchMatch?.[1]) {
        return await handleStaticMetaRequest<StoredPatchNotesMeta>(
          `meta:patch:${patchMatch[1]}`,
          env,
          60 * 60
        )
      }
    }

    if (
      request.method === "POST" &&
      url.pathname.startsWith("/internal/refresh")
    ) {
      return await handleManualRefresh(request, url, env)
    }

    if (request.method !== "GET" && request.method !== "POST") {
      return methodNotAllowed()
    }

    return notFound()
  },

  async scheduled(controller, env, ctx): Promise<void> {
    switch (controller.cron) {
      case "17 * * * *":
        ctx.waitUntil(runRedditRefresh(env))
        break
      case "13 14 * * *":
        ctx.waitUntil(runMetaRefresh(env, "all"))
        break
    }
  }
} satisfies ExportedHandler<Env>

async function handleRedditFeedRequest(url: URL, env: Env) {
  const feed = await getCachedJson<StoredRedditFeed>(
    env.POSTAL_CACHE,
    "reddit:leagueoflegends:latest"
  )

  if (!feed) {
    return json(
      {
        items: [],
        total: 0
      },
      {
        status: 404,
        headers: {
          "cache-control": "public, max-age=60"
        }
      }
    )
  }

  const query = parseFeedQuery(url)
  const filtered = filterFeedItems(feed.items, query)
  const offset = query.offset ?? 0
  const limit = query.limit ?? 25

  return json(
    {
      items: filtered.slice(offset, offset + limit),
      total: filtered.length
    },
    {
      headers: {
        "cache-control": "public, max-age=300"
      }
    }
  )
}

async function handleStaticMetaRequest<T>(
  key: string,
  env: Env,
  maxAgeSeconds: number
) {
  const payload = await readCachedString(env.POSTAL_CACHE, key)
  if (!payload) {
    return notFound()
  }

  return new Response(payload, {
    headers: {
      "cache-control": `public, max-age=${maxAgeSeconds}`,
      "content-type": "application/json; charset=utf-8"
    }
  })
}

async function handleManualRefresh(request: Request, url: URL, env: Env) {
  if (!isAuthorized(request, env)) {
    return unauthorized("Invalid refresh secret")
  }

  const target = url.pathname.replace(/^\/internal\/refresh\/?/, "").trim()
  if (!target) {
    return badRequest("Missing refresh target")
  }

  if (target === "reddit") {
    const result = await runRedditRefresh(env)
    return json(result)
  }

  if (target === "meta") {
    const result = await runMetaRefresh(env, "all")
    return json(result)
  }

  if (target === "meta/pbe") {
    const result = await runMetaRefresh(env, "pbe")
    return json(result)
  }

  if (target === "meta/patch") {
    const result = await runMetaRefresh(env, "patch")
    return json(result)
  }

  return badRequest(`Unknown refresh target: ${target}`)
}

function isAuthorized(request: Request, env: Env) {
  if (!env.POSTAL_REFRESH_SECRET) {
    return false
  }

  return (
    request.headers.get("x-postal-refresh-secret") === env.POSTAL_REFRESH_SECRET
  )
}

async function runRedditRefresh(env: Env) {
  const result = await refreshLeagueOfLegendsRedditFeed(env)

  await putCachedJson(
    env.POSTAL_CACHE,
    "reddit:leagueoflegends:latest",
    result.feed
  )

  return result
}

async function runMetaRefresh(env: Env, target: ManualRefreshTarget) {
  const locale = env.POSTAL_LOCALE ?? "en-us"
  const output: Record<string, unknown> = {}

  if (target === "all" || target === "pbe") {
    const pbe = await refreshPbeMeta(locale)
    await putCachedJson(env.POSTAL_CACHE, "meta:pbe:latest", pbe)
    output.pbe = {
      key: "meta:pbe:latest",
      url: pbe.url
    }
  }

  if (target === "all" || target === "patch") {
    const patch = await refreshPatchNotesMeta(locale)
    await Promise.all([
      putCachedJson(env.POSTAL_CACHE, "meta:patch:latest", patch),
      putCachedJson(env.POSTAL_CACHE, `meta:patch:${patch.patch}`, patch)
    ])
    output.patch = {
      key: `meta:patch:${patch.patch}`,
      patch: patch.patch,
      url: patch.url
    }
  }

  return {
    refreshedAt: new Date().toISOString(),
    target,
    ...output
  }
}
