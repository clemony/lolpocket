export function buildSummonerRootPath(
  input?: {
    name?: string | null
    puuid?: string | null
    region?: string | null
    tag?: string | null
  } | null
) {
  const region = input?.region?.toLowerCase()
  const name = input?.name?.toLowerCase()
  const tag = input?.tag?.toLowerCase()

  if (region && name && tag) {
    return `/${region}/${name}_${tag}`
  }

  if (input?.puuid) {
    return `/_r/summoner/${input.puuid}`
  }

  return "/"
}
