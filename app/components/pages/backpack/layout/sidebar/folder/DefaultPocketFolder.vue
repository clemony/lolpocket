<script lang="ts" setup>
import { VueDraggable } from "vue-draggable-plus"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import {
  useAllFolderChildren,
  useFolders
} from "~/domain/pocket/folder/useFolder"
import { onAdd, onChange } from "~/domain/pocket/helpers/drag"
import { asPocketProps } from "~/domain/pocket/helpers/typeAssert"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const { collapsed } = defineProps<{
  collapsed?: boolean
}>()
const { folders, all } = useFolders()
const count = computed(
  () =>
    (folders.value
      .map((f) => f.children?.value.length)
      .reduce((a, b) => (a || 0) + (b || 0), 0) || 0) +
    (all.value.children?.value.length || 0)
)
const { children, childRefs, childKey } = useAllFolderChildren(all)
const { backpackFolderOpen: open } = useBackpack()

const set = computed(() => {
  const ico = safeObject(iconSets.folder)
  return {
    icon: open.value ? ico.open : ico.closed,
    leadingIcon: open.value ? ico.ui?.open : ico.ui?.closed
  }
})

const contextOpen = shallowRef<boolean>(false)
</script>

<template>
  <LazyFolderContextMenu
    v-model:open="contextOpen"
    :folder="defaultPocketFolders.all">
    <UCollapsible
      v-if="!collapsed"
      v-model:open="open"
      :ui="{
        content: 'z-auto my-0! flex w-full flex-col gap-0.5 pr-4 pl-4.5'
      }">
      <div class="[container-type:scroll-state] sticky top-0 z-1 w-full">
        <div class="w-full bg-p0 pt-2 stuck-top:pb-1">
          <SidebarFolderButton
            :item="defaultPocketFolders.all"
            :set="set"
            :count
            :context-open />
        </div>
      </div>
      <template #content>
        <VueDraggable
          :model-value="children"
          class="pocket-button relative z-0 flex w-full max-w-full flex-col gap-y-0.5 overflow-hidden p-1 before:pointer-events-none before:absolute before:left-0 before:h-full before:w-px before:border-l before:border-l-p4/80"
          easing="ease-in-out"
          filter=".not-draggable"
          :animation="150"
          :group="{ name: 'pocket' }"
          @add="onAdd($event, all?.location || all?.id)"
          @change="onChange($event)">
          <LazyBackpackSidebarFolder
            v-for="child in folders"
            :key="child?.id"
            :item="child" />

          <LazySidebarPocketButton
            v-for="(child, i) in children"
            :key="childKey(asPocketProps(child))"
            :ref="childRefs.set"
            :item="asPocketProps(child)"
            :i />

          <!--             <div
              v-if="!list.length"
              class="not-draggable grid w-full auto-rows-fr items-center gap-y-0.5 py-3 pl-6">
              <span class="text-xs italic">Empty</span>
            </div> -->
        </VueDraggable>
      </template>
    </UCollapsible>
  </LazyFolderContextMenu>
</template>
