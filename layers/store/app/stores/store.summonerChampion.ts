import { defineStore } from 'pinia'

export const useSummonerChampion = defineStore('summonerChampion', () => {
  const { summoner } = storeToRefs(s_session())
  const { filteredMatches } = storeToRefs(s_matches())
  const { mastery: m, timelines } = storeToRefs(s_data())

  const id = toValue(summoner.value?.puuid)

  const route = useRoute()
  const championId = computed(() => champIdByKey(String(route.params.champion_key)))

  const matchData = computed<MatchPlayerData[]>(() => {
    if (!timelines.value?.length) return []

    return filteredMatches.value
      .filter(m =>
        m.participants.some(
          p =>
            p.puuid === id
            && p.championId === championId.value
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
    if (!id) return null
    return useChampionSpellStats(matchData).value
  })

  const stats = computed<ChampionStats>(() => {
    if (!id) return null
    return useAggregateSingleChampion(matchData).value
  })

  const mastery = computed<ChampionMastery>(() => {
    if (!championId.value || !mastery) return null
    return m.value?.find(c => c?.championId === championId?.value)
  })

  return {
    allies,
    duos,
    items,
    mastery,
    runes,
    skills,
    spells,
    stats
  }
})
