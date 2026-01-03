export const useChampionItemStats = (
  matches: Ref<MatchData[]>,
  puuid: string,
  championId: number
) =>
  computed(() => {
    const single: Record<number, StatDetail> = {}

    for (const match of matches.value) {
      const p = match.participants.find(
        (p) => p.puuid === puuid && p.championId === championId
      )
      if (!p) continue

      for (const itemId of Object.values(p.items)) {
        if (!itemId) continue
        bumpStat(single, itemId, p.win)
      }
    }

    for (const s of Object.values(single)) {
      s.winrate = Math.round((s.win / s.games) * 1000) / 10
    }

    return {
      single,
      best: pickBest(single),
    }
  })
