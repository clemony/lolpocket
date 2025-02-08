<script lang="ts" setup>
import { ResizablePanel } from 'components/base/resizable/rindex'
</script>

<template>
  <div class="size-full pt-[6vh]">
    <ResizablePanelGroup
      direction="horizontal"
      class="max-h-full h-full  border-t border-t-b3 "
    >
      <ResizablePanel :default-size="28" :min-size="10">
        <div class="h-[7vh] px-12 w-full flex items-center border-b border-b-b2">
          <h1 class="!text-8 text-nowrap">
            All Pockets
          </h1>
        </div>
        <PocketsCollapse v-for="folder in defaultFolders()" :key="folder.key" :folder="folder" />
      </ResizablePanel>
      <ResizableHandle
        with-handle
        class=""
      />

      <ResizablePanel :default-size="44" :min-size="10">
      </ResizablePanel>

      <ResizableHandle
        with-handle
        class=""
      />

      <ResizablePanel :min-size="20" :default-size="40">
        <div class="h-[7vh] px-12 w-full flex items-center border-b border-b-b2">
          <h3 class="text-nowrap">
            Detail
          </h3>
        </div>

        <div class="size-full pt-12 justify-items-center shadow-inset-sm">
          <PocketIdCard />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped>

</style>