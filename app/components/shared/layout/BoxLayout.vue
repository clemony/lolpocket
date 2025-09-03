<script lang="ts" setup>
import { SplitterPanel as ResizablePanel } from 'reka-ui'
import type { LinkProp, Mail } from './box/mails'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  isCollapsed: boolean
}>()
const emit = defineEmits(['toggle:collapse'])

const route = useRoute()
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full  max-h-[calc(100vh-45px)] items-stretch">
      <ResizablePanel

        id="resize-panel-1"
        :default-size="17"
        :collapsed-size="3"
        collapsible
        :min-size="10"
        :max-size="20"
        :class="cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out', className)"
        @expand="emit('toggle:collapse', true)"
        @collapse="emit('toggle:collapse', false)">
        <slot
          name="nav" />
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