import { defineStore } from "pinia"

export const threads = defineStore(
  "threadStore",
  () => {
    const threads = ref<Record<string, Record<string, CommentData>>>({})
    const children = ref<Record<string, Record<string, string[]>>>({})
    const reportComment = ref<CommentData | null>(null)
    const reportOpen = shallowRef<boolean>(false)

    const toggleOpen = useToggle(reportOpen)
    // -----------------------------------------
    // core helper: maintains child arrays sorted
    // -----------------------------------------
    function insertChild(
      threadId: string,
      parentId: string,
      commentId: string
    ) {
      if (!children.value[threadId]) children.value[threadId] = {}
      const list = children.value[threadId]?.[parentId] ?? []

      if (!list.includes(commentId)) list.push(commentId)

      list.sort((a, b) => {
        const A = threads.value[threadId]?.[a]
        const B = threads.value[threadId]?.[b]
        return (B?.score ?? 0) - (A?.score ?? 0)
      })

      children.value[threadId][parentId] = list
    }

    // -----------------------------------------
    // set a single comment
    // -----------------------------------------
    function setComment(threadId: string, comment: CommentData) {
      if (!threads.value[threadId]) threads.value[threadId] = {}

      threads.value[threadId][comment.id] = comment

      const pid = comment.parent_id ?? "root"
      insertChild(threadId, pid, comment.id)
    }

    // -----------------------------------------
    // set many comments (bulk)
    // -----------------------------------------
    function setThreadComments(threadId: string, comments: CommentData[]) {
      if (!threads.value[threadId]) threads.value[threadId] = {}
      if (!children.value[threadId]) children.value[threadId] = {}

      for (const c of comments) {
        threads.value[threadId][c.id] = c
        const pid = c.parent_id ?? "root"
        insertChild(threadId, pid, c.id)
      }
    }

    // -----------------------------------------
    // getters
    // -----------------------------------------
    function getComment(threadId: string, commentId: string) {
      return threads.value[threadId]?.[commentId]
    }

    function getChildComments(threadId: string, parentId: string | null) {
      const pid = parentId ?? "root"
      const ids = children.value[threadId]?.[pid] ?? []
      return ids
        .map((id) => threads.value[threadId]?.[id])
        .filter((item): item is CommentData => Boolean(item))
    }

    function getSortedRootComments(threadId: string, sortBy: "best" | "new") {
      const thread = threads.value[threadId]
      if (!thread) return []

      const rootIds = children.value[threadId]?.root ?? []
      const items = rootIds
        .map((id) => thread[id])
        .filter((item): item is CommentData => Boolean(item))

      if (sortBy === "best") {
        items.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
      } else if (sortBy === "new") {
        items.sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        )
      }

      return items
    }

    return {
      children,
      getChildComments,
      getComment,
      getSortedRootComments,
      report: () => toggleOpen(),
      reportComment,
      reportOpen,
      setComment,
      setThreadComments,
      threads,
    }
  },
  {
    persist: {
      key: "threadStore",
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
