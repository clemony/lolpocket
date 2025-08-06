import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
  const sidebarExpanded = ref(true)

  const activeSidebarContent = ref<string>(null)
  const triggerSidebar = refAutoReset(false, 1000)
  const settingsOpen = ref(false)
  const sidebarMenuOpen = ref(false)
  const toggleSidebar = useToggle(sidebarExpanded)
  const toggleSettings = useToggle(settingsOpen)

  const pinnedOpen = ref(false)

  // dialog

  const userNav = ref(null)
  const commandOpen = ref(false)
  const contextMenuOpen = ref(false)
  const newFolderOpen = ref(false)
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
    triggerSidebar,
    toggleSidebar,
    settingsOpen,
    sidebarMenuOpen,
    toggleSettings,

    pinnedOpen,

    // dialog
    userNav,
    commandOpen,
    contextMenuOpen,
    newFolderOpen,
    champTabValue,
    matchTabValue,
    champTabs,
    matchTabs,

    // sidebar
    activeSidebarContent,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    key: 'tempStore',
    // pick: ['sessionInfo', 'sidebarExpanded'],
  },
})
