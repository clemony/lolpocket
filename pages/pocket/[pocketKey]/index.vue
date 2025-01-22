<script setup lang="ts">
  import { ResizablePanel } from 'components/base/resizable/rindex'

  const ps = usePocketStore()
  const props = defineProps<{
    pocket: pocket
  }>()

  const route = useRoute()

  const pocket = ref(props.pocket)
</script>

<template>
  <ResizablePanelGroup
    direction="horizontal"
    class="mt-18">
    <ResizablePanel>
      <ItemsHeader />
      <ItemSets :pocket="pocket" />
    </ResizablePanel>
    <ResizableHandle
      with-handle
      class="bg-transparent bg-gradient-to-b from-transparent via-b3/60 via-20% to-transparent to-180%" />
    <ResizablePanel class="">
      <PocketHeaderMenu :pocket="pocket" />
      <PocketItemList :pocket="pocket" />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped></style>
