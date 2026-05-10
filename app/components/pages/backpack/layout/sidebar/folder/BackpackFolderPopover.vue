<script lang="ts" setup>
import { LazyEditBackpackItemModal } from "#components"
import { editFolderIcon } from "~/domain/pocket/folder/editFolder"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { useIconSet } from "~/domain/pocket/folder/useIconSet"
import type { FolderButton } from "~/domain/pocket/types"
import type { EditInputExpose } from "~~/layers/ui/app/types/types"
const { item: itemFolder } = defineProps<{
  item: FolderButton
}>()

const item = computed(() => safeObject(itemFolder))
const { children, childRefs, childKey } = useFolderChildren(item)
const overlay = useOverlay()

const modal = overlay.create(LazyEditBackpackItemModal)

async function openModal() {
  modal.open()
}

const input = useTemplateRef<EditInputExpose>("input")
const editing = computed<boolean>(() => input.value?.editing.value || false)
const toggleEdit = () => input.value?.toggleEdit()
const focusInput = () => input.value?.focusInput()

const open = shallowRef<boolean>(false)
const menuOpen = shallowRef<boolean>(false)
const togglePopover = useToggle(open)

const set = useIconSet(item.value?.iconKey, open)
</script>

<template>
  <UPopover
    v-model:open="open"
    :open-delay="40"
    :content="{
      side: 'right',
      align: 'start',
      onCloseAutoFocus: (event) => event.preventDefault()
    }"
    :ui="{ content: 'max-w-90 min-w-64 pl-0!' }">
    <FolderContextMenu
      v-model:open="menuOpen"
      :disabled="editing || !item"
      :folder="item"
      @update:icon-key="editFolderIcon(item, $event)">
      <UTooltip :text="item?.label" :content="{ side: 'right' }">
        <UButton
          variant="ghost"
          square
          :icon="set.icon"
          :ui="{
            leadingIcon: 'size-5'
          }"
          @click="togglePopover()" />
      </UTooltip>
    </FolderContextMenu>
    <template #content>
      <div
        class="flex w-full items-center justify-between gap-3 border-b border-p3 px-3 pt-2 pb-1">
        <h5 class="max-w-full truncate text-xs font-medium">
          {{ item.label }}
        </h5>

        <div class="flex items-center gap-1.5 self-start">
          <NewPocketOptionsMenu
            size="_xs"
            color="primary"
            variant="outline"
            square
            :ui="{
              base: 'size-6 rounded-full inset-ring-p4/60',
              leadingIcon: 'scale-120 **:stroke-[4]'
            }" />
          <NewPocketButton size="_xs" :ui="{ base: 'rounded-full' }" square />
        </div>
      </div>
      <div v-if="children.length" class="w-full py-3 pr-2 pl-1">
        <SidebarPocket
          v-for="child in children"
          :key="childKey(child)"
          :item="child" />
      </div>
      <div
        v-else
        class="grid w-full auto-rows-fr items-center gap-y-0.5 py-3 pl-6">
        <span class="text-xs italic">Empty</span>
      </div>
    </template>
  </UPopover>
</template>
