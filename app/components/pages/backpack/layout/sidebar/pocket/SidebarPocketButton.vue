<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { namespacedDragGroup } from "~/domain/pocket/helpers/dragLocation"
import type { EditableButtonInstance } from "~~/layers/ui/app/types"

const props = defineProps<{
  item: SortablePocket
  open?: ComputedRef<boolean>
  index?: number
}>()

const item = computed(() => props.item)
const contextOpen = shallowRef<boolean>(false)

const store = pocketStore()

const element = useTemplateRef<HTMLElement>("element")
const editing = shallowRef<boolean>(false)
const button = computed(() => item.value.button?.value)

const { isDragging } = useSortable({
  type: "pocket",
  accept: "pocket",
  data: computed<PocketDragData>(() => ({
    item: item.value,
    button: item.value.button,
    kind: "pocket",
    listType: "sidebar"
  })),
  id: computed(() => `sidebar:pocket:${item.value.key}`),
  collisionPriority: 4,
  disabled: computed(() => editing.value),
  group: computed(() => namespacedDragGroup("sidebar", item.value.location)),
  index: computed(() => props.index ?? 0),
  element
})

function handleEdit(event: string) {
  store.updatePocketName(props.item.key, event)
  editing.value = false
}

function handleToggleEdit() {
  contextOpen.value = false
  nextTick(() => {
    editing.value = true
  })
}
</script>

<template>
  <!--

  -->
  <div class="w-full">
    <EditableButton
      v-if="editing"
      :model-value="item.label"
      :avatar="button?.avatar"
      :randomizable="true"
      autofocus
      required
      @update:model-value="handleEdit($event)" />
    <PocketContextMenu
      v-else
      v-model:open="contextOpen"
      :disabled="editing || !item"
      :pocket="item"
      as-child
      type="sidebar"
      @toggle-edit="handleToggleEdit()">
      <UButton
        ref="element"
        :data-dragging="isDragging"
        :data-open="contextOpen"
        :data-active="$route.path === button?.to"
        v-bind="button"
        :to="undefined" />
    </PocketContextMenu>
  </div>
</template>
