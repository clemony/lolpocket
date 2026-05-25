<script lang="ts" setup>
import { useDragState } from "~/composables/ui/useDragManager"

const props = defineProps<{
  data: FolderDragData | PocketDragData | undefined
}>()

const { dragState } = useDragState()

const droppable = computed(
  () =>
    dragState.value.dragging &&
    (dragState.value.targetType === "folder" ||
      dragState.value.targetType === "subfolder")
)

const folderData = computed(() =>
  props.data?.kind === "folder" || props.data?.kind === "subfolder"
    ? props.data
    : undefined
)
const pocketData = computed(() =>
  props.data?.kind === "pocket" ? props.data : undefined
)

const shared = computed(() => ({
  button: {
    avatar: pocketData.value?.avatar || undefined,
    label: props.data?.item.label || " ",
    icon: folderData.value?.item.icons?.open || undefined,
    trailingIcon: folderData.value?.item.count ? "i-up" : undefined
  },
  badge: folderData.value?.item.count
    ? { label: folderData.value.item.count }
    : undefined
}))
</script>

<template>
  <SidebarTheme>
    <div
      :title="droppable ? `Move to ${dragState.targetLabel}?` : undefined"
      :data-dragging="true"
      :data-droppable="droppable"
      class="group/btn relative flex max-w-full grow overflow-visible rounded-lg">
      <UButton v-bind="shared.button">
        <span class="label">{{ shared.button.label }}</span>
        <Grow />
        <UBadge v-if="shared.badge" v-bind="shared.badge" />
      </UButton>
    </div>
  </SidebarTheme>
</template>
