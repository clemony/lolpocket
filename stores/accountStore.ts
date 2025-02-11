import DefaultModule from 'components/summoner/modules/DefaultModule.vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const ts = useTempStore()

    const themeClass = ref('data-theme-light')
    const dataTheme = ref('light')
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
      profileIconId: ref(''),
      summonerLevel: ref(0),
      region: ref('Runeterra'),
    }

    const champCheck = ref(true)
    const roleCheck = ref(false)
    const spellCheck = ref(true)

    const userFolders = ref<Folder[]>([])
    const heroModel = ref(0)

    /*    const userBoardModules: ModuleList[] = [
      [null, null, null, null, null, null, null, null, null, null, null],
    ] */

    const userBoardModules: ModuleList = [
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
      { name: '', component: null, ghost: null },
    ]

    const reducedMotion = ref(false)
    const colorBlindMode = ref(false)

    const mobileOpen = ref(false)
    const sidebarWidth = ref(18)

    const cardBack = ref('/img/cards/moonfall.webp')
    const pocketPreview = ref(false)
    const routeHistory: any = []

    const favoriteChamps = ref<Champion[]>([])

    // items
    const favoriteItems = ref<Item[]>([])
    const itemSets = ref<ItemSet[]>([])

    return {
      // account
      userAccount,
      userFolders,
      userBoardModules,
      // settings
      themeClass,
      dataTheme,
      accents,
      heroModel,
      colorBlindMode,
      reducedMotion,
      pocketPreview,

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
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
    },
  },
)
