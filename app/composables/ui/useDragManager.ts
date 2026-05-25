// app/domain/backpack/useDragManager.ts
import type { Type } from "@dnd-kit/abstract"
import { DragDropManager, Feedback } from "@dnd-kit/dom"
import { isBackpackDragData } from "~/domain/pocket/helpers/dragData"

export const DragManagerKey = Symbol("DragManager")

interface DragState {
  dragging: boolean
  sourceData: FolderDragData | PocketDragData | undefined
  sourceType: Type | undefined
  targetData: FolderDragData | PocketDragData | undefined
  targetType: Type | undefined
  targetLabel: string | undefined
}

export function createDragManager() {
  return new DragDropManager({})
}

export function provideDragManager() {
  const state = createDragManager()
  provide(DragManagerKey, state)
  if (!state) throw new Error("No DragManager provided")
  return state
}

export function useDragState() {
  const manager = inject<DragDropManager<any, any>>(DragManagerKey)
  if (!manager) throw new Error("No drag manager")
  const dragManager = manager

  function snapshot(): DragState {
    const source = dragManager.dragOperation.source
    const target = dragManager.dragOperation.target

    return {
      dragging: dragManager.dragOperation.status.dragging,
      sourceData: isBackpackDragData(source?.data) ? source.data : undefined,
      sourceType: source?.type,
      targetData: isBackpackDragData(target?.data) ? target.data : undefined,
      targetType: target?.type,
      targetLabel:
        typeof target?.data?.item?.label === "string"
          ? target?.type === "subfolder"
            ? `"${target?.data?.item?.label}"`
            : target?.data?.item?.label
          : undefined
    }
  }

  const state = shallowRef<DragState>(snapshot())

  const sync = () => {
    state.value = snapshot()
  }

  onMounted(() => {
    const offStart = dragManager.monitor.addEventListener("dragstart", sync)
    const offOver = dragManager.monitor.addEventListener("dragover", sync)
    const offEnd = dragManager.monitor.addEventListener("dragend", sync)
    onBeforeUnmount(() => {
      offStart()
      offOver()
      offEnd()
    })
  })

  return {
    manager: dragManager,
    dragState: readonly(state)
  }
}
