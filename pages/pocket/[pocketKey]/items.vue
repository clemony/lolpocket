<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'components/base/resizable'

const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'items',
})

const ts = useTempStore()
const pocket = ref(props.pocket)
</script>

<template>
  <div class="size-full overflow-hidden  ">
    <ResizablePanelGroup
      direction="horizontal"
      class="size-full">
      <ResizablePanel :default-size="48" :min-size="20" class="bg-b1   flex justify-center relative">
        <ItemSets :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        class="bg-b2" />
      <ResizablePanel :min-size="10" class="bg-b1 relative  overflow-hidden">
        <ResizablePanelGroup
          direction="vertical"
          class="size-full">
          <ResizablePanel class="bg-b1  pb-2 flex justify-center relative">
            <PocketItemFilter :pocket="pocket" />

            <div class="h-full z-0 w-full relative flex justify-center overflow-y-auto  rounded-2xl ">
              <PocketItemList :pocket="pocket" />
            </div>
          </ResizablePanel>
          <ResizableHandle
            class="" />

          <ResizablePanel collapsible :default-size="6" :max-size="50" :min-size="6" :collapsed-size="6" class="relative">
            <ItemInfoPane />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
