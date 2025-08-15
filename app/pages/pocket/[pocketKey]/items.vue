<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const props = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'pocket items',

  meta: {
    section: 'pocket',
    search: false,
  },
})

const pocket = ref(props.pocket)

const tabs = ref('items')

const tabValues = [

  {
    name: 'items',
    value: 'items',
    icon: 'bow',
  },

  {
    name: 'calculator',
    value: 'calculator',
    icon: 'calc',
  },
]
</script>

<template>
  <SidebarProvider

    style="--sidebar-width: 26rem; --sidebar-width-mobile: 26rem; --sidebar-icon-width:3.8rem;"
    class="w-full h-[90vh] relative overflow-hidden ">
    <ResizablePanelGroup
      as-child
      direction="horizontal"
      class="inset-0 ">
      <SidebarInset as-child>
        <ResizablePanel
          :default-size="50"
          :min-size="20"
          class="bg-b1   flex size-full relative overflow-y-auto">
          <ItemSets :pocket="pocket" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          :min-size="35"
          class=" relative  overflow-hidden flex flex-col z-0 justify-end">
          <section
            class="size-full  relative overscroll-auto justify-center overflow-y-auto ">
            <LazyDraggableItemList
              :pocket="pocket" />
          </section>
        </ResizablePanel>
      </SidebarInset>
    </ResizablePanelGroup>
    <PocketItemFilters />
  </SidebarProvider>
</template>
