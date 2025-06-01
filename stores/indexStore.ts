import { defineStore } from 'pinia'

export const useIndexStore = defineStore('indexStore', () => {
  const champions = ref<ChampionIndex[]>([])
  const runes = ref<RuneIndex[]>([])
  const items = ref<ItemIndex[]>([])
  const maps = ref<MapIndex[]>([])
  const shards = ref<Shard[]>([])
  const skin = ref<BaseSkin[]>([])
  const spells = ref<Spell[]>([])
  const skins = ref<Skin[]>([])

  function findInIndex<T extends Record<string, any>>(
    dataset: T[] | undefined,
    inputKey: keyof T,
    value: T[keyof T],
    outputKey: keyof T,
  ): T[keyof T] | undefined {
    return dataset?.find(item => item[inputKey] === value)?.[outputKey]
  }

  function getByIndex<T extends Record<string, any>>(
    dataset: T[] | undefined,
    inputKey: keyof T,
    value: T[keyof T],
  ): T | undefined {
    return dataset?.find(item => item[inputKey] === value)
  }

  const fetchAll = () => {
    useCachedFetch('champions-index', '/api/champion-index', champions)
    useCachedFetch('item-index', '/api/item-index', items)
    useCachedFetch('runes-index', '/api/rune-index', runes)
    useCachedFetch('map-index', '/api/map-index', maps)
    useCachedFetch('shard-index', '/api/shards', shards)
    useCachedFetch('spell-index', '/api/spells', spells)
    useCachedFetch('skindex', '/api/skindex', skin)
    useCachedFetch('skinsdex', '/api/skinsdex', skins)
  }

  watchEffect(() => {
    if (items.value.length)
      console.log('✅ Items loaded:', items.value)

    if (spells.value.length)
      console.log('✅ Spells loaded:', spells.value)
  })

  return {
    champions,
    items,
    runes,
    maps,
    shards,
    spells,
    skin,
    skins,

    fetchAll,

    // helpers
    findInIndex,
    getByIndex,
    spellById: (id: number) => getByIndex(spells.value, 'id', id),
    itemById: (id: number) => getByIndex(items.value, 'id', id),
    runeById: (id: number) => getByIndex(runes.value, 'id', id),
    championByKey: (key: string) => getByIndex(champions.value, 'key', key),
    champNameById: (id: number) => findInIndex(champions.value, 'id', id, 'name'),
    champIdByKey: (key: string) => findInIndex(champions.value, 'key', key, 'id'),
    itemIdByName: (name: string) => findInIndex(items.value, 'name', name, 'id'),
    itemNameById: (id: number) => findInIndex(items.value, 'id', id, 'name'),
    runeKeyById: (id: number) => findInIndex(runes.value, 'id', id, 'key'),
    runeNameById: (id: number) => findInIndex(runes.value, 'id', id, 'name'),
    spellNameById: (id: number) => findInIndex(spells.value, 'id', id, 'name'),
    tileByKey: (key: string) => skin.value?.[key]?.tilePath,
    splashByKey: (key: string) => skin.value?.[key]?.splashPath,
    centeredByKey: (key: string) => skin.value?.[key]?.centeredPath,
    loadScreenByKey: (key: string) => skin.value?.[key]?.loadPath,
    mapNameById: (id: number) => maps.value.find(m => m.id === id)?.aka || maps.value.find(m => m.id === id)?.name || '',
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'indexStore',
  },
})
