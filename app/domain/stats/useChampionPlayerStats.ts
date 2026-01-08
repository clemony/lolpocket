import type { ShallowRef } from "vue"

export const PlayerStatsKey = Symbol("PlayerStatsProvider")

export interface UsePlayerStats {
  summoner: ShallowRef<Summoner>
  matchData: ComputedRef<MatchPlayerData[]>
  stats: ComputedRef<AggregatedStats>
  skills: ComputedRef<AggregatedSkills>
  runes: ComputedRef<ChampionRuneStats>
  items?: any
  spells: ComputedRef<SpellStats>
  allies?: ComputedRef<AllyStatDetail[]>
  duos?: ComputedRef<ChampionPairStats>
}

export function usePlayerStatsProvider(
  api: SummonerInject,
  championId: ComputedRef<number>
): UsePlayerStats {
  const { filteredMatches, summoner, timelines } = api

  const mastery = shallowRef<PlayerChampionMastery | undefined>(undefined)

  const matchData = computed<MatchPlayerData[]>(() => {
    if (!timelines.value.length) return []

    return filteredMatches.value
      .filter((m) =>
        m.participants.some(
          (p) =>
            p.puuid === summoner.value.puuid &&
            p.championId === championId.value
        )
      )
      .map((m) => {
        const player = m.participants.find(
          (p) => p.puuid === summoner.value.puuid
        )
        const timeline = timelines.value.find((tl) => tl.matchId === m.matchId)
        if (!player || !timeline) return null
        return { match: m, player, timeline }
      })
      .filter(Boolean) as MatchPlayerData[]
  })
  const stats = useAggregateSingleChampion(matchData)
  const statsApi: UsePlayerStats = {
    allies: aggregateAllies(filteredMatches, summoner.value?.puuid),
    duos: aggregateDuos(matchData),
    summoner,
    matchData,
    skills: computed(() => aggregateSkills(matchData.value)),
    runes: useChampionRuneStats(matchData),
    spells: useChampionSpellStats(matchData),
    items: useChampionItemTimelineStats(matchData),
    stats,
  }

  provide(PlayerStatsKey, statsApi)
  return statsApi
}
export function usePlayerStatsInject() {
  const api: UsePlayerStats = inject(PlayerStatsKey)
  if (!api) throw new Error("No Stats provider found.")
  return api
}
