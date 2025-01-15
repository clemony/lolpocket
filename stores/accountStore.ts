import { defineStore } from 'pinia';

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('data-theme-light');
    const dataTheme = ref('light');
    const accents = ref('light');

    const riotAccountLinked = ref(true);
    const riotAccount = {
      name: ref('clem'),
      tag: ref('cats'),
    };

    const userFolders = ref<Folder[]>([]);
    const heroModel = ref(0);

    const reducedMotion = ref(false);
    const colorBlindMode = ref(false);

    const mobileOpen = ref(false);
    const sidebarWidth = ref(18);

    const cardBack = ref('/img/cards/moonfall.webp');
    const commandOpen = ref(false);
    const pocketPreview = ref(false);
    const routeHistory: any = [];

    const favoriteChamps = ref<Champion[]>([]);

    //items
    const favoriteItems = ref<Item[]>([]);
    const itemSets = ref<ItemSet[]>([]);

    return {
      //account
      riotAccountLinked,
      riotAccount,
      userFolders,
      //settings
      themeClass,
      dataTheme,
      accents,
      heroModel,
      colorBlindMode,
      reducedMotion,
      pocketPreview,

      //sidebar
      mobileOpen,
      sidebarWidth,

      commandOpen,
      routeHistory,

      cardBack,

      //champs
      favoriteChamps,

      //items
      favoriteItems,
      itemSets,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
      afterHydrate: (ctx) => {
        //const as = useAccountStore();
        // ts.drawerState = false
      },
    },
  }
);
