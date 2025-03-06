<script lang="ts" setup>
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'components/base/resizable'

const props = withDefaults(
  defineProps<{
    defaultSize?: number
  }>(),
  {
    defaultSize: 20,
  },
)
</script>

<template>
  <div direction="horizontal" class="bg-gradient-to-b from-b1 to-b2/40 h-screen w-screen overflow-hidden mt-[8vh] flex">
    <div class=" h-full w-[400px]  overflow-hidden">
      <div class="w-full  overflow-hidden relative  max-h-[93vh] h-[93vh] ">
        <div class=" absolute inset-0 max-h-inherit h-inherit top-0 left-0 overflow-y-hidden ">
          <slot />
        </div>
      </div>
    </div>

    <div class="overflow-hidden  max-h-[93vh] h-[93vh] pl-12 relative w-full">
      <NuxtPage
        :transition="{
        }" />
    </div>
  </div>
</template>

<style scoped>

</style>