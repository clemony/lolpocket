<script setup lang="ts">
import { ResizablePanel } from 'components/base/resizable/rindex';

const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)

// const { arrivedState } = useScroll(el)
</script>

<template>
  <div class="size-full flex">
    <ResizablePanelGroup
      direction="horizontal"
      class="max-h-full h-full"
    >
      <ResizablePanel :default-size="42">
        <MenubarSpacer />
        <ItemsHeader :pocket="pocket" />
        <ItemSets :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        with-handle
        class="bg-transparent bg-gradient-to-b from-transparent via-b3/60 via-20% to-transparent to-180%"
      />
      <ResizablePanel>
        <div class="h-full w-full relative">
          <PocketItemList :pocket="pocket" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped></style>
