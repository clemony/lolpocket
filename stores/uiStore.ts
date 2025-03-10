import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
  const sidebarExpanded = ref(true)

  // dialog

  const loginOpen = ref(false)
  const commandOpen = ref(false)
  const contextMenuOpen = ref(false)
  const newFolderOpen = ref(false)
  const triggerSidebar = refAutoReset(false, 1000)

  return {
    sidebarExpanded,

    // dialog
    loginOpen,
    commandOpen,
    contextMenuOpen,
    newFolderOpen,
    triggerSidebar,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    key: 'tempStore',
    pick: ['sessionInfo'],
  },
})
