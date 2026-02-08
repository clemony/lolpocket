<script lang="ts" setup>
import { SplitterPanel as ResizablePanel } from 'reka-ui'
</script>

<template>
  <ResizablePanelGroup
    id="resize-panel-group-2"
    class="h-full max-h-[calc(100vh-45px)] items-stretch"
    direction="horizontal">
    <ResizablePanel
      id="resize-panel-2"
      :default-size="48"
      :min-size="30">
      <slot name="center" />
    </ResizablePanel>
    <ResizableHandle
      id="resize-handle-2"
      with-handle />
    <ResizablePanel id="resize-panel-3">
      <slot name="right" />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
