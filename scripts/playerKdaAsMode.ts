export function mode(nums: number[]): number | null {
  if (!nums.length) return null

  const freq = new Map<number, number>()
  let maxCount = 0
  let result = nums[0]

  for (const n of nums) {
    const count = (freq.get(n) ?? 0) + 1
    freq.set(n, count)

    if (count > maxCount) {
      maxCount = count
      result = n
    }
  }

  return result
}

function logTeamStatModes(matches: MatchData[], puuid: string) {
  const perPlayer = new Map<
    string,
    { name: string; kills: number[]; deaths: number[]; assists: number[] }
  >()

  for (const match of matches) {
    const self = match.participants.find((p) => p.puuid === puuid)
    if (!self) continue

    const teamId = self.teamId

    for (const p of match.participants) {
      if (p.teamId !== teamId) continue

      const entry = perPlayer.get(p.puuid) ?? {
        name: `${p.name}#${p.tag}`,
        assists: [],
        deaths: [],
        kills: [],
      }

      entry.kills.push(p.stats.kills)
      entry.deaths.push(p.stats.deaths)
      entry.assists.push(p.stats.assists)

      perPlayer.set(p.puuid, entry)
    }
  }

  const table = Array.from(perPlayer.values()).map((p) => ({
    assistMode: mode(p.assists),
    deathMode: mode(p.deaths),
    games: p.kills.length,
    killMode: mode(p.kills),
    player: p.name,
  }))

  console.table(table)
}

//

/* watch(() => api.matches.value, (v) => {
  console.log('💠 - watch - newVal:', v)
  logTeamStatModes(api.matches.value, api.summoner.value.puuid)
}) */
