<script lang="ts" setup>
import { useDragOperation, useDroppable } from "@dnd-kit/vue"
import { useSortable } from "@dnd-kit/vue/sortable"
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

const { source } = useDragOperation()
const visibleChildren = computed(() =>
  children.value.filter((child) => {
    if (source?.data?.value?.key !== child.key) return true
    return source?.data.value.listSource === "sidebar"
  })
)

const { isDropTarget } = useDroppable({
  id: computed(() => `droppable-${safeItem.value.id}`),
  accept: "pocket",
  collisionPriority: 2,
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
      :default-open="!!children.length"
      :ui="{
        root: cn(
          'group/collapse-child w-full max-w-full overflow-hidden',
          type === 'subfolder' ? 'group/subfolder' : 'group/mainfolder'
        ),
        content: cn(
          'relative my-0! ml-4.5 grid max-h-fit w-full max-w-[calc(100%-var(--spacing)*4.5)] auto-rows-auto gap-y-1.5 overflow-hidden py-0.5 pr-4 pl-2.5',
          'before:pointer-events-none before:absolute before:inset-y-2 before:left-px before:w-px before:border-l before:border-l-p4/60'
        )
      }">
      <SidebarFolderButton
        ref="handle"
        :is-dragging="computed(() => isDragging)"
        :is-targetted="computed(() => isDropTarget)"
        :open="computed<boolean>(() => open)"
        :folder="safeItem"
        @click.stop />
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
