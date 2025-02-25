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
      class="size-full"
    >
      <ResizablePanel :default-size="48" :min-size="20" class="bg-b1   flex justify-center relative">
        <ResizablePanelGroup
          direction="vertical"
          class="size-full"
        >
          <ResizablePanel class="bg-b1   flex justify-center relative">
            <ItemSets :pocket="pocket" />
          </ResizablePanel>

          <ResizableHandle
            class="bg-b2"
          />

          <ResizablePanel collapsible :default-size="6" :min-size="6" :collapsed-size="6" class="relative">
            ok
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle
        class="bg-b2"
      />
      <ResizablePanel :min-size="10" class="bg-b1 relative  overflow-hidden">
        <PocketItemFilter :pocket="pocket" />

        <div class="h-full z-0 w-full relative flex justify-center overflow-y-auto  rounded-2xl ">
          <PocketItemList :pocket="pocket" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
