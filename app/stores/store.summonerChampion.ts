//
import { unref } from "vue"
import { aggregateAllies } from "~/domain/summoner/stats/aggregateAllies"
import type { ChampionPairStats } from "~/domain/summoner/stats/aggregateDuos"
import { aggregateDuos } from "~/domain/summoner/stats/aggregateDuos"
import type { AggregatedSkills } from "~/domain/summoner/stats/aggregateSkills"
import { aggregateSkills } from "~/domain/summoner/stats/aggregateSkills"
import { useAggregateSingleChampion } from "~/domain/summoner/stats/useAggregateSingleChampion"
import type { ItemSlotOrder } from "~/domain/summoner/stats/useChampionItemTimelineStats"
import { useChampionItemTimelineStats } from "~/domain/summoner/stats/useChampionItemTimelineStats"
import { useChampionRuneStats } from "~/domain/summoner/stats/useChampionRuneStats"
import type { SpellStats } from "~/domain/summoner/stats/useChampionSpellStats"
import { useChampionSpellStats } from "~/domain/summoner/stats/useChampionSpellStats"

export const sChampion = defineStore("summonerChampion", () => {
  const { summoner } = storeToRefs(sSession())
  const { filteredMatches } = storeToRefs(matchFilter())
  const { mastery: m, timelines } = storeToRefs(sData())

  const id = computed(() => summoner.value?.puuid)

  const route = useRoute()
  const champion = computed(() => ({
    id: champIdByKey(String(route.params.champion_key)),
    key: String(route.params.champion_key),
    name: champNameByKey(String(route.params.champion_key)),
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
        const player = m.participants.find((p: Player) => p.puuid === id.value)
        const timeline = timelines.value?.find(
          (tl: PlayerTimeline) => tl.matchId === m.matchId
        )
        if (!player || !timeline) return undefined
        return { match: m, player, timeline }
      })
      .filter(Boolean) as MatchPlayerData[]
  })

  const allies = computed<AllyStatDetail[] | undefined>(() => {
    if (!id.value) return undefined
    return aggregateAllies(filteredMatches, id.value).value
  })

  const duos = computed<ChampionPairStats | undefined>(() => {
    if (!id.value) return undefined
    return aggregateDuos(matchData).value
  })

  const items = computed<ItemSlotOrder | undefined>(() => {
    if (!id.value) return undefined
    return useChampionItemTimelineStats(matchData).value
  })

  const runes = computed<ChampionRuneStats | undefined>(() => {
    if (!id.value) return
    return useChampionRuneStats(unref(matchData)).value
  })

  const skills = computed<AggregatedSkills | undefined>(() => {
    if (!id.value) return undefined
    return aggregateSkills(matchData.value)
  })

  const spells = computed<SpellStats | undefined>(() => {
    if (!matchData.value?.length) return undefined
    return useChampionSpellStats(matchData).value
  })

  const stats = computed<ChampionStats | undefined>(() => {
    if (!id.value) return undefined
    return useAggregateSingleChampion(matchData).value
  })

  const mastery = computed<ChampionMastery | undefined>(() => {
    if (!champion.value.id) return undefined
    return (
      m.value?.find((c) => c?.championId === champion.value?.id) ?? undefined
    )
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
    stats,
  }
})
