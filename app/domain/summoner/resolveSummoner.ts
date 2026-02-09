//
export async function resolveSummoner(
  identifier: Identifier
): Promise<Summoner> {
  if (identifier.puuid) {
    const resolved = await ss().resolveOrFetch(identifier.puuid)
    if (!resolved) {
      throw new Error("Unable to resolve summoner")
    }
    return resolved
  }

  if (!identifier.region || !identifier.name || !identifier.tag) {
    throw new Error("Invalid summoner identifier")
  }

  const hit = ss().resolveBySlug(
    identifier.region,
    identifier.name,
    identifier.tag
  )

  if (hit) return hit

  const found = await ss().ensureSummoner(identifier)
  if (!found) {
    throw new Error("Unable to resolve summoner")
  }
  return found
}
