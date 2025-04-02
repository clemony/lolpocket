/* eslint-disable regexp/optimal-quantifier-concatenation */

import { convertPatchToRiotFormat } from '../handleData'

export const matchArray = [
  NA1_5246472309,
  NA1_5246418931,
  NA1_5246189449,
  NA1_5246170813,
  NA1_5246149580,
  NA1_5239257455,
]

export function normalizeGamePatchNumber(match) {
  let p = match.info.gameVersion.replace(/\d+\.(\d+).*/, '$1')
  p = p.length < 2 ? `0${p}` : p
  return convertPatchToRiotFormat(p)
}

export function handleUserMatchData(newMatch, puuid?) {
  const as = useAccountStore()
  const ans = useAnalysisStore()
  newMatch.forEach((match) => {
    const p = puuid || match.info.participants.find(p => p.puuid == as.userAccount.puuid)
    if (!p)
      return
    const map = ans.userMatchData.map(id => id)
    console.log('💠 - newMatch.forEach - map:', map)

    if (map.includes(match.id))
      return

    ans.userMatchData = [
      ...ans.userMatchData,
      {
        patch: normalizeGamePatchNumber(match),
        match: match.metadata.matchId,
        win: p.win,
        champion: p.championId,
        items: [p.item0, p.item1, p.item2, p.item3, p.item4, p.item5],
      },
    ]
  })
}

export function getPatchChampions(patchGames) {
  const ds = useDataStore()

  const championStats = new Map<number, { games: number, wins: number, losses: number, winrate: number }>()

  patchGames.forEach(({ champion, win }) => {
    if (!championStats.has(champion)) {
      championStats.set(champion, { games: 0, wins: 0, losses: 0, winrate: 0 })
    }

    const stats = championStats.get(champion)!
    stats.games++
    win ? stats.wins++ : stats.losses++
    stats.winrate = (stats.wins / stats.games) * 100
  })

  return [...championStats.entries()]
    .sort((a, b) => b[1].games - a[1].games) // Sort by most played
    .map(([champion, stats]) => ({
      champion: ds.champions.find(c => c.key == champion)?.name || null,
      games: stats.games,
      wins: stats.wins,
      losses: stats.losses,
      winrate: stats.winrate,
    }))
}
