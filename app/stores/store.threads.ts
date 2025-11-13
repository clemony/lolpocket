import { defineStore } from "pinia"

export const useThreadStore = defineStore(
  "threadStore",
  () => {
    const threads = ref<Thread[]>([])
    const authors = ref<Record<string, Author>>({})
    return {
      threads,
      authors,
    }
  },
  {
    persist: {
      key: "threadStore",
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)
