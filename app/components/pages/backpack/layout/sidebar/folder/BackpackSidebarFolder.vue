<script lang="ts" setup>
import type { Folder } from "#shared/schema"
import { useSortable } from "@dnd-kit/vue/sortable"
import type { CollapsibleProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"
import { editFolderIcon } from "~/domain/pocket/folder/editFolder"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import type { PocketProps } from "~/domain/pocket/types"
defineOptions({
  inheritAttrs: false
})

const props = defineProps<
  CollapsibleProps & {
    item: Folder
    collapsed?: boolean
    index: number
    group: string
  }
>()

const emit = defineEmits<{
  "update:open": [value: boolean]
}>()
const item = computed(() => safeObject(props.item))

const { children, childRefs, childKey } = useFolderChildren(item)
const delegated = reactiveOmit(props, "item")

const contextOpen = shallowRef<boolean>(false)

const { sidebarFolderRefs } = useBackpack()
const store = pocketStore()

const { editing, toggleEdit } = useEditableButtonProvider()
const disabled = shallowRef<boolean>(false)

function updatePocketName(child: PocketProps, label: string) {
  store.updatePocketName(child.key, label)
}
const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")
const isDefaultFolder = computed(() =>
  Object.hasOwn(backpackFolders, item.value.id)
)

function toggleFolder() {
  if (!item.value.id || editing.value) return
  sidebarFolderRefs.value[item.value.id] =
    !sidebarFolderRefs.value[item.value.id]
}

/* useSortable({
  id: computed(() => props.item.id),
  index: computed(() => props.index ?? 0),
  group: props.group || "backpack",
  type: "folder",
  accept: "pocket",
  element,
  handle,
  sensors: clickFriendlySensors,
  disabled: computed(() => contextOpen.value),
  data: computed(() => ({ kind: "folder" as const, id: props.item.id }))
}) */
</script>

<template>
  <li ref="element" class="w-full" @click.stop="toggleFolder()">
    <FolderContextMenu
      v-model:open="contextOpen"
      :disabled="editing || !item || disabled"
      :folder="item"
      @toggle-edit="toggleEdit()"
      @keydown.meta="disabled = true"
      @update:icon-key="editFolderIcon(item, $event)">
      <UCollapsible
        v-if="!collapsed && item?.id"
        v-bind="delegated"
        v-model:open="sidebarFolderRefs[item.id]"
        :disabled="editing || !item.children?.value.length"
        :ui="{
          root: 'group/collapse-child overflow-hidden',
          content:
            'my-0! flex w-full max-w-full flex-col gap-0 overflow-hidden pl-5'
        }">
        <SidebarFolderButton
          ref="handle"
          :open="computed(() => sidebarFolderRefs[item.id])"
          :item
          :group="props.group"
          :index="props.index"
          :context-open
          @click="toggleFolder()" />
        <template #content>
          <div
            class="relative z-0 w-full max-w-full overflow-hidden *:py-0! before:pointer-events-none before:absolute before:left-px before:h-full before:w-px before:border-l before:border-l-p4/80">
            <li class="grid w-full auto-rows-fr gap-y-0 overflow-hidden p-1">
              <template v-if="children.length">
                <SidebarPocketButton
                  v-for="(child, i) in children"
                  :key="childKey(child)"
                  :ref="childRefs.set"
                  :index="i"
                  :item="child"
                  @dblclick.stop.prevent
                  @update:label="updatePocketName(child, $event)" />
              </template>
              <div
                v-else
                class="not-draggable grid w-full auto-rows-fr items-center gap-y-0.5 py-3 pl-6">
                <span class="text-xs italic">Empty</span>
              </div>
            </li>
          </div>
        </template>
      </UCollapsible>
    </FolderContextMenu>
  </li>
</template>
