import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
  const sidebarExpanded = ref(true)
  const triggerSidebar = refAutoReset(false, 1000)
  const rightbarExpanded = ref(true)
  const triggerRightbar = refAutoReset(false, 1000)

  const rightbarAvailable = computed (() => {
    const match = /pocket/g
    const route = useRoute()
    return route.path.match(match)
  })

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
    rightbarExpanded,
    triggerRightbar,
    rightbarAvailable,

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
    pick: ['sessionInfo'],
  },
})
