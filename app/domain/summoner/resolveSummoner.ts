export async function resolveSummoner(
  identifier: Identifier
): Promise<Summoner> {
  if (identifier.puuid)
    return ss().resolveOrFetch(identifier.puuid)

  const hit = ss().resolveBySlug(
    identifier.region,
    identifier.name,
    identifier.tag
  )

  if (hit) return hit

  return ss().ensureSummoner(identifier)
}