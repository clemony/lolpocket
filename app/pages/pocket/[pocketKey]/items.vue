<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'items',
  section: 'pocket',
})

const is = useItemStore()
const pocket = ref(props.pocket)
</script>

<template>
  <div class="size-full overflow-hidden  ">
    <ResizablePanelGroup
      direction="horizontal"
      class="size-full">
      <ResizablePanel :default-size="42" :min-size="20" class="bg-b1   flex justify-center relative">
        <ItemSets :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        class="bg-b3/40" with-handle />
      <ResizablePanel :min-size="35" class=" relative  overflow-hidden flex flex-col  justify-end">
        <div class="h-full z-0 w-full ">
          <div class="size-full  relative  transition-all duration-500 justify-center overflow-y-auto  ">
            <DraggableItemList :pocket="pocket" :class="{ }" />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
