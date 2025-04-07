import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const ts = useTempStore()

    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const accents = ref('light')

    const userAccount = {
      name: ref('Summoner'),
      image: ref(null),
      role: ref(null),
      id: ref(null),
      session: ref(null),
      accessToken: '',
      refreshToken: '',
      puuid: ref(null),
      gameName: ref('Summoner'),
      tagLine: ref('Link Riot Account?'),
      profileIconId: ref(),
      summonerLevel: ref(0),
      region: ref('Runeterra'),
    }

    const champCheck = ref(true)
    const roleCheck = ref(false)
    const spellCheck = ref(true)

    const userFolders = ref<Folder[]>([])
    const heroModel = ref(0)

    const userBoardModules = ref<(any | null)[]>(Array.from({ length: 9 }, () => null))

    const userModuleCount = computed(() => {
      const filter = userBoardModules.value.filter(m => m != null)
      return filter.length
    })
    const userNotes = ref<Note[]>([])

    const reducedMotion = ref(false)
    const colorBlindMode = ref(false)
    const sidebarCollapsed = ref(false)

    const mobileOpen = ref(false)
    const sidebarWidth = ref(18)

    const cardBack = ref('/img/cards/moonfall.webp')
    const pocketPreview = ref(false)
    const routeHistory: any = []

    const favoriteChamps = ref<Champion[]>([])
    // items
    const favoriteItems = ref<Item[]>([])
    const itemSets = ref<ItemSet[]>([])
    const itemSetTipIsOpen = ref(true)

    return {
      // account
      userAccount,
      userFolders,
      userBoardModules,
      userModuleCount,
      userNotes,

      // settings
      themeClass,
      dataTheme,
      accents,
      heroModel,
      colorBlindMode,
      reducedMotion,
      pocketPreview,
      sidebarCollapsed,

      // checks
      champCheck,
      roleCheck,
      spellCheck,
      // sidebar
      mobileOpen,
      sidebarWidth,

      routeHistory,

      cardBack,

      // champs
      favoriteChamps,

      // items
      favoriteItems,
      itemSets,
      itemSetTipIsOpen,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
    },
  },
)
