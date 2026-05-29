<script lang="ts" setup>
import { useDeepSignal } from "@dnd-kit/vue/composables"
import { useSortable } from "@dnd-kit/vue/sortable"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { pocketCollisionDetector } from "~/domain/backpack/utils/dragCollision"
import { namespacedDragGroup } from "~/domain/backpack/utils/dragData"
import { clickFriendlySensors } from "~/utils/plugins/dnd.sortableSensors"

type ListType = "grid" | "sidebar"

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  item: SortablePocket
  open?: ComputedRef<boolean>
  index?: number
  list: ListType
}>()

const POCKET_SWAP_DELAY = 80
const POCKET_SORTABLE_TRANSITION = {
  duration: 180,
  easing: "cubic-bezier(0.2, 0, 0, 1)",
  idle: true
}

const item = computed(() => props.item)
const editing = shallowRef<boolean>(false)

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

function listTypeFromGroup(group: unknown): ListType | undefined {
  const value = String(group ?? "")

  if (value.startsWith("grid:")) return "grid"
  if (value.startsWith("sidebar:")) return "sidebar"
}

const { isDragging, sortable } = useSortable({
  type: "pocket",
  accept: "pocket",
  data: computed<PocketDragData>(() => ({
    item: item.value,
    button: item.value.button,
    kind: "pocket",
    listType: props.list
  })),
  id: computed(() => `${props.list}:pocket:${item.value.key}`),
  collisionDetector: computed(() => pocketCollisionDetector),
  collisionPriority: 4,
  disabled: computed(() => editing.value),
  group: computed(() => namespacedDragGroup(props.list, item.value.location)),
  index: computed(() => props.index ?? 0),
  element,
  transition: POCKET_SORTABLE_TRANSITION,
  sensors: clickFriendlySensors,
  handle
})

const trackedSortable = useDeepSignal(sortable)
const resolvedDisplayList = computed(
  () => listTypeFromGroup(trackedSortable.value.group) ?? props.list
)
const displayList = shallowRef<ListType>(props.list)
let swapTimer: ReturnType<typeof setTimeout> | undefined

function clearSwapTimer() {
  if (!swapTimer) return
  clearTimeout(swapTimer)
  swapTimer = undefined
}

watch(
  resolvedDisplayList,
  (next) => {
    clearSwapTimer()

    if (next === displayList.value) return

    swapTimer = setTimeout(() => {
      displayList.value = next
      swapTimer = undefined
    }, POCKET_SWAP_DELAY)
  },
  { immediate: true }
)

onScopeDispose(clearSwapTimer)

const { isRowSelected, setRowSelected } = useTableInject<Pocket>()
function onSelectionChange(event: Event, rowId: string) {
  setRowSelected(
    rowId,
    event.target instanceof HTMLInputElement && event.target.checked
  )
}
</script>

<template>
  <div
    ref="element"
    :data-dragging="isDragging"
    :data-list="displayList"
    :class="
      cn(
        'animate-in fade-in zoom-in-95 relative w-full shrink-0 duration-150',
        displayList === 'grid' ? 'size-full min-h-0' : 'h-10 max-h-10 min-h-10'
      )
    "
    @click="onSelectionChange($event, item.key)">
    <SidebarPocketButton
      v-if="displayList === 'sidebar'"
      :key="`sidebar:${item.key}`"
      :item="item">
      <template #button="{ contextOpen }">
        <UButton
          ref="handle"
          :ui="{
            base: 'w-full'
          }"
          :data-dragging="isDragging"
          :data-open="contextOpen"
          :data-active="$route.params.pocket_key === item?.key"
          v-bind="item.button?.value" />
      </template>
    </SidebarPocketButton>
    <BackpackPocketCard
      v-else-if="displayList === 'grid'"
      :key="`grid:${item.key}`"
      ref="handle"
      :is-selected="computed(() => isRowSelected(item.key))"
      :pocket="item" />
  </div>
</template>
