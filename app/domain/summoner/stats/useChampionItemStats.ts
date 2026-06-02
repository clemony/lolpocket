import { bumpStat } from "~/domain/summoner/stats/helpers/bumpValues"
import { pickBest } from "~/domain/summoner/stats/helpers/pickBest"

//
export function useChampionItemStats(
  matches: Ref<MatchData[]>,
  puuid: string,
  championId: number
) {
  return computed(() => {
    const single: Record<number, StatDetail> = {}

    for (const match of matches.value) {
      const p = match.participants.find(
        (p) => p.puuid === puuid && p.championId === championId
      )
      if (!p) continue

      for (const itemId of Object.values(p.items)) {
        if (!itemId || p.win === "remake") continue
        bumpStat(single, itemId as number, p.win)
      }
    }

    for (const s of Object.values(single)) {
      s.winrate = Math.round(((s.win ?? 0) / s.games) * 1000) / 10
    }

    return {
      best: pickBest(single),
      single
    }
  })
}
