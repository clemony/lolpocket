import { defineStore } from 'pinia'

export const useIndexStore = defineStore(
  'indexStore',
  () => {
    const patchList = ref<number[]>([])
    const patch = ref<number>()
    const lastPatchCheck = ref<Date>()
    const lastFullRefresh = ref()
    const champions = ref<ChampionIndex[]>([])
    const runes = ref<RuneIndex[]>([])
    const paths = ref<PathIndex[]>([])
    const items = ref<ItemIndex[]>([])
    const maps = ref<MapIndex[]>([])
    const shards = ref<Shard[]>([])
    const skin = ref<SkinRecord>({})
    const titles = ref<Record<string, string>>({})
    const spells = ref<Record<string, string | number>[]>([])
    const skins = ref<FullSkinRecord>({})

    async function loadPatch() {
      if (isStale(lastPatchCheck.value) == true) {
        console.log('🌱 - loadPatch - isStale(lastPatchCheck.value) == true:', isStale(lastPatchCheck.value) == true)
        const { patchIndex } = await import('appdata/index/patch-index')
        lastPatchCheck.value = new Date()
        if (patch.value != patchIndex[0]) {
          patchList.value = patchIndex
          patch.value = patchIndex[0]
          loadAll()
        }
      }
    }

    async function loadSkins() {
      const { skins: skinIndex } = await import('appdata/index/skins-full')
      skins.value = skinIndex
    }

    async function loadChamps() {
      const { championIndex } = await import('appdata/index/champion-index')
      champions.value = championIndex
    }

    async function loadItems() {
      const { itemIndex } = await import('appdata/index/item-index')
      items.value = itemIndex
    }

    async function loadSpells() {
      const { spellIndex } = await import('appdata/index/spell-index')
      spells.value = spellIndex
    }

    async function loadBaseSkins() {
      const { baseSkin } = await import('appdata/index/skins-base')
      skin.value = baseSkin
    }

    async function loadRunes() {
      const { runeIndex } = await import('appdata/index/rune-index')
      runes.value = runeIndex
    }

    async function loadPaths() {
      const { pathIndex } = await import('appdata/index/path-index')
      paths.value = pathIndex
    }

    async function loadMaps() {
      const { mapIndex } = await import('appdata/index/map-index')
      maps.value = mapIndex
    }

    async function loadTitles() {
      const { championTitleIndex } = await import('appdata/index/champion-title-index')
      titles.value = championTitleIndex
    }

    function resetIndexStore() {
      /*       champions.value = [] */
      runes.value = []
      paths.value = []
      /*    items.value = []
      maps.value = []
      shards.value = []
      skin.value = {}
      spells.value = []
      skins.value = {} */
    }

    // resetIndexStore()

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
        loadTitles(),
      ])
    }

    async function loadBasic() {
      console.log('💠 - loadBasic - loading basic data...')
      if (!champions.value.length)
        await loadChamps()

      if (!items.value.length)
        await loadItems()

      if (!spells.value.length)
        await loadSpells()

      if (!runes.value.length)
        await loadRunes()

      if (!paths.value.length)
        await loadPaths()

      if (!maps.value.length)
        await loadMaps()

      if (!skin.value.length)
        await loadBaseSkins()

      if (!skins.value.length)
        await loadSkins()
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

    function getSkinName(key: string, id: number | string): string | undefined {
      return skins[key]?.find(skin => skin.id === id.toString())?.name
    }

    function skinNameFromUrl(url: string): string | undefined {
      const s = url.replace('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/', '').split('/')

      const name = capitalize(s[0])
      let id = [...s].pop()
      id = id.replace(/[a-z]+_splash_[a-z]+_/, '')
      id = id.replace('.jpg', '')

      return `${skins.value[name]?.find(skin => skin.id === id.toString())?.name} ${name}`
    }

    function getChampionTitle(key) {
      if (!titles.value)
        loadTitles()
      return titles.value[key]
    }

    return {
      lastFullRefresh,
      patch,
      patchList,
      champions,
      items,
      titles,
      runes,
      maps,
      shards,
      spells,
      skin,
      skins,

      // load
      loadPatch,
      loadSkins,
      loadTitles,
      loadBasic,
      loadPaths,
      loadAll,

      // helpers
      findInIndex,
      getByIndex,
      spellById: (id: number) => getByIndex(spells.value, 'id', id),

      // champion helpers
      getChampionTitle,
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
      itemNameById: (id: number) => findInIndex(items.value, 'id', id, 'name') as string,

      // runes

      runeById: (id: number) => getByIndex(runes.value, 'id', id),
      runeNameById: (id: number) => findInIndex(runes.value, 'id', id, 'name') as string,

      // paths

      pathColorByName: (name: string) =>
        findInIndex(paths.value, 'name', name, 'color') as string,
      pathNameById: (id: number) =>
        findInIndex(paths.value, 'id', id, 'name') as string,

      // spells
      spellNameById: (id: number) =>
        findInIndex(spells.value, 'id', id, 'name') as string,

      // images

      tileByKey: (key: string) => skin.value?.[key]?.tilePath,
      splashByKey: (key: string) => skin.value?.[key]?.splashPath,
      centeredByKey: (key: string) => skin.value?.[key]?.centeredPath,
      loadScreenByKey: (key: string) => skin.value?.[key]?.loadPath,
      getSkinName,
      skinNameFromUrl,

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
