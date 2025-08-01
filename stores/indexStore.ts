import { defineStore } from 'pinia'

export const useIndexStore = defineStore(
  'indexStore',
  () => {
    const patchList = ref<number[]>([])
    const patch = ref<number>()
    const lastFullRefresh = ref()
    const champions = ref<ChampionIndex[]>([])
    const runes = ref<RuneIndex[]>([])
    const paths = ref<PathIndex[]>([])
    const items = ref<ItemIndex[]>([])
    const maps = ref<MapIndex[]>([])
    const shards = ref<Shard[]>([])
    const skin = ref<SkinRecord>({})
    const spells = ref<Record<string, string | number>[]>([])
    const skins = ref<FullSkinRecord>({})

    async function loadPatch() {
      const { patchIndex } = await import('data/index/patch-index')
      console.log('💠 - loadPatch - patchList.value:', patchList.value)
      if (patch.value != patchIndex[0]) {
        patchList.value = patchIndex
        patch.value = patchIndex[0]
        console.log('💠 - loadPatch - patch.value :', patch.value)
        loadAll()
      }
    }

    async function loadSkins() {
      const { skins: skinIndex } = await import('data/index/skins-full')
      skins.value = skinIndex
    }

    async function loadChamps() {
      const { championIndex } = await import('data/index/champion-index')
      champions.value = championIndex
    }

    async function loadItems() {
      const { itemIndex } = await import('data/index/item-index')
      items.value = itemIndex
    }

    async function loadSpells() {
      const { spellIndex } = await import('data/index/spell-index')
      spells.value = spellIndex
    }

    async function loadBaseSkins() {
      const { baseSkin } = await import('data/index/skins-base')
      skin.value = baseSkin
    }

    async function loadRunes() {
      const { runeIndex } = await import('data/index/rune-index')
      runes.value = runeIndex
    }

    async function loadPaths() {
      const { pathIndex } = await import('data/index/path-index')
      paths.value = pathIndex
    }

    async function loadMaps() {
      const { mapIndex } = await import('data/index/map-index')
      maps.value = mapIndex
    }

    function resetIndexStore() {
      champions.value = []
      runes.value = []
      paths.value = []
      items.value = []
      maps.value = []
      shards.value = []
      skin.value = {}
      spells.value = []
      skins.value = {}
    }

    async function loadAll() {
      console.log('💠 - loadAll - else hihihi')
      /* await resetIndexStore() */
      await Promise.all([
        loadChamps(),
        loadItems(),
        loadSpells(),
        loadBaseSkins(),
        loadSkins(),
        loadRunes(),
        loadPaths(),
        loadMaps(),
      ])
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
      lastFullRefresh,
      patch,
      patchList,
      champions,
      items,
      runes,
      maps,
      shards,
      spells,
      skin,
      skins,

      // load
      loadPatch,
      loadSkins,
      loadPaths,
      loadAll,

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
      key: 'indexStore',
    },
  },
)
