import { defineStore } from 'pinia'

export const useUiStore = defineStore(
  'UiStore',
  () => {
    const sidebarStates = {
      inboxDropdown: ref<boolean>(false)
    }
    const sidebarOpen = ref(false)
    const commandOpen = ref(false)

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

      // collapse
      sidebarOpen,
      sidebarStates,
      collapseStates,
      commandOpen,
    }
  },
  {
    persist: {
      key: 'tempStore',
      pick: ['collapseStates', 'sidebarStates'],
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)
