<script lang="ts" setup>
import { useDeepSignal } from "@dnd-kit/vue/composables"
import { useSortable } from "@dnd-kit/vue/sortable"
import { namespacedDragGroup } from "~/domain/backpack/utils/dragData"

type PocketListType = "grid" | "sidebar"

const props = defineProps<{
  item: SortablePocket
  open?: ComputedRef<boolean>
  index?: number
  list: PocketListType
}>()

const item = computed(() => props.item)
const editing = shallowRef<boolean>(false)

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

function listTypeFromGroup(group: unknown): PocketListType | undefined {
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
  collisionPriority: 4,
  disabled: computed(() => editing.value),
  group: computed(() => namespacedDragGroup(props.list, item.value.location)),
  index: computed(() => props.index ?? 0),
  element,
  handle
})

const trackedSortable = useDeepSignal(sortable)
const displayList = computed(
  () => listTypeFromGroup(trackedSortable.value.group) ?? props.list
)
</script>

<template>
  <div
    ref="element"
    :data-dragging="isDragging"
    :data-list="displayList"
    :class="
      cn('w-full grow', {
        'size-full': displayList === 'grid',
        'max-h-10': displayList === 'sidebar'
      })
    ">
    <SidebarPocketButton v-if="displayList === 'sidebar'" :item="item">
      <template #button="{ contextOpen }">
        <UButton
          ref="handle"
          :data-dragging="isDragging"
          :data-open="contextOpen"
          :data-active="$route.path === item.button?.value.to"
          v-bind="item.button?.value"
          :to="undefined" />
      </template>
    </SidebarPocketButton>
    <BackpackPocketCard
      v-else-if="displayList === 'grid'"
      ref="handle"
      :data-dragging="isDragging"
      :pocket="item" />
  </div>
</template>
