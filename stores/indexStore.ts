import { defineStore } from 'pinia'

export const useIndexStore = defineStore(
  'indexStore',
  () => {
    const champions = ref<ChampionIndex[]>()
    const runes = ref<RuneIndex[]>([])
    const paths = ref<PathIndex[]>([])
    const items = ref<ItemIndex[]>([])
    const maps = ref<MapIndex[]>([])
    const shards = ref<Shard[]>([])
    const skin = ref<SkinRecord>()
    const spells = ref<Record<string, string | number>[]>([])
    const skins = ref<FullSkinRecord>({})

    async function loadSkins() {
      if (Object.keys(skins.value).length)
        return
      const { skins: skinIndex } = await import('data/index/skins-full')
      skins.value = skinIndex
    }

    async function loadChamps() {
      if (champions.value)
        return
      const { championIndex } = await import('data/index/champion-index')
      champions.value = championIndex
    }

    async function loadItems() {
      if (items.value.length)
        return
      const { itemIndex } = await import('data/index/item-index')
      items.value = itemIndex
    }

    async function loadSpells() {
      if (spells.value.length)
        return
      const { spellIndex } = await import('data/index/spell-index')
      spells.value = spellIndex
    }

    async function loadBaseSkins() {
      if (skin?.value?.centeredPath)
        return
      const { baseSkin } = await import('data/index/skins-base')
      skin.value = baseSkin
    }

    async function loadRunes() {
      if (runes.value.length)
        return
      const { runeIndex } = await import('data/index/rune-index')
      runes.value = runeIndex
    }

    async function loadPaths() {
      if (paths.value.length)
        return
      const { pathIndex } = await import('data/index/path-index')
      paths.value = pathIndex
    }

    async function loadMaps() {
      if (maps.value.length)
        return
      const { mapIndex } = await import('data/index/map-index')
      maps.value = mapIndex
    }

    async function loadDefaults() {
      loadChamps()
      loadItems()
      loadSpells()
      loadBaseSkins()
      loadRunes()
      loadMaps()
    }

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

    return {
      champions,
      items,
      runes,
      maps,
      shards,
      spells,
      skin,
      skins,

      // load
      loadSkins,
      loadPaths,
      loadDefaults,

      // helpers
      findInIndex,
      getByIndex,
      spellById: (id: number) => getByIndex(spells.value, 'id', id),

      // champion helpers

      championByKey: (key: string) => getByIndex(champions.value, 'key', key),
      champKeyById: (id: number) =>
        findInIndex(champions.value, 'id', id, 'key') as string,
      champNameById: (id: number) =>
        findInIndex(champions.value, 'id', id, 'name') as string,
      champNameByKey: (key: string) =>
        findInIndex(champions.value, 'key', key, 'name') as string,
      champIdByKey: (key: string) =>
        findInIndex(champions.value, 'key', key, 'id') as number,
      champIdByName: (name: string) =>
        findInIndex(champions.value, 'name', name, 'id'),
      champKeyByName: (name: string) =>
        findInIndex(champions.value, 'name', name, 'key'),

      // item helpers

      itemById: (id: number) => getByIndex(items.value, 'id', id),
      itemIdByName: (name: string) =>
        findInIndex(items.value, 'name', name, 'id'),
      itemNameById: (id: number) => findInIndex(items.value, 'id', id, 'name'),

      // runes

      runeById: (id: number) => getByIndex(runes.value, 'id', id),
      runeKeyById: (id: number) => findInIndex(runes.value, 'id', id, 'key'),
      runeNameById: (id: number) => findInIndex(runes.value, 'id', id, 'name'),

      // paths

      pathNameById: (id: number) =>
        findInIndex(paths.value, 'id', id, 'name') as string,

      spellNameById: (id: number) =>
        findInIndex(spells.value, 'id', id, 'name'),

      // images

      tileByKey: (key: string) => skin.value?.[key]?.tilePath,
      splashByKey: (key: string) => skin.value?.[key]?.splashPath,
      centeredByKey: (key: string) => skin.value?.[key]?.centeredPath,
      loadScreenByKey: (key: string) => skin.value?.[key]?.loadPath,

      // maps
      mapNameById: (id: number) => maps.value.find(m => m.id === id)?.name,
      mapIdById: (id: number) =>
        maps.value.find(m => m.id === id)?.mapStringId,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      // key: "indexStore",
      pick: [
        'champions',
        'items',
        'runes',
        'skin',
        'spells',
        'shards',
        'skins',
      ],
    },
  },
)
