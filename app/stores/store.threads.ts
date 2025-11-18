import { defineStore } from "pinia"

export const useThreadStore = defineStore(
  "threadStore",
  () => {
    const threads = ref<Record<string, CommentData[]>>({})
    const authors = ref<Record<string, User>>({})
    const reportComment = ref<CommentData>(null)
    const reportOpen = shallowRef<boolean>(false)

    const toggleOpen = useToggle(reportOpen)
    return {
      authors,
      reportComment,
      threads,
      reportOpen,
      report: () => toggleOpen(),
    }
  },
  {
    persist: {
      key: "threadStore",
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
