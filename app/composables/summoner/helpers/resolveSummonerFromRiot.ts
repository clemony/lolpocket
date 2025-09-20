export async function resolveSummonerFromRiot(
  region: string,
  name: string,
  tag: string
): Promise<Summoner> {
  const result = await $fetch<Summoner>('/api/resolve-summoner', {
    params: { name, region, tag },
  })
  return result
}
