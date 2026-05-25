<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { useDragState } from "~/composables/ui/useDragManager"

const props = defineProps<{
  item: SortablePocket
  open?: ComputedRef<boolean>
  index?: number
}>()

const contextOpen = shallowRef<boolean>(false)

const store = pocketStore()

const { editing, randomizeHistoryName, toggleEdit } =
  useEditableButtonProvider()
function handleEdit(event: string) {
  store.updatePocketName(props.item.key, event)
}

const { dragState } = useDragState()

const droppable = computed(
  () =>
    dragState.value.dragging &&
    (dragState.value.targetType === "folder" ||
      dragState.value.targetType === "subfolder")
)

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

const { isDragging } = useSortable({
  ...props.item.sortable,
  index: computed(() => props.index ?? 0),
  element,
  handle
})

const dragData = computed(
  () => toValue(props.item.sortable.data) as PocketDragData
)

const shared = computed(() => ({
  avatar: dragData.value.avatar || undefined,
  label: props.item?.label || " "
}))
</script>

<template>
  <div
    ref="element"
    :data-dragging="isDragging"
    :data-open="contextOpen"
    :data-active="$route.path === dragData.to"
    :data-droppable="droppable"
    class="group/btn relative flex max-w-full grow overflow-visible rounded-lg">
    <UTheme :props="{ button: shared }">
      <PocketContextMenu
        v-model:open="contextOpen"
        :pocket="props.item"
        type="sidebar"
        @toggle-edit="toggleEdit()">
        <EditableButton
          ref="handle"
          :label="item.label"
          :avatar="dragData.avatar"
          :value="item?.label || ''"
          @update:label="handleEdit($event)">
          <template #input-actions>
            <LazyUButton
              block
              size="xs"
              icon="i-sparkle"
              :ui="{
                base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm'
              }"
              @pointerdown.prevent.stop
              @click.stop.prevent="randomizeHistoryName()" />
          </template>
        </EditableButton>
      </PocketContextMenu>
    </UTheme>
  </div>
</template>
