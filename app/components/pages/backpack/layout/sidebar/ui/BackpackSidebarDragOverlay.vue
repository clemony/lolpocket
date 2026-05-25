<script lang="ts" setup>
import { Feedback } from "@dnd-kit/dom"
import { useDragState } from "~/composables/ui/useDragManager"

const props = defineProps<{
  active?: boolean
}>()

const overlay = useTemplateRef<HTMLElement>("overlay")
const { manager, dragState } = useDragState()

const feedback = computed(() =>
  manager.plugins.find(
    (plugin): plugin is Feedback => plugin instanceof Feedback
  )
)

const data = computed<FolderDragData | PocketDragData | undefined>(() => {
  if (!props.active || !dragState.value.dragging) return undefined
  return dragState.value.sourceData as FolderDragData | PocketDragData | undefined
})

function syncOverlay() {
  const plugin = feedback.value
  if (!plugin) return

  plugin.overlay = data.value && overlay.value ? overlay.value : undefined
}

watch(data, syncOverlay, { flush: "post" })
watch(overlay, syncOverlay, { flush: "post" })
onMounted(syncOverlay)
onBeforeUnmount(() => {
  const plugin = feedback.value
  if (plugin?.overlay === overlay.value) plugin.overlay = undefined
})
</script>

<template>
  <Teleport to="body">
    <div
      ref="overlay"
      data-dnd-overlay
      class="pointer-events-none fixed top-0 left-0 z-[10000] w-fit max-w-72">
      <BackpackSidebarGhost v-if="data" :data="data" />
    </div>
  </Teleport>
</template>
