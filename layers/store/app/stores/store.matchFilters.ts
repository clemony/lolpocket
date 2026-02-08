import equal from 'fast-deep-equal/es6'
import { defineStore } from 'pinia'

export const useMatchFilters = defineStore('matchFilters', () => {
  const { summoner: s } = storeToRefs(s_session())
  const { matches } = storeToRefs(s_matches())
  console.log('🥸 - matches:', matches)

  const GLOBAL_KEYS = [
    ['participants', 'championName'],
    ['participants', 'name'],
    ['participants', 'tag'],
  ]

  const RESTRICTED_KEYS = ['keywords']

  const query = shallowRef('')
  const filter = shallowRef<MatchFilter>({
    ally: '',
    amount: null,
    champion: null,
    patch: null,
    queue: 0,
    role: 'all',
    date: { end: null, start: null },
  })

  const DEFAULT_FILTER = structuredClone(filter.value)

  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value = { ...filter.value, [key]: value }
  }

  function clearFilters() {
    filter.value = structuredClone(DEFAULT_FILTER)
  }

  function filterEmpty() {
    return equal(filter.value, DEFAULT_FILTER)
  }

  watch(() => filter.value.champion, (v) => {
    console.log('💠 - watch - newVal:', v)
  })
  const baseFiltered = computed<MatchData[]>(() => {
    const arr = matches.value
    const f = filter.value
    console.log('🥸 - f:', f)

    if (!s.value.puuid) return arr

    const empty
      = !f.ally
        && !f.champion
        && !f.patch
        && !f.queue
        && f.role === 'all'

    if (empty) return arr

    return arr.filter(m => matchFilters(s.value.puuid, m, f))
  })
  watch(() => baseFiltered.value, (v) => {
    console.log('💠 - watch BASE newVal:', v)
  })
  const playerIndex = computed(() => {
    if (!s.value.puuid) return []

    return baseFiltered.value.map((m) => {
      const p = m.participants.find(p => p.puuid === s.value.puuid)
      if (!p) return null

      const items = [
        ...Object.values(p.items),
        ...Object.values(p.items.slots),
      ].flatMap(i => itemNameById(i as number))

      const runes = [
        p.runes.keystone,
        ...Object.values(p.runes.primary.runes),
        ...Object.values(p.runes.secondary.runes),
      ].flatMap(i => runeNameById(i))

      const paths = [
        p.runes.primary.path,
        p.runes.secondary.path,
      ].map(i => pathNameById(i))

      const spells = p.spells.map(i => spellNameById(i))

      const outcome
        = p.win === 'remake'
          ? ['remake', 'surrender', 'redo']
          : p.win
            ? ['win', 'victory']
            : ['loss', 'lose', 'defeat']

      return {
        keywords: [
          champNameById(p.championId),
          p.role,
          ...items,
          ...runes,
          ...paths,
          ...spells,
          ...outcome,
        ].filter(Boolean),
        matchId: m.matchId,
      }
    }).filter(Boolean)
  })

  const globalSearch = useSearch(baseFiltered, query, {
    keys: GLOBAL_KEYS,
  })

  const playerSearch = useSearch(playerIndex, query, {
    keys: RESTRICTED_KEYS,
  })

  const filteredMatches = computed<MatchData[]>(() => {
    if (!query.value.length)
      return baseFiltered.value

    const map = new Map<string, MatchData>()

    for (const m of globalSearch.value ?? [])
      map.set(m.matchId, m)

    for (const p of playerSearch.value ?? []) {
      const m = matches.value.find(
        m => m.matchId === p.matchId
      )
      if (m) map.set(m.matchId, m)
    }

    const out = [...map.values()]

    return filter.value.amount
      ? out.slice(0, filter.value.amount)
      : out
  })

  return {
    baseFiltered,
    clearFilters,
    filter,
    filteredMatches,
    filterEmpty,
    query,
    setFilter,
  }
})
