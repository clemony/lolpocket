import type { DateRange } from 'reka-ui'
import equal from 'fast-deep-equal/es6'
import { computed, shallowRef, unref } from 'vue'

const GLOBAL_KEYS = [
  ['participants', 'championName'],
  ['participants', 'name'],
  ['participants', 'tag'],
]

const RESTRICTED_KEYS = ['keywords']

export function useMatchFilters(
  matches: Ref<MatchData[]>,
  id: string
) {
  const query = shallowRef('')
  const filter = shallowRef<MatchFilter>({
    ally: '',
    amount: null,
    champion: '',
    date: { end: null, start: null },
    patch: null,
    queue: 0,
    role: 'all',
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

  const baseFiltered = computed<MatchData[]>(() => {
    const arr = matches.value
    const f = filter.value

    if (!id) return arr

    const empty
      = !f.ally
        && !f.champion
        && !f.patch
        && !f.queue
        && f.role === 'all'

    if (empty) return arr

    return arr.filter(m => matchFilters(id, m, f))
  })
  console.log('🥸 - useMatchFilters - baseFiltered:', baseFiltered)

  const playerIndex = computed(() => {
    if (!id) return []

    return baseFiltered.value.map((m) => {
      const p = m.participants.find(p => p.puuid === id)
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
    clearFilters,
    filter,
    filteredMatches,
    filterEmpty,
    query,
    setFilter,
  }
}
