import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
  const sidebarExpanded = ref<boolean>(true)
  const showMiniNav = ref<boolean>(false)
  const activeSidebarContent = ref<string>(null)
  const settingsOpen = ref<boolean>(false)
  const sidebarMenuOpen = ref<boolean>(false)
  const toggleSidebar = useToggle(sidebarExpanded)
  const toggleSettings = useToggle(settingsOpen)

  const pinnedOpen = ref(false)

  watch(() => sidebarExpanded.value, (newVal) => {
    if (newVal == false)
      activeSidebarContent.value = null
  })
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
    showMiniNav,
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
