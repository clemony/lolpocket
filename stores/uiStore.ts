import { defineStore } from 'pinia'

export const useUiStore = defineStore(
  'UiStore',
  () => {
    const sidebarStates = {
      inboxDropdown: ref<boolean>(false)
    }

    const commandOpen = ref(false)
    const champTabValue = ref('all')
    const matchTabValue = ref('score')
    const champTabs = ref<Tabs>({
      currentValue: {
        width: 0,
        pos: 0,
      },
      returnValue: {
        width: 0,
        pos: 0,
      },
    })
    const matchTabs = ref<Tabs>({
      currentValue: {
        width: 0,
        pos: 0,
      },
      returnValue: {
        width: 0,
        pos: 0,
      },
    })

    const collapseStates = {
      championInfo: ref([true, true, true]),
      panel: {
        nav: ref([true, true, true, true, true, true]),
        pocket: ref([true, true]),
      },
    }

    return {

      // dialog
      sidebarStates,
      champTabs,
      champTabValue,
      collapseStates,
      commandOpen,
      matchTabs,
      matchTabValue
    }
  },
  {
    persist: {
      key: 'tempStore',
      storage: piniaPluginPersistedstate.sessionStorage(),
      // pick: ['sessionInfo', 'sidebarExpanded'],
    },
  }
)
