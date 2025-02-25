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
defaultSize: 20
  }
)
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="bg-gradient-to-b from-b1 to-b2/40 h-screen w-screen overflow-hidden mt-[7vh] ">
    <ResizablePanel :default-size="props.defaultSize" :min-size="20" :max-sie="50" class=" size-full  overflow-hidden">
      <div class="w-full  overflow-hidden relative  max-h-[93vh] h-[93vh] " >
        <div class=" absolute inset-0 max-h-inherit h-inherit top-0 left-0 overflow-y-hidden ">
          <slot />
        </div>
      </div>
    </ResizablePanel>
    <ResizableHandle
      class="bg-b2 w-0.5 !ml-0 "
    />
    <ResizablePanel :min-size="50" class="overflow-hidden  max-h-[93vh] h-[93vh] px-12 relative">
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