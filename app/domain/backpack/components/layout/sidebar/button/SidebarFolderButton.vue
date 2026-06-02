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
  <div>
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
        :disabled="props.folder.children?.value?.length !== 0 || editing"
        as-child
        side="right"
        label="Empty">
        <UFieldGroup
          :data-dragging="isDragging?.value"
          :data-targetted="isTargetted?.value"
          :data-open="contextOpen"
          :data-active="$route.path === item.to">
          <UButton v-bind="button" :to="`/backpack/${item.id}`">
            <template #trailing>
              <UBadge v-if="item?.count" :label="item?.count || 0" />
            </template>
          </UButton>
          <UButton
            :data-collapsed="!sidebarFolderRefs[item.id]"
            :disabled="!item.children?.value?.length"
            variant="ghost"
            color="neutral"
            icon="i-up"
            :ui="{
              base: 'anchor max-w-9 shadow-none drop-shadow-none hover:bg-p0! hover:inset-shadow-xs disabled:bg-transparent! disabled:inset-ring-0!',
              leadingIcon: 'trailing-icon mx-0!',
              trailingIcon:
                'group-disabled/btn:opacity-100 hover:text-nc hover:opacity-100'
            }"
            @click.stop.prevent="
              sidebarFolderRefs[item.id] = !sidebarFolderRefs[item.id]
            " />
        </UFieldGroup>
      </HintTooltip>
    </FolderContextMenu>
  </div>
</template>
