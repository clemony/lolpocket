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

const { children, childRefs, childKey } = useAllFolderChildren(all)
const { backpackFolderOpen: open } = useBackpack()

const set = computed(() => {
  const ico = safeObject(iconSets.folder)
  return {
    icon: open.value ? ico.open : ico.closed,
    leadingIcon: open.value ? ico.ui?.open : ico.ui?.closed
  }
})

const menuOpen = shallowRef<boolean>(false)

const accordion = useTemplateRef<HTMLElement>("accordion")

/* useSortable(accordion, items, {
  animation: 150
}) */
</script>

<template>
  <FolderContextMenu v-model:open="menuOpen" :folder="defaultPocketFolders.all">
    <UCollapsible
      v-if="!collapsed"
      v-model:open="open"
      :ui="{
        content: 'my-0! flex w-full flex-col gap-0.5 pr-4 pl-4.5'
      }">
      <UButton
        :icon="set.icon"
        variant="solid"
        color="transparent"
        :ui="{
          base: 'my-0! w-full grow gap-2.5 hover:bg-p1',
          leadingIcon: cn('size-4.5', set.leadingIcon),
          trailingIcon: cn('trailing-rotate', { '-rotate-180': open })
        }"
        trailing-icon="i-up">
        <span class="grow text-start text-md font-semibold">{{
          all?.label
        }}</span>
        <SidebarBadge
          v-if="all.children?.value.length"
          :is-true="open"
          :label="all.children?.value.length || 0" />
      </UButton>
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
          <BackpackSidebarFolder
            v-for="child in folders"
            :key="child?.id"
            :item="child" />

          <SidebarPocket
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
  </FolderContextMenu>
</template>
