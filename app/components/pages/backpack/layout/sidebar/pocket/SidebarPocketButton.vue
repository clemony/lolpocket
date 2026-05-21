<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { pocketSidebarContextUi } from "~/domain/pocket/menu/contextActions"
import type { PocketProps } from "~/domain/pocket/types"

const props = withDefaults(
  defineProps<{
    item: PocketProps
    open?: boolean
    index?: number
  }>(),
  {
    open: false,
    type: "button"
  }
)
const emit = defineEmits<{
  "update:open": [value: boolean]
  "update:label": [value: string]
}>()

const contextOpen = shallowRef<boolean>(false)

const store = pocketStore()

const { editing, randomizeHistoryName, toggleEdit } =
  useEditableButtonProvider()
function handleEdit(event: string) {
  console.log("🥸 - handleEdit - event:", event)
  store.updatePocketName(props.item.key, event)
}

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

const { isDragging } = useSortable({
  id: computed(() => props.item.key ?? ""),
  type: "pocket",
  accept: "pocket",
  group: computed(() => props.item.location ?? "folders"),
  index: computed(() => props.index ?? 0),
  data: computed(() => props.item),
  element,
  handle
})
</script>

<template>
  <li
    ref="element"
    :data-dragging="isDragging"
    class="h-10 max-h-10 w-full overflow-hidden rounded-lg pl-0.5">
    <PocketContextMenu
      v-model:open="contextOpen"
      :item="item.data?.value"
      type="sidebar"
      :ui="pocketSidebarContextUi"
      @toggle-edit="toggleEdit()">
      <EditableButton
        ref="handle"
        :label="item.data?.value.label"
        :avatar="props.item.avatar"
        :ui="{
          base: cn('pr-6', {
            'bg-p1/80 backdrop-blur-sm': isDragging
          }),
          label: 'align-baseline text-md! font-medium tracking-tight'
        }"
        color="primary"
        :value="item.data?.value.label || ''"
        :variant="contextOpen ? 'soft' : isDragging ? 'solid' : 'ghost'"
        @update:label="handleEdit($event)">
        <template #input-actions>
          <LazyUButton
            size="xs"
            icon="i-sparkle"
            :ui="{ base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm' }"
            @pointerdown.prevent.stop
            @click.stop.prevent="randomizeHistoryName()" />
        </template>
      </EditableButton>
    </PocketContextMenu>
  </li>
</template>
