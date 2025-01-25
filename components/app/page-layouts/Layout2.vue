<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'radix-vue'

const props = defineProps<{
  panel1Size?: number
  panel1Min?: number
  panel2Size?: number
  panel2Min?: number
  scroll?: boolean
}>()
</script>

<template>
  <ResizablePanelGroup
    direction="horizontal"
    class="h-full w-full max-w-full overflow-hidden px-5 pb-5"
  >
    <ResizablePanel
      :default-size="panel1Size"
      :min-size="panel1Min"
      class="max-h-inherit h-inherit relative pl-3"
    >
      <LayoutSpacer v-if="!props.scroll" />
      <slot name="panel1" />
    </ResizablePanel>
    <ResizeHandle
      with-handle
      class="mt-36"
    />

    <ResizablePanel
      :default-size="panel2Size"
      :min-size="panel2Min"
      class="max-h-inherit h-inherit"
    >
      <LayoutSpacer />
      <slot name="panel2" />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped></style>
