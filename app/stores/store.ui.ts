import { defineStore } from 'pinia'

export const useUiStore = defineStore(
  'UiStore',
  () => {
    const openChampionTab = ref<string>(null)
    const sidebarStates = {
      inboxDropdown: ref<boolean>(false),
    }
    const sidebarOpen = ref(false)
    const profileSettings = ref<boolean>(false)
    const commandOpen = ref(false)
    const toggles = ref({
      backpack: {
        pinned: true,
        positions: true,
        tags: true,
      },
    })

    const collapseStates = {
      championInfo: ref([true, true, true]),
      panel: {
        nav: ref([true, true, true, true, true, true]),
        pocket: ref(false),
      },
    }
    const blockDialog = ref<boolean>(false)
    return {
      // dialog
      blockDialog,
      // tab
      openChampionTab,

      sidebarOpen,
      sidebarStates,
      // sidebar
      profileSettings,

      // collapse
      collapseStates,
      commandOpen,

      toggles,
    }
  },
  {
    persist: {
      key: 'tempStore',
      pick: ['collapseStates', 'sidebarStates', 'openChampionTab'],
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)
