type AnyIndex = Record<string, any>

interface UseIndexLookupOptions {
  lazy?: boolean
  server?: boolean
}

// Shared generic lookup
function findInIndex<T extends AnyIndex>(
  dataset: T[] | undefined,
  inputKey: keyof T,
  value: T[keyof T],
  outputKey: keyof T,
): T[keyof T] | undefined {
  return dataset?.find(item => item[inputKey] === value)?.[outputKey]
}

export function useIndexLookup(opts: UseIndexLookupOptions = {}) {
  const { lazy = false, server = true } = opts

  const { data: champions } = useFetch<ChampionIndex[]>('/api/champion-index', {
    key: 'champions-index',
    lazy,
    server,
    default: () => [],
  })
  console.log("💠 - useIndexLookup - champions:", champions)

  const { data: items } = useFetch<ItemIndex[]>('/api/item-index', {
    key: 'items-indexf',
    lazy,
    server,
    default: () => [],
  })
  console.log("💠 - useIndexLookup - items:", items)

  const { data: runes } = useFetch<RuneIndex[]>('/api/rune-index', {
    key: 'runes-index',
    lazy,
    server,
    default: () => [],
  })

  const { data: spells } = useFetch<Spell[]>('/api/spells', {
    key: 'spells-index',
    lazy: true,
    immediate: false,
    server,
    default: () => [],
  })

  const { data: skins } = useFetch<Skin[]>('/api/skindex', {
    key: 'skindex',
    lazy: true,
    server,
    default: () => [],
  })

  const { data: maps } = useFetch<MapIndex[]>('/api/map-index', {
    key: 'map-index',
    lazy: true,
    server,
    default: () => [],
  })

  const { data: shards } = useFetch<Shard[]>('/api/shards', {
    key: 'shard-index',
    lazy: true,
    server,
    immediate: false,
    default: () => [],
  })

  return {
    // generic lookup
    findInIndex,

    // index data (raw)
    champions,
    skins,
    items,
    runes,
    spells,
    maps,
    shards,

    // optional helpers
    champNameById: (id: number) => findInIndex(champions.value, 'id', id, 'name'),
    baseTileByChampKey: (key: string) => skins.value[key][0].tilePath,
    champIdByKey: (key: string) => findInIndex(champions.value, 'key', key, 'id'),
    itemIdByName: (name: string) => <number>findInIndex(items.value, 'name', name, 'id'),
    runeKeyById: (id: number) => findInIndex(runes.value, 'id', id, 'key'),
    spellNameById: (id: number) => findInIndex(spells.value, 'id', id, 'name'),
    mapNameById: (id: number) => {
      const map = maps.value.find(m => m.id === id)
      return map?.aka || map?.name || ''
    },
  }
}
