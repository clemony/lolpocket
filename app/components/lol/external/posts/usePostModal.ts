import { LazyPostModal } from "#components"

export const PostModalKey = Symbol("PostModal")

export interface UsePostModalReturn {
  posts: ComputedRef<Post[]>
  activeIndex: Ref<number>
  activePost: ComputedRef<Post | null>
  prev: (e?: MouseEvent) => void
  next: (e?: MouseEvent) => void
  ctrls: PostControl[]
  open: (post: Post, index: number) => void
  close: () => void
}

interface PostControl {
  disabled?: ComputedRef<boolean>
  icon: string
  onClick: (e?: MouseEvent) => void
  label: string
}

type PostSource = Ref<Post[] | undefined> | ComputedRef<Post[] | undefined> | Post[]

export const usePostModal = (sourcePosts?: PostSource): UsePostModalReturn => {
  const posts = computed<Post[]>(() => toValue(sourcePosts) ?? [])
  const activeIndex = shallowRef(0)
  const activePost = computed<Post | null>(
    () => posts.value[activeIndex.value] ?? null
  )

  const overlay = useOverlay()

  function stopEvent(e?: MouseEvent) {
    e?.preventDefault()
    e?.stopPropagation()
  }

  function clampIndex(index: number) {
    return Math.min(Math.max(index, 0), Math.max(posts.value.length - 1, 0))
  }

  function setActiveIndex(index: number) {
    activeIndex.value = clampIndex(index)
  }

  function resolveIndex(post: Post, index: number) {
    if (posts.value[index]?.source_id === post.source_id) return index

    const matchedIndex = posts.value.findIndex(
      item => item.source_id === post.source_id
    )

    if (matchedIndex >= 0) return matchedIndex

    return index
  }

  function prev(e?: MouseEvent) {
    stopEvent(e)
    setActiveIndex(activeIndex.value - 1)
  }

  function next(e?: MouseEvent) {
    stopEvent(e)
    setActiveIndex(activeIndex.value + 1)
  }

  const ctrls: PostControl[] = [
    {
      disabled: computed(() => activeIndex.value <= 0),
      icon: "i-caret-left",
      label: "prev",
      onClick: prev
    },
    {
      disabled: computed(
        () => !posts.value.length || activeIndex.value >= posts.value.length - 1
      ),
      label: "next",
      icon: "i-caret-right",
      onClick: next
    }
  ]

  const modal = overlay.create(LazyPostModal, {
    destroyOnClose: false,
    props: {
      ctrls,
      post: null
    }
  })

  watch(posts, (items) => {
    if (!items.length) {
      activeIndex.value = 0
      return
    }

    setActiveIndex(activeIndex.value)
  }, { immediate: true })

  watch(activePost, (post) => {
    if (!post) return

    modal.patch({
      post
    })
  })

  return {
    posts,
    activeIndex,
    activePost,
    ctrls,
    prev,
    next,
    open: (post: Post, index: number) => {
      if (!posts.value.length) return

      setActiveIndex(resolveIndex(post, index))

      if (!activePost.value) return

      modal.open({
        ctrls,
        post: activePost.value
      })
    },
    close: () => modal.close()
  }
}

export function providePostModal(state: UsePostModalReturn) {
  provide(PostModalKey, state)
  return state
}

export function usePostModalInject() {
  const state = inject<UsePostModalReturn | undefined>(PostModalKey)

  if (!state) throw new Error("No post modal provider found")

  return state
}
