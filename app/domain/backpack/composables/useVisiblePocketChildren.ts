import { useDragOperation } from "@dnd-kit/vue"
import { isPocketDragData } from "~/domain/backpack/utils/dragData"

const MIRROR_REVEAL_DELAY = 170

export function useVisiblePocketChildren(
  children: MaybeRefOrGetter<SortablePocket[] | undefined>,
  listType: ListType
) {
  const dragOperation = useDragOperation()
  const hiddenMirror = shallowRef<{
    key: string
    listType: ListType
  }>()
  let releaseTimer: ReturnType<typeof setTimeout> | undefined

  function clearReleaseTimer() {
    if (!releaseTimer) return
    clearTimeout(releaseTimer)
    releaseTimer = undefined
  }

  watch(
    () => dragOperation.source?.data,
    (data) => {
      clearReleaseTimer()

      if (isPocketDragData(data)) {
        hiddenMirror.value = {
          key: data.item.key,
          listType: data.listType
        }
        return
      }

      if (!hiddenMirror.value) return

      releaseTimer = setTimeout(() => {
        hiddenMirror.value = undefined
        releaseTimer = undefined
      }, MIRROR_REVEAL_DELAY)
    },
    { immediate: true }
  )

  onScopeDispose(clearReleaseTimer)

  return computed(() =>
    toValue(children)?.filter((child) => {
      if (hiddenMirror.value?.key !== child.key) return true
      return hiddenMirror.value.listType === listType
    })
  )
}
