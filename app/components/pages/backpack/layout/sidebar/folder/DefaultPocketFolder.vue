<script lang="ts" setup>
import { VueDraggable } from "vue-draggable-plus"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import { useFolderChildren, useFolders } from "~/domain/pocket/folder/useFolder"
import { onAdd, onChange } from "~/domain/pocket/helpers/drag"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const { collapsed } = defineProps<{
  collapsed?: boolean
}>()
const { pockets, folders } = useFolders()

const open = shallowRef<boolean>(true)

const { children, childRefs, childKey } = useFolderChildren(pockets)

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
  <FolderContextMenu
    v-model:open="menuOpen"
    :folder="defaultPocketFolders.pockets">
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
          base: 'my-0! w-full grow hover:bg-p1',
          leadingIcon: cn('size-4.5', set.leadingIcon),
          trailingIcon: cn('trailing-rotate', { '-rotate-180': open })
        }"
        :label="pockets.label"
        trailing-icon="i-up" />
      <template #content>
        <VueDraggable
          :model-value="children"
          class="pocket-button relative z-0 flex w-full max-w-full flex-col gap-y-0.5 overflow-hidden p-1 before:pointer-events-none before:absolute before:left-0 before:h-full before:w-px before:border-l before:border-l-p4/80"
          easing="ease-in-out"
          filter=".not-draggable"
          :animation="150"
          :group="{ name: 'pocket' }"
          @add="onAdd($event, pockets?.id)"
          @change="onChange($event)">
          <BackpackSidebarFolder
            v-for="child in folders"
            :key="child?.id"
            :item="child" />

          <SidebarPocket
            v-for="(child, i) in children"
            :key="childKey(child)"
            :ref="childRefs.set"
            :item="child"
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
