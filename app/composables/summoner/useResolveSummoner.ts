// --- RESOLVE SUMMONER ---
export async function useResolveSummoner(
  identifier: {
    puuid?: string
    region?: string
    name?: string
    tag?: string
  },
  options?: { force?: boolean },
): Promise<Summoner> {
  if (!identifier.puuid && (!identifier.region || !identifier.name || !identifier.tag)) {
    throw new Error('Must provide puuid or region+name+tag')
  }

  // --- Check cache unless forced ---
  let cached: Summoner | null = null
  if (identifier.puuid && !options?.force) {
    cached = ss().getSummoner(identifier.puuid)
  }
  if (cached && !isStale(cached.lastUpdate)) {
    return cached
  }

  // --- Build API params ---
  const params: Record<string, string> = identifier.puuid
    ? { puuid: identifier.puuid }
    : {
        region: identifier.region!,
        name: identifier.name!,
        tag: identifier.tag!,
      }

  // --- Fetch only summoner profile ---
  const resolved = await $fetch<Summoner>('/api/riot/resolveSummoner', { params })

  ss().setSummoner(resolved)

  return resolved
}