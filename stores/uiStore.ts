import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
  const sidebarExpanded = ref(true)

  // dialog

  const loginOpen = ref(false)
  const commandOpen = ref(false)
  const contextMenuOpen = ref(false)
  const newFolderOpen = ref(false)
  const triggerSidebar = refAutoReset(false, 1000)
  const champTabValue = ref('all')
  const matchTabValue = ref('score')
  const champTabs = ref<Tabs>({
    currentValue: {
      pos: 0,
      width: 0,
    },
    returnValue: {
      pos: 0,
      width: 0,
    },
  })
  const matchTabs = ref<Tabs>({
    currentValue: {
      pos: 0,
      width: 0,
    },
    returnValue: {
      pos: 0,
      width: 0,
    },
  })

  return {
    sidebarExpanded,

    // dialog
    loginOpen,
    commandOpen,
    contextMenuOpen,
    newFolderOpen,
    triggerSidebar,
    champTabValue,
    matchTabValue,
    champTabs,
    matchTabs,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    key: 'tempStore',
    pick: ['sessionInfo'],
  },
})
