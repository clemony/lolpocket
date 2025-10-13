import { defineStore } from 'pinia'
import { getSplash } from '~/utils/splash'

export const useIndexStore = defineStore(
  'indexStore',
  () => {
    const patchList = ref<number[]>([])
    const patch = ref<number>()
    const lastPatchCheck = ref<Date>()
    const lastFullRefresh = ref<Date>()
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
      if (isStale(lastPatchCheck.value) === true) {
        const { patchIndex } = await import('#shared/appdata/index/patch-index')
        lastPatchCheck.value = new Date()
        if (patch.value !== patchIndex[0]) {
          patchList.value = patchIndex
          patch.value = patchIndex[0]
          loadAll()
        }
      }
    }

    async function loadSkins() {
      const { skins: skinIndex } = await import(
        '#shared/appdata/index/skins-full'
      )
      skins.value = skinIndex
    }

    async function loadChamps() {
      const { championIndex } = await import(
        '#shared/appdata/index/champion-index'
      )
      champions.value = championIndex
    }

    async function loadItems() {
      const { itemIndex } = await import('#shared/appdata/index/item-index')
      items.value = itemIndex
    }

    async function loadSpells() {
      const { spellIndex } = await import('#shared/appdata/index/spell-index')
      spells.value = spellIndex
    }

    async function loadBaseSkins() {
      const { baseSkin } = await import('#shared/appdata/index/skins-base')
      skin.value = baseSkin
    }

    async function loadRunes() {
      const { runeIndex } = await import('#shared/appdata/index/rune-index')
      runes.value = runeIndex
    }

    async function loadPaths() {
      const { pathIndex } = await import('#shared/appdata/index/path-index')
      paths.value = pathIndex
    }

    async function loadMaps() {
      const { mapIndex } = await import('#shared/appdata/index/map-index')
      maps.value = mapIndex
    }

    async function loadTitles() {
      const { championTitleIndex } = await import(
        '#shared/appdata/index/champion-title-index'
      )
      titles.value = championTitleIndex
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

    // resetIndexStore()

    async function loadAll() {
      console.log('💠 - loadAll - else hihihi')
      await resetIndexStore()
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
      await resetIndexStore()
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
      outputKey: keyof T
    ): T[keyof T] | undefined {
      return dataset?.find(item => item[inputKey] === value)?.[outputKey]
    }

    function getByIndex<T extends Record<string, any>>(
      dataset: T[] | undefined,
      inputKey: keyof T,
      value: T[keyof T]
    ): T | undefined {
      return dataset?.find(item => item[inputKey] === value)
    }

    function getSkinName(key: string, id: number | string): string | undefined {
      return skins[key]?.find(skin => skin.id === id.toString())?.name
    }

    function skinNameFromUrl(url: string): string | undefined {
      const s = url
        .replace(
          'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/',
          ''
        )
        .split('/')

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
      titles,
      champions,
      items,
      lastFullRefresh,
      maps,
      patch,
      patchList,
      runes,
      shards,
      skin,
      skins,
      spells,

      // load
      loadAll,
      loadBasic,
      loadPatch,
      loadPaths,
      loadSkins,
      loadTitles,

      // helpers
      findInIndex,
      getByIndex,
      spellById: (id: number) => getByIndex(spells.value, 'id', id),

      // champion helpers
      champIdByKey: (key: string) =>
        findInIndex(champions.value, 'key', key, 'id') as number,
      champIdByName: (name: string) =>
        findInIndex(champions.value, 'name', name, 'id'),
      championById: (id: number) => getByIndex(champions.value, 'id', id),
      championByKey: (key: string) => getByIndex(champions.value, 'key', key),
      champKeyById: (id: number) =>
        findInIndex(champions.value, 'id', id, 'key') as string,
      champKeyByName: (name: string) =>
        findInIndex(champions.value, 'name', name, 'key'),
      champNameById: (id: number) =>
        findInIndex(champions.value, 'id', id, 'name') as string,
      champNameByKey: (key: string) =>
        findInIndex(champions.value, 'key', key, 'name') as string,
      getChampionTitle,

      // images

      centeredByKey: (key: string) => skin.value?.[key]?.centeredPath,
      getSkinName,
      getSplash: (keyOrId: string | number, type: SplashType) =>
        getSplash(keyOrId, type),
      loadScreenByKey: (key: string) => skin.value?.[key]?.loadPath,
      skinNameFromUrl,
      splashByKey: (key: string) => skin.value?.[key]?.splashPath,
      tileByKey: (key: string) => skin.value?.[key]?.tilePath,

      // item helpers

      itemById: (id: number) => getByIndex(items.value, 'id', id),
      itemIdByName: (name: string) =>
        findInIndex(items.value, 'name', name, 'id'),
      itemNameById: (id: number) =>
        findInIndex(items.value, 'id', id, 'name') as string,

      // runes

      runeById: (id: number) => getByIndex(runes.value, 'id', id),
      runeNameById: (id: number) =>
        findInIndex(runes.value, 'id', id, 'name') as string,

      // paths

      pathColorByName: (name: string) =>
        findInIndex(paths.value, 'name', name, 'color') as string,
      pathNameById: (id: number) =>
        findInIndex(paths.value, 'id', id, 'name') as string,

      // spells
      spellNameById: (id: number) =>
        findInIndex(spells.value, 'id', id, 'name') as string,

      // maps
      mapIdById: (id: number) =>
        maps.value.find(m => m.id === id)?.mapStringId,
      mapNameById: (id: number) => maps.value.find(m => m.id === id)?.name,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),

    },
  }
)
