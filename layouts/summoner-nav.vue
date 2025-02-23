<script lang="ts" setup>
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'components/base/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="bg-gradient-to-b from-b1 to-b2/40 h-screen w-screen overflow-hidden">
    <ResizablePanel :default-size="22" :min-size="20" :max-sie="50" class=" size-full  overflow-hidden">
      <div class="w-full  overflow-hidden relative self-start !mt-[5vh]  max-[97vh]  h-screen mr-3 ">
        <div class=" absolute inset-0 px-3 max-h-inherit h-inherit top-0 left-0 overflow-y-hidden ">
          <slot />
        </div>
      </div>
    </ResizablePanel>
    <ResizableHandle
      class="bg-b2 w-0.5 !ml-0 bg-transparent"
    />
    <ResizablePanel :min-size="50" class="overflow-hidden px-12 relative mt-[5vh] h-screen max-h-screen min-h-screeen ">
      <NuxtPage
        :transition="{
          name: 'push-up',
          mode: 'out-in',
        }"
      />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped>

</style>