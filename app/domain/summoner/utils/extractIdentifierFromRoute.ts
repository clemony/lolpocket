import type { RouteLocationNormalized } from "vue-router"

function safeDecode(input: string) {
  try {
    return decodeURIComponent(input)
  } catch {
    return input
  }
}

const RESERVED_ROUTE_PREFIXES = new Set(["_r"])

export function extractIdentifierFromSlug(
  region: string,
  slug: string
): Identifier | null {
  const normalizedRegion = region.toLowerCase()
  if (RESERVED_ROUTE_PREFIXES.has(normalizedRegion)) return null

  const sep = slug.lastIndexOf("_")
  if (sep <= 0 || sep >= slug.length - 1) return null

  const rawName = slug.slice(0, sep)
  const rawTag = slug.slice(sep + 1)

  const name = safeDecode(rawName).trim()
  const tag = safeDecode(rawTag).trim()
  if (!name || !tag) return null

  return {
    name: name.toLowerCase(),
    region: normalizedRegion,
    tag: tag.toLowerCase(),
  }
}

export function extractIdentifierFromRoute(
  route: RouteLocationNormalized
): Identifier | null {
  const { puuid, region, slug } = route.params

  if (puuid) return { puuid: String(puuid) }

  if (region && slug) {
    const rawSlug = Array.isArray(slug) ? slug.join("/") : String(slug)
    return extractIdentifierFromSlug(String(region), rawSlug)
  }

  return null
}

export function extractIdentifierFromPath(path: string): Identifier | null {
  const matched = path.match(/^\/([^/]+)\/([^/]+)(?:\/|$)/)
  if (!matched) return null

  const region = matched[1]
  const slug = matched[2]
  if (!region || !slug) return null

  return extractIdentifierFromSlug(region, slug)
}
