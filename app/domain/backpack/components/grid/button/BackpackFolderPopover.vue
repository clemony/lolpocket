<script lang="ts" setup>
import { LazyEditBackpackItemModal } from "#components"
import type { EditInputExpose } from "~~/layers/ui/app/types"
const { item: itemFolder } = defineProps<{
  item: SortableFolder
}>()

const item = computed(() => safeObject(itemFolder))
const overlay = useOverlay()

console.log("🥸 - item:", item)
const modal = overlay.create(LazyEditBackpackItemModal)

async function openModal() {
  modal.open()
}
const children = computed<SortablePocket[]>(() =>
  safeObject(toValue(itemFolder.children))
)

const input = useTemplateRef<EditInputExpose>("input")
const editing = computed<boolean>(() => input.value?.editing.value || false)
const toggleEdit = () => input.value?.toggleEdit()
const focusInput = () => input.value?.focusInput()

const open = shallowRef<boolean>(false)
const menuOpen = shallowRef<boolean>(false)
const togglePopover = useToggle(open)
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
    <!--   <FolderContextMenu
      v-model:open="menuOpen"
      :disabled="editing || !item"
      :folder="item"
      @update:icon-key="editFolderIcon(item, $event)">
    <UTooltip :text="item?.label" :content="{ side: 'right' }">-->
    <UButton
      variant="ghost"
      :active="$route.params.path === item.to"
      size="md"
      square
      :icon="item.icons?.[open ? 'open' : 'closed']"
      :ui="{
        base: 'anchor',
        leadingIcon: cn('size-4.5', item.icons?.class)
      }" />
    <!--
    </UTooltip>     </FolderContextMenu> -->
    <template #content>
      <div
        class="flex w-full items-center justify-between gap-3 border-b border-p3 pt-0.5 pr-1 pl-4">
        <h5 class="max-w-full truncate text-xs font-medium">
          {{ item.label }}
        </h5>

        <div class="flex items-center gap-1.5 self-start">
          <FolderOptionsMenu
            size="xs"
            color="neutral"
            variant="ghost"
            icon="i-more"
            square
            :ui="{
              base: 'w-12 rounded-lg px-4!',
              leadingIcon: ''
            }" />
        </div>
      </div>
      <div v-if="children?.length" class="w-full py-3 pr-2 pl-1">
        <SidebarPocketButton
          v-for="child in children"
          :key="child.key"
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
