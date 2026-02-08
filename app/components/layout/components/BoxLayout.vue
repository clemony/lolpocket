<script lang="ts" setup>
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  isCollapsed: boolean
}>()
const emit = defineEmits(['toggleCollapse'])

const route = useRoute()
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      class="h-full max-h-[calc(100vh-45px)] items-stretch"
      direction="horizontal">
      <ResizablePanel
        id="resize-panel-1"
        :default-size="17"
        :collapsed-size="3"
        collapsible
        :min-size="10"
        :max-size="20"
        :class="
          cn(
            isCollapsed
              && 'min-w-[50px] transition-all duration-300 ease-in-out',
            className,
          )
        "
        @expand="emit('toggleCollapse', true)"
        @collapse="emit('toggleCollapse', false)">
        <slot name="nav" />
      </ResizablePanel>
      <ResizableHandle
        id="resize-handle-1"
        with-handle />
      <ResizablePanel>
        <slot />
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
