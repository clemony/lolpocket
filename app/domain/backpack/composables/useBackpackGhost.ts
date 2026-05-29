import { isSortable } from "@dnd-kit/dom/sortable"
import { useDragDropMonitor } from "@dnd-kit/vue"
import type { BackpackGhostData, GhostState } from "~/domain/backpack/types"

const DEFAULT_ANCHOR = { x: 0.5, y: 0.5 }

export function dragData(data: unknown): BackpackGhostData | undefined {
  return data && typeof data === "object"
    ? (data as BackpackGhostData)
    : undefined
}

export function dataLabel(data: BackpackGhostData | undefined) {
  const item = data?.item as { label?: unknown } | undefined
  const button = toValue(data?.button) as { label?: unknown } | undefined
  const label = button?.label ?? item?.label

  return typeof label === "string" ? label : undefined
}

function listTypeFromGroup(group: unknown): ListType | undefined {
  const value = String(group ?? "")

  if (value.startsWith("grid:")) return "grid"
  if (value.startsWith("sidebar:")) return "sidebar"
}

function sortableGroup(entity: Sortable | null) {
  if (!isSortable(entity as Draggable | null)) return undefined

  return (entity as { group?: unknown }).group
}

function entityListType(
  entity: Sortable | null,
  data: BackpackGhostData | undefined
) {
  return listTypeFromGroup(sortableGroup(entity)) ?? data?.listType
}

function pickupAnchor(
  rect: DOMRect | undefined,
  point: { x: number; y: number }
) {
  if (!rect?.width || !rect.height) return DEFAULT_ANCHOR

  return {
    x: (point.x - rect.left) / rect.width,
    y: (point.y - rect.top) / rect.height
  }
}

export function useBackpackGhost(manager: ComputedRef<Manager>) {
  const state = shallowRef<GhostState>({
    active: false,
    anchor: DEFAULT_ANCHOR,
    current: null,
    source: null,
    target: null
  })

  function groupBounding(
    group: unknown,
    excludeId: string | number | undefined
  ) {
    if (group === undefined) return undefined

    for (const droppable of manager.value.registry.droppables) {
      if (droppable.id === excludeId) continue
      if (!isSortable(droppable)) continue
      if (droppable.group !== group) continue

      const rect = droppable.element?.getBoundingClientRect()
      if (rect?.width && rect?.height) return rect
    }
  }

  function snapshotData(entity: Sortable | null) {
    const data = dragData(entity?.data)
    if (!data) return undefined

    const group = sortableGroup(entity)
    const listType = entityListType(entity, data)
    const ownBounding = entity?.element?.getBoundingClientRect()
    const groupFallback = groupBounding(group, entity?.id)
    const bounding =
      listType && listType !== data.listType
        ? (groupFallback ?? ownBounding)
        : (ownBounding ?? groupFallback)

    return {
      ...data,
      bounding,
      listType
    }
  }

  function displayTarget(
    source: Draggable | null,
    target: Droppable | null,
    sourceData: BackpackGhostData,
    targetData: BackpackGhostData | undefined
  ) {
    if (!source || !target || !targetData) return sourceData

    if (target.id === source.id) {
      const previousSourceList = state.value.source?.listType
      if (sourceData.listType && sourceData.listType !== previousSourceList) {
        return sourceData
      }

      return state.value.current ?? sourceData
    }

    if (!target.accepts(source)) return sourceData
    return targetData
  }

  function snapshot({
    active = manager.value.dragOperation.status.dragging,
    resetAnchor = false
  } = {}) {
    const operation = manager.value.dragOperation
    const source = operation.source
    const target = operation.target
    const sourceData = snapshotData(source)

    if (!sourceData) return

    const targetData = snapshotData(target)
    const current = displayTarget(source, target, sourceData, targetData)
    const anchor = resetAnchor
      ? pickupAnchor(sourceData.bounding, operation.position.current)
      : state.value.anchor

    state.value = {
      active,
      anchor,
      current,
      source: sourceData,
      target: targetData
    }
  }

  useDragDropMonitor({
    onBeforeDragStart: () => snapshot({ active: false, resetAnchor: true }),
    onDragStart: () => snapshot({ active: true, resetAnchor: true }),
    onDragMove: () => snapshot(),
    onDragOver: () => snapshot(),
    onDragEnd: () => {
      state.value = { ...state.value, active: false }
    }
  })

  const source = computed(() => state.value.source)
  const target = computed(() => state.value.target)
  const current = computed(() => state.value.current)
  const sourceItem = computed(() => source.value?.item)
  const sourceButton = computed(() => toValue(source.value?.button))
  const sourceCount = computed(() => {
    const item = sourceItem.value as { count?: number } | undefined
    return item?.count
  })
  const sourceOpen = computed(() => toValue(source.value?.open))
  const targetLabel = computed(() => dataLabel(target.value ?? undefined))
  const currentStyle = computed(() => {
    const frame = source.value?.bounding
    const rect = current.value?.bounding
    const anchor = state.value.anchor

    return {
      height: rect?.height ? `${rect.height}px` : undefined,
      left: frame ? `${anchor.x * frame.width}px` : "50%",
      top: frame ? `${anchor.y * frame.height}px` : "50%",
      transform: `translate(${-anchor.x * 100}%, ${-anchor.y * 100}%)`,
      width: rect?.width ? `${rect.width}px` : undefined
    }
  })

  return {
    current,
    currentStyle,
    source,
    sourceButton,
    sourceCount,
    sourceItem,
    sourceOpen,
    state,
    target,
    targetLabel
  }
}
