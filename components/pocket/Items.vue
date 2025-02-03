<script setup lang="ts">
import { ResizablePanel } from 'components/base/resizable/rindex'

const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()
const pocket = ref(props.pocket)

/* const panelRef = ref<InstanceType<typeof SplitterPanel>>()
        <Button @click="panelRef?.isCollapsed ? panelRef?.expand() : panelRef?.collapse() ">
          hi
        </Button>
ref="panelRef" */
</script>

<template>
  <div class="size-full flex">
    <ResizablePanelGroup
      direction="horizontal"
      class="max-h-full h-full"
    >
      <ResizablePanel :default-size="42" :min-size="20">
        <MenubarSpacer />
        <ItemsHeader :pocket="pocket" />
        <ItemSets :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        with-handle
        class="bg-transparent bg-gradient-to-b from-transparent via-b3/60 via-20% to-transparent to-180%"
      />
      <ResizablePanel :min-size="10">
        <div class="h-full w-full relative">
          <PocketItemList :pocket="pocket" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    <ItemBar :pocket="pocket" />
  </div>
</template>

<style></style>
