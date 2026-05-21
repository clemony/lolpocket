<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import { asPocketProps } from "~/domain/pocket/helpers/typeAssert"
import type { FolderExpose } from "~/domain/pocket/types"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const props = defineProps<{
  collapsed?: boolean
  index: number
}>()
const { folders } = useFolders()

const count = computed(
  () =>
    (toValue(folders.value.subfolders)
      ?.map((f) => f.children?.value.length)
      .reduce((a, b) => (a || 0) + (b || 0), 0) || 0) +
    (toValue(folders.value.children)?.length || 0)
)

const children = computed(() => toValue(folders.value.children) ?? [])

const { backpackFolderOpen: open } = useBackpack()

const set = computed(() => {
  const ico = safeObject(iconSets.folder)
  return {
    icon: open.value ? ico.open : ico.closed,
    leadingIcon: open.value ? ico.ui?.open : ico.ui?.closed
  }
})

const contextOpen = shallowRef<boolean>(false)

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

function toggleFolder() {
  open.value = !open.value
}

const childRefs = useTemplateRefsList<HTMLElement & FolderExpose>()
/* useSortable({
  id: computed(() => "folders"),
  index: computed(() => props.index ?? 0),
  group: "default",
  type: "folder",
  accept: "pocket",
  element,
  handle,
  sensors: clickFriendlySensors,
  disabled: computed(() => contextOpen.value),
  data: computed(() => ({ kind: "folder" as const, id: "folders" }))
}) */
</script>

<template>
  <div ref="element" class="w-full overflow-x-hidden" @click="toggleFolder()">
    <LazyFolderContextMenu
      v-model:open="contextOpen"
      :folder="backpackFolders.folders">
      <UCollapsible
        v-if="!props.collapsed"
        v-model:open="open"
        :ui="{
          root: 'overflow-hidden',
          content:
            'relative z-auto my-0! ml-4.5 flex max-h-fit grow flex-col gap-0.5 gap-y-0.5 overflow-hidden py-1 pr-8 pl-1 before:pointer-events-none before:absolute before:left-0 before:h-full before:w-px before:border-l before:border-l-p4/80'
        }">
        <div
          class="[container-type:scroll-state] sticky top-0 z-1 w-full"
          @click="toggleFolder()">
          <div class="w-full bg-p0 pt-1 stuck-top:pb-1">
            <SidebarFolderButton
              ref="handle"
              :item="backpackFolders.folders"
              :set="set"
              group="folder:default"
              :index="props.index"
              :count
              :context-open />
          </div>
        </div>
        <template #content>
          <div v-if="toValue(folders.subfolders)?.length" class="w-full">
            <LazyBackpackSidebarFolder
              v-for="(child, i) in toValue(folders.subfolders)"
              :key="child?.id"
              :index="i"
              group="folders"
              :item="child" />
          </div>
          <div v-if="children.length" class="w-full">
            <LazySidebarPocketButton
              v-for="(child, i) in children"
              :key="child.key"
              :ref="childRefs.set"
              :item="asPocketProps(child)"
              :index="i" />
          </div>
          <!--             <div
              v-if="!list.length"
              class="not-draggable grid w-full auto-rows-fr items-center gap-y-0.5 py-3 pl-6">
              <span class="text-xs italic">Empty</span>
            </div> -->
        </template>
      </UCollapsible>
    </LazyFolderContextMenu>
  </div>
</template>
