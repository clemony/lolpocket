import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
/*   sidebar stuff logic in middleware */
  const sidebarExpanded = ref(true)
  const triggerSidebar = refAutoReset(false, 1000)
  const settingsOpen = ref(false)
  const toggleSidebar = useToggle(sidebarExpanded)
  const toggleSettings = useToggle(settingsOpen)
  const enterY = ref<string | number>('-50%')
  const previousEnterY = usePrevious(enterY)
  const enterX = ref<string | number>(0) // for settings
  const leaveY = ref(<string | number>'50%')
  const previousLeaveY = usePrevious(enterY)
  const leaveX = ref<string | number>(0) // for settings

  const pinnedOpen = ref(false)

  // dialog

  const loginOpen = ref(false)
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
    toggleSettings,
    enterY,
    previousEnterY,
    leaveY,
    previousLeaveY,
    enterX,
    leaveX,

    pinnedOpen,

    // dialog
    loginOpen,
    commandOpen,
    contextMenuOpen,
    newFolderOpen,
    champTabValue,
    matchTabValue,
    champTabs,
    matchTabs,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    key: 'tempStore',
    // pick: ['sessionInfo', 'sidebarExpanded'],
  },
})
