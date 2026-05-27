// app/domain/backpack/useDragManager.ts
import type { Type } from "@dnd-kit/abstract"
import { DragDropManager, Feedback } from "@dnd-kit/dom"

export const DragManagerKey = Symbol("DragManager")

export interface DragProvider {
  manager: DragDropManager<any, any>
  options?: DragManagerOptions
}

export interface DragManagerOptions {
  reference?: ComputedRef<HTMLElement | undefined>
  offset?: number
}

export interface DragState {
  inRef: () => ComputedRef<boolean | undefined>
}

export function createDragManager() {
  return new DragDropManager({
    plugins: (defaults) => [...defaults]
  })
}
/**
 * The function provideDragManager creates and provides a DragManager with specified options.
 * @param {DragManagerOptions} options - The `options` parameter in the `provideDragManager` function
 * is an object with a default value of `{ offset: 40 }`. This object can have two properties:
 * @returns The `provideDragManager` function is returning the `state` object which contains the
 * `manager` and `options` properties.


*/

export function provideDragManager(
  options: DragManagerOptions = { offset: 40 }
) {
  const state = {
    manager: createDragManager(),
    options: { reference: options.reference, offset: options.offset }
  }
  provide(DragManagerKey, state)
  if (!state) throw new Error("No DragManager provided")
  return state
}

/**
 * The `useDragState` function  provides a reactive state for drag and drop operations,
 * updating based on drag events.
 * @returns The `useDragState` function returns an object with two properties:
 * 1. `manager`: This property contains the `manager` object obtained from the `DragProvider`.
 * 2. `dragState`: This property contains a readonly shallowRef of the current `DragState` snapshot.
 */

export function useDragState() {
  const provider = inject<DragProvider>(DragManagerKey)
  if (!provider) throw new Error("No drag Provider found")
  const manager = provider.manager

  manager.monitor.addEventListener("dragstart", (event) => {
    console.log("🥸 - useDragState - event:", event)
  })
  function snapshot(): DragState {
    const source = manager.dragOperation.source
    const target = manager.dragOperation.target

    function inRef() {
      const sourceEl = source?.element.getBoundingClientRect()
      const refEl = provider?.options?.reference?.value?.getBoundingClientRect()

      const offset = provider?.options?.offset || 40 / 100

      return computed(() => {
        if (!sourceEl || !refEl) return
        const bottom = sourceEl.top < refEl.bottom
        const right = sourceEl.left < refEl.right
        const top = sourceEl.bottom > refEl.top
        if (bottom && right && top) return true
        return false
      })
    }

    return {
      inRef
    }
  }

  const state = shallowRef<DragState>(snapshot())

  const sync = () => {
    state.value = snapshot()
  }

  onMounted(() => {
    const offStart = manager.monitor.addEventListener("dragstart", sync)
    const offOver = manager.monitor.addEventListener("dragover", sync)
    const offEnd = manager.monitor.addEventListener("dragend", sync)
    const offMove = manager.monitor.addEventListener("dragmove", sync)
    onBeforeUnmount(() => {
      offStart()
      offOver()
      offMove()
      offEnd()
    })
  })

  return {
    manager,
    dragState: readonly(state)
  }
}
