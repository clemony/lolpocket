export function buildSummonerRootPath(
  summoner: Partial<Summoner> | null | undefined
) {
  if (!summoner) return "/summoner/afk"

  const region = summoner?.region?.toLowerCase()
  const name = summoner?.name?.toLowerCase()
  const tag = summoner?.tag?.toLowerCase()

  if (region && name && tag) {
    return `/${region}/${name}_${tag}`
  }

  if (summoner?.puuid) {
    return `/_r/summoner/${summoner.puuid}`
  }

  return "/"
}
