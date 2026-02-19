//
export async function resolveSummoner(
  identifier: Identifier
): Promise<Summoner> {
  console.log("🥸 - resolveSummoner - identifier.puuid:", identifier.puuid)
  if (identifier.puuid) {
    const resolved = await sSummoner().resolveOrFetch(identifier.puuid)
    if (!resolved) {
      throw new Error("Unable to resolve summoner")
    }
    return resolved
  }

  if (!identifier.region || !identifier.name || !identifier.tag) {
    throw new Error("Invalid summoner identifier")
  }

  const hit = sSummoner().resolveBySlug(
    identifier.region,
    identifier.name,
    identifier.tag
  )

  if (hit) return hit

  const found = await sSummoner().ensureSummoner(identifier)
  if (!found) {
    throw new Error("Unable to resolve summoner")
  }
  return found
}
