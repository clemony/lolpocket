<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'items',
})

const is = useItemStore()
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
      <ResizablePanel :min-size="10" class=" relative  overflow-hidden flex flex-col  justify-end ">
        <PocketItemFilter :pocket="pocket" />

        <div class="h-full z-0 w-full  grid  " :class="{ 'grid-cols-[1fr_340px] transition-all duration-500 ': is.itemPaneOpen, 'grid-cols-[1fr_0px] transition-all duration-500 ': !is.itemPaneOpen }">
          <div class="size-full  relative  transition-all duration-500 justify-center overflow-y-auto  ">
            <DraggableItemList :pocket="pocket" :class="{ }" />
          </div>
          <LazyItemInfoPane />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
