<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'items',
})

const ts = useTempStore()
const pocket = ref(props.pocket)

const isOpen = ref(false)
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
        <PocketItemFilter :pocket="pocket">
          <ItemInfoPane @update:open="(e) => isOpen = e" />
        </PocketItemFilter>

        <div class="h-full z-0 w-full  pb-24 flex relative  transition-all duration-500 justify-center overflow-y-auto   ">
          <PocketItemList :pocket="pocket" :class="{ 'pt-144': isOpen }" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
