<script lang="ts" setup>
import { ResizablePanel } from 'components/base/resizable/rindex'
</script>

<template>
  <div class="size-full pt-[8vh]">
    <ResizablePanelGroup
      direction="horizontal"
      class="max-h-full h-full"
    >
      <ResizablePanel :default-size="50" :min-size="20">
        <div class="h-[5.5vh] px-12 py-3 w-full border-b border-b-b2">
          <h1 class="!text-9">
            All Pockets
          </h1>
        </div>
        <SidebarPockets />
      </ResizablePanel>
      <ResizableHandle
        with-handle
        class="bg-transparent bg-gradient-to-b from-transparent via-b3/60 via-20% to-transparent to-180%"
      />
      <ResizablePanel :min-size="20">
        <div class="h-full w-full relative">
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped>

</style>