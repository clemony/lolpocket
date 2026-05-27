<script lang="ts" setup>
import type { Data } from "@dnd-kit/abstract"
import { useDragDropManager, useDragDropMonitor } from "@dnd-kit/vue"
import type { BoundingRect } from "~/domain/pocket/helpers/utils"
import { gridRect } from "~/domain/pocket/helpers/utils"

type BackpackGhostData = Data & {
  button?: MaybeRefOrGetter<Record<string, unknown> | undefined>
  item?: Folder | Pocket | SortableFolder | SortablePocket
  kind?: "folder" | "pocket" | "subfolder"
  listType?: "grid" | "sidebar"
}

interface GhostState {
  active: boolean
  gridRect?: BoundingRect
  sourceData?: BackpackGhostData
  targetLabel?: string
  x: number
  y: number
}

const manager = useDragDropManager()
const state = shallowRef<GhostState>({
  active: false,
  x: 0,
  y: 0
})

function dragData(data: unknown): BackpackGhostData | undefined {
  return data && typeof data === "object"
    ? (data as BackpackGhostData)
    : undefined
}

function dataLabel(data: BackpackGhostData | undefined) {
  const item = data?.item as { label?: unknown } | undefined
  const button = toValue(data?.button) as { label?: unknown } | undefined
  const label = button?.label ?? item?.label

  return typeof label === "string" ? label : undefined
}

function snapshot(active = manager.value.dragOperation.status.dragging) {
  const operation = manager.value.dragOperation
  const source = operation.source
  const target = operation.target
  const sourceData = dragData(source?.data)
  const targetData = dragData(target?.data)
  const targetLabel =
    source && target?.accepts(source) ? dataLabel(targetData) : undefined

  state.value = {
    active,
    gridRect: gridRect(manager.value),
    sourceData,
    targetLabel,
    x: operation.position.current.x,
    y: operation.position.current.y
  }
}

useDragDropMonitor({
  onBeforeDragStart: () => snapshot(false),
  onDragStart: () => snapshot(true),
  onDragMove: () => snapshot(true),
  onDragOver: () => snapshot(true),
  onDragEnd: () => {
    state.value = { ...state.value, active: false }
  }
})

const sourceData = computed(() => state.value.sourceData)
const sourceItem = computed(() => sourceData.value?.item)
const sourceButton = computed(() => toValue(sourceData.value?.button))
const sourceCount = computed(() => {
  const item = sourceItem.value as { count?: number } | undefined
  return item?.count
})
const isSidebarSource = computed(() => sourceData.value?.listType === "sidebar")
const isGridSource = computed(() => sourceData.value?.listType === "grid")
const gridStyle = computed(() => ({
  height: state.value.gridRect?.height
    ? `${state.value.gridRect.height}px`
    : undefined,
  width: state.value.gridRect?.width
    ? `${state.value.gridRect.width}px`
    : undefined
}))
</script>

<template>
  <div
    v-if="state.active && sourceData"
    :data-dragging="true"
    :title="state.targetLabel ? `Move to ${state.targetLabel}?` : undefined"
    class="group/btn pointer-events-none fixed z-50"
    :style="{
      left: `${state.x}px`,
      top: `${state.y}px`,
      transform: 'translate(-50%, -50%)'
    }">
    <SidebarTheme v-if="isSidebarSource">
      <UButton v-bind="sourceButton">
        <UBadge v-if="sourceCount" :label="sourceCount" />
      </UButton>
    </SidebarTheme>

    <LazyPocketCardGhost
      v-else-if="isGridSource && sourceItem"
      :pocket="sourceItem as Pocket"
      :style="gridStyle" />
  </div>
</template>
