import type { RouteLocationNormalized } from "vue-router"

function safeDecode(input: string) {
  try {
    return decodeURIComponent(input)
  } catch {
    return input
  }
}

export function extractIdentifierFromRoute(
  route: RouteLocationNormalized
): Identifier | null {
  const { puuid, region, slug } = route.params

  if (puuid) return { puuid: String(puuid) }

  if (region && slug) {
    const rawSlug = Array.isArray(slug) ? slug.join("/") : String(slug)
    const sep = rawSlug.lastIndexOf("_")
    if (sep <= 0 || sep >= rawSlug.length - 1) return null

    const rawName = rawSlug.slice(0, sep)
    const rawTag = rawSlug.slice(sep + 1)

    const name = safeDecode(rawName).trim()
    const tag = safeDecode(rawTag).trim()
    if (!name || !tag) return null

    return {
      name: name.toLowerCase(),
      region: String(region).toLowerCase(),
      tag: tag.toLowerCase(),
    }
  }

  return null
}
