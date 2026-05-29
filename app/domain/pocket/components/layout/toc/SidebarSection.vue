<script lang="ts" setup>
import { useDragOperation, useDroppable } from "@dnd-kit/vue"
import { useSortable } from "@dnd-kit/vue/sortable"
import {
  isPocketDragData,
  normalizeDragLocation
} from "~/domain/backpack/utils/dragData"
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

const dragOperation = useDragOperation()
const visibleChildren = computed(() =>
  children.value.filter((child) => {
    const data = dragOperation.source?.data

    if (!isPocketDragData(data) || data.item.key !== child.key) return true
    return data.listType === "sidebar"
  })
)

const { isDropTarget } = useDroppable({
  id: computed(() => `droppable-${safeItem.value.id}`),
  accept: "pocket",
  collisionPriority: 2,
  data: computed(() => ({
    item: safeItem.value,
    kind: "section",
    listType: "sidebar"
  })),
  element: handle
})

function sectionSortableGroup(location: string | undefined) {
  return `section:${location ?? "sections"}`
}

const isDefaultFolder = backpackFolderKeys.includes(
  safeItem.value.id as BackpackFolderKey
)
const location = isDefaultFolder
  ? normalizeDragLocation(safeItem.value.location, "default")
  : normalizeDragLocation(safeItem.value.location, "sections")
const sortableFolder = { ...safeItem.value, location }
const type = isDefaultFolder ? "section" : "subsection"
const { isDragging } = useSortable({
  id: computed(() => safeItem.value.id),
  type,
  sensors: clickFriendlySensors,
  accept: type,
  group: computed(() => sectionSortableGroup(location)),

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
      <!--  <SidebarFolderButton
        ref="handle"
        :is-dragging="computed(() => isDragging)"
        :is-targetted="computed(() => isDropTarget)"
        :open="computed<boolean>(() => open)"
        :section="safeItem" />
      <template #content>
        <div
          v-if="item.subsections?.value.length"
          class="flex w-full max-w-full flex-col gap-0.5">
          <SidebarSortableFolder
            v-for="(sub, i) in item.subsections.value"
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
      </template>-->
    </UCollapsible>
  </div>
</template>
