import { defineStore } from 'pinia'

export const useThreadStore = defineStore(
  'threadStore',
  () => {
    const threads = ref<Record<string, CommentData[]>>({})
    const authors = ref<Record<string, User>>({})
    const reportComment = ref<CommentData>(null)
    return {
      authors,
      reportComment,
      threads,
    }
  },
  {
    persist: {
      key: 'threadStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
