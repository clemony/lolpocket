import type { RouteLocationNormalized } from 'vue-router'

export function extractIdentifierFromRoute(route: RouteLocationNormalized): Identifier | null {
  const { puuid, region, slug } = route.params

  if (puuid)
    return { puuid: String(puuid) }

  if (region && slug) {
    const [name, tag] = String(slug).split('_')
    if (!name || !tag)
      return null

    return {
      name: name.toLowerCase(),
      region: String(region).toLowerCase(),
      tag: tag.toLowerCase(),
    }
  }

  return null
}