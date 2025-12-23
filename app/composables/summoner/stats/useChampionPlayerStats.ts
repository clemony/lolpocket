import type { ShallowRef } from "vue"
import type { AggregatedSkills } from "~/composables/summoner/stats/aggregateSkills"

export const PlayerStatsKey = Symbol("PlayerStatsProvider")

export interface UsePlayerStats {
  summoner: ShallowRef<Summoner>
  matchData: ComputedRef<MatchPlayerData[]>
  stats: ComputedRef<AggregatedStats>
  skills: ComputedRef<AggregatedSkills>
  runes: ComputedRef<ChampionRuneStats>
  items?: any
  spells: ComputedRef<SpellStats>
}

export function usePlayerStatsProvider(
  api: SummonerInject,
  championId: ComputedRef<number>
): UsePlayerStats {
  const { filteredMatches, summoner } = api

  const timelines = shallowRef<PlayerTimeline[]>([])
  const mastery = shallowRef<PlayerChampionMastery | undefined>(undefined)

  watchEffect(async () => {
    const { getAllTimelinesForPuuid } = useTimeline()
    timelines.value = await getAllTimelinesForPuuid(summoner.value.puuid)
  })

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

  const statsApi: UsePlayerStats = {
    summoner,
    matchData,
    skills: computed(() => aggregateSkills(matchData.value)),
    runes: useChampionRuneStats(matchData),
    spells: useChampionSpellStats(matchData),
    stats: useAggregateSingleChampion(matchData),
  }

  provide(PlayerStatsKey, statsApi)
  return statsApi
}
export function usePlayerStatsInject() {
  const api: UsePlayerStats = inject(PlayerStatsKey)
  if (!api) throw new Error("No Stats provider found.")
  return api
}
