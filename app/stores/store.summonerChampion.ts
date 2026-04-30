//
import { unref } from "vue"
import { aggregateAllies } from "~/domain/stats/aggregateAllies"
import type { ChampionPairStats } from "~/domain/stats/aggregateDuos"
import { aggregateDuos } from "~/domain/stats/aggregateDuos"
import type { AggregatedSkills } from "~/domain/stats/aggregateSkills"
import { aggregateSkills } from "~/domain/stats/aggregateSkills"
import { useAggregateSingleChampion } from "~/domain/stats/useAggregateSingleChampion"
import type { ItemSlotOrder } from "~/domain/stats/useChampionItemTimelineStats"
import { useChampionItemTimelineStats } from "~/domain/stats/useChampionItemTimelineStats"
import { useChampionRuneStats } from "~/domain/stats/useChampionRuneStats"
import type { SpellStats } from "~/domain/stats/useChampionSpellStats"
import { useChampionSpellStats } from "~/domain/stats/useChampionSpellStats"

export const sChampion = defineStore("summonerChampion", () => {
  const { summoner } = storeToRefs(sSession())
  const { filteredMatches } = storeToRefs(matchFilter())
  const { mastery: m, timelines } = storeToRefs(sData())

  const id = computed(() => summoner.value?.puuid)

  const route = useRoute()
  const champion = computed(() => ({
    id: champIdByKey(String(route.params.champion_key)),
    key: String(route.params.champion_key),
    name: champNameByKey(String(route.params.champion_key))
  }))

  const matchData = computed<MatchPlayerData[]>(() => {
    if (!timelines.value?.length) return []

    return filteredMatches.value
      .filter((m: MatchData) =>
        m.participants.some(
          (p: Player) =>
            p.puuid === id.value && p.championId === champion.value.id
        )
      )
      .map((m: MatchData) => {
        const player = m.participants.find(
          (p: Player) => p.puuid === id.value
        )
        const timeline = timelines.value?.find(
          (tl: PlayerTimeline) => tl.matchId === m.matchId
        )
        if (!player || !timeline) return null
        return { match: m, player, timeline }
      })
      .filter(Boolean) as MatchPlayerData[]
  })

  const allies = computed<AllyStatDetail[] | null>(() => {
    if (!id.value) return null
    return aggregateAllies(filteredMatches, id.value).value
  })

  const duos = computed<ChampionPairStats | null>(() => {
    if (!id.value) return null
    return aggregateDuos(matchData).value
  })

  const items = computed<ItemSlotOrder | null>(() => {
    if (!id.value) return null
    return useChampionItemTimelineStats(matchData).value
  })

  const runes = computed<ChampionRuneStats | null>(() => {
    if (!id.value) return null
    return useChampionRuneStats(unref(matchData)).value
  })

  const skills = computed<AggregatedSkills | null>(() => {
    if (!id.value) return null
    return aggregateSkills(matchData.value)
  })

  const spells = computed<SpellStats | null>(() => {
    if (!matchData.value?.length) return null
    return useChampionSpellStats(matchData).value
  })

  const stats = computed<ChampionStats | null>(() => {
    if (!id.value) return null
    return useAggregateSingleChampion(matchData).value
  })

  const mastery = computed<ChampionMastery | null>(() => {
    if (!champion.value.id) return null
    return m.value?.find((c) => c?.championId === champion.value?.id) ?? null
  })

  return {
    allies,
    champion,
    duos,
    items,
    mastery,
    runes,
    skills,
    spells,
    stats
  }
})
