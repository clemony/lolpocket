<script lang="ts" setup>
import { RestrictToVerticalAxis } from "@dnd-kit/abstract/modifiers"
import { useDroppable } from "@dnd-kit/vue"
import { useSortable } from "@dnd-kit/vue/sortable"
import { useVisiblePocketChildren } from "~/domain/backpack/composables/useVisiblePocketChildren"
import { normalizeDragLocation } from "~/domain/backpack/utils/dragData"
import { clickFriendlySensors } from "~/utils/plugins/dnd.sortableSensors"

const props = withDefaults(
  defineProps<{
    item: SortableFolder
    disabled?: boolean
    collapsed?: boolean
    index: number
  }>(),
  {
    disabled: false
  }
)

const safeItem = computed(() => safeObject(toValue(props.item)))
const children = computed(() => safeObject(toValue(props.item.children)))

const { sidebarFolderRefs } = storeToRefs(pocketStore())

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")
const open = computed<boolean>(
  () => sidebarFolderRefs.value[safeItem.value.id] ?? false
)

const visibleChildren = useVisiblePocketChildren(children, "sidebar")

const { isDropTarget } = useDroppable({
  id: computed(() => `droppable-${safeItem.value.id}`),
  accept: "pocket",
  collisionPriority: 2,
  data: computed(() => ({
    item: safeItem.value,
    kind: "folder",
    listType: "sidebar"
  })),
  element: handle
})

function folderSortableGroup(location: string | undefined) {
  return `folder:${location ?? "folders"}`
}

const isDefaultFolder = backpackFolderKeys.includes(
  safeItem.value.id as BackpackFolderKey
)
const location = isDefaultFolder
  ? normalizeDragLocation(safeItem.value.location, "default")
  : normalizeDragLocation(safeItem.value.location, "folders")

const sortableFolder = { ...safeItem.value, location }
const type = isDefaultFolder ? "folder" : "subfolder"

const { isDragging } = useSortable({
  id: computed(() => safeItem.value.id),
  type,
  sensors: clickFriendlySensors,
  accept: type,
  group: computed(() => folderSortableGroup(location)),
  modifiers: [RestrictToVerticalAxis],
  data: computed(() => ({
    kind: type,
    item: sortableFolder,
    button: safeItem.value.button,
    open: computed(() => sidebarFolderRefs.value[safeItem.value.id]),
    listType: "sidebar"
  })),
  collisionPriority: 1,
  index: computed(() => props.index),
  element,
  handle
})
</script>

<template>
  <div ref="element" class="w-full max-w-full">
    <UCollapsible
      v-if="safeItem.id"
      v-model:open="sidebarFolderRefs[safeItem.id]"
      as="div"
      :default-open="!!children.length">
      <SidebarFolderButton
        ref="handle"
        :is-dragging="computed(() => isDragging)"
        :is-targetted="computed(() => isDropTarget)"
        :open="computed<boolean>(() => open)"
        :folder="safeItem" />
      <template #content>
        <div
          v-if="item.subfolders?.value.length"
          class="flex w-full max-w-full flex-col gap-0.5">
          <SidebarSortableFolder
            v-for="(sub, i) in item.subfolders.value"
            :key="sub.id"
            :index="i"
            :item="sub" />
        </div>
        <div v-if="children.length" class="flex w-full flex-col gap-px">
          <PocketCardOrButton
            v-for="(child, i) in visibleChildren"
            :key="child.key"
            :index="i"
            list="sidebar"
            :item="child"
            @dblclick.stop.prevent />
        </div>
      </template>
    </UCollapsible>
  </div>
</template>
