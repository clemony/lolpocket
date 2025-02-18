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
  <div class="size-full overflow-hidden  px-12">
        <PocketHeader title="Item Sets" :pocket="pocket" class="">

    <ItemsHeader :pocket="pocket" class="ml-8 -mt-0.5" />
        </PocketHeader>
    <ResizablePanelGroup
      direction="horizontal"
      class="h-[86vh] max-h-[86vh]"
    >
      <ResizablePanel :default-size="48" :min-size="20" >
   
        <ItemSets :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        with-handle
        class="bg-transparent bg-gradient-to-b from-transparent via-b3/60 via-20% to-transparent to-180%"
      />
      <ResizablePanel :min-size="10">
        <div class="h-full w-full relative border-2 rounded-xl border-b2 flex justify-center  ">
          <PocketItemList :pocket="pocket" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    <ItemBar :pocket="pocket" />
  </div>
</template>

<style></style>
