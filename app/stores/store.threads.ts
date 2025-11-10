import { defineStore } from 'pinia'

export const useThreadStore = defineStore(
  'threadStore',
  () => {
    const threads = ref<Thread[]>([])
    return {
      threads,
    }
  },
  {
    persist: {
      key: 'threadStore',
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)
