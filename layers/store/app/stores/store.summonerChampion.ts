import { defineStore } from 'pinia'

export const useSummonerChampion = defineStore('summonerChampion', () => {
  const { summoner } = storeToRefs(s_session())
  const { filteredMatches } = storeToRefs(useMatchFilters())
  const { mastery: m, timelines } = storeToRefs(s_data())

  const id = toValue(summoner.value?.puuid)

  const route = useRoute()
  const champion = computed(() => ({
    id: champIdByKey(String(route.params.champion_key)),
    key: String(route.params.champion_key),
    name: champNameByKey(String(route.params.champion_key)),
  }))

  const matchData = computed<MatchPlayerData[]>(() => {
    if (!timelines.value?.length) return []

    return filteredMatches.value
      .filter(m =>
        m.participants.some(
          p =>
            p.puuid === id
            && p.championId === champion.value.id
        )
      )
      .map((m) => {
        const player = m.participants.find(
          p => p.puuid === id
        )
        const timeline = timelines.value?.find(tl => tl.matchId === m.matchId)
        if (!player || !timeline) return null
        return { match: m, player, timeline }
      })
      .filter(Boolean) as MatchPlayerData[]
  })

  const allies = computed<AllyStatDetail[]>(() => {
    if (!id) return null
    return aggregateAllies(filteredMatches, id).value
  })

  const duos = computed<ChampionPairStats>(() => {
    if (!id) return null
    return aggregateDuos(matchData).value
  })

  const items = computed<ItemSlotOrder>(() => {
    if (!id) return null
    return useChampionItemTimelineStats(matchData).value
  })

  const runes = computed<ChampionRuneStats>(() => {
    if (!id) return null
    return useChampionRuneStats(matchData).value
  })

  const skills = computed<AggregatedSkills>(() => {
    if (!id) return null
    return aggregateSkills(matchData.value)
  })

  const spells = computed<SpellStats>(() => {
    if (!matchData) return null
    return useChampionSpellStats(matchData)?.value
  })

  const stats = computed<ChampionStats>(() => {
    if (!id) return null
    return useAggregateSingleChampion(matchData).value
  })

  const mastery = computed<ChampionMastery>(() => {
    if (!champion.value.id || !mastery) return null
    return m.value?.find(c => c?.championId === champion.value?.id)
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
