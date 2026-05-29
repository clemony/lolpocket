<script lang="ts" setup>
import { editFolderIcon } from "~/domain/backpack/utils/folder/editFolder"
defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  folder: SortableFolder
  open?: ComputedRef<boolean>
  isTargetted?: ComputedRef<boolean>
  isDragging?: ComputedRef<boolean>
}>()

const emit = defineEmits(["update:open"])
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

const { sidebarFolderRefs } = storeToRefs(pocketStore())
</script>

<template>
  <label role="button" class="w-full">
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
      <HintTooltip
        :disabled="!!props.folder.children?.value?.length || editing"
        as-child
        side="right"
        label="Empty">
        <UButton
          :data-collapsed="!sidebarFolderRefs[item.id]"
          :data-dragging="isDragging?.value"
          :data-targetted="isTargetted?.value"
          :data-open="contextOpen"
          :data-active="$route.path === item.to"
          v-bind="button"
          :to="`/backpack/${item.id}`">
          <template #trailing>
            <UBadge v-if="item?.count" :label="item?.count || 0" />
            <UButton
              :disabled="!item.children?.value?.length"
              size="sm"
              square
              variant="ghost"
              icon="i-up"
              :ui="{
                base: 'anchor -mr-1 size-8 hover:bg-p0! hover:shadow-xs',
                leadingIcon: 'trailing-icon mx-0!'
              }"
              @click.stop.prevent="
                sidebarFolderRefs[item.id] = !sidebarFolderRefs[item.id]
              " />
          </template>
        </UButton>
      </HintTooltip>
    </FolderContextMenu>
  </label>
</template>
