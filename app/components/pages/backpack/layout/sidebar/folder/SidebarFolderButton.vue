<script lang="ts" setup>
import { useDroppable } from "@dnd-kit/vue"
import { editFolderIcon } from "~/domain/pocket/folder/editFolder"
import type { EditableButtonInstance } from "~~/layers/ui/app/types"
defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  folder: SortableFolder
  open?: ComputedRef<boolean>
  isTargetted?: ComputedRef<boolean>
  isDragging?: ComputedRef<boolean>
}>()

const contextOpen = shallowRef<boolean>(false)
const item = computed(() => props.folder)
const button = computed(() => toValue(props.folder.button))

const editing = shallowRef<boolean>(false)
const userStore = user()

function handleEdit(event: string) {
  userStore.updateFolderName(item.value.id, event)
  editing.value = false
}

function handleToggleEdit() {
  contextOpen.value = false
  nextTick(() => {
    editing.value = true
  })
}
</script>

<template>
  <div class="w-full">
    <EditableButton
      v-if="editing"
      :model-value="item.label"
      :avatar="button?.avatar"
      :randomizable="true"
      autofocus
      required
      @update:model-value="handleEdit($event)" />
    <FolderContextMenu
      v-else
      v-model:open="contextOpen"
      as-child
      :disabled="editing || !props.folder"
      :folder="props.folder"
      @toggle-edit="handleToggleEdit()"
      @update:icon-key="editFolderIcon(item, $event)">
      <Tooltip
        :disabled="!!props.folder.children?.value?.length || editing"
        as-child
        label="Empty">
        <UButton
          :data-dragging="isDragging?.value"
          :data-targetted="isTargetted?.value"
          :data-open="contextOpen"
          :data-active="$route.path === item.to"
          v-bind="button"
          :to="undefined">
          <template #trailing>
            <UBadge v-if="item?.count" :label="item?.count || 0" />
            <Icon
              name="i-up"
              class="trailing-icon group-open/mainfolder:-rotate-180" />
          </template>
        </UButton>
      </Tooltip>
    </FolderContextMenu>
  </div>
</template>
