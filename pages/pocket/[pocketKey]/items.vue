<script setup lang="ts">
import { ResizablePanel } from 'components/base/resizable/rindex'
import { UseDraggable } from '@vueuse/components'

const props = defineProps<{
  pocket: pocket
}>()

definePageMeta({
  name: 'items',
})

const ts = useTempStore()
const pocket = ref(props.pocket)

/* const panelRef = ref<InstanceType<typeof SplitterPanel>>()
        <Button @click="panelRef?.isCollapsed ? panelRef?.expand() : panelRef?.collapse() ">
          hi
        </Button>
ref="panelRef" */
</script>

<template>
  <div class="size-full overflow-hidden  px-12 bg-b2/50">
    <PageHeader title="Item Sets" :crumb-one="pocket.location.folder" :crumb-two="pocket.name" icon-one="folders" icon-two="folder" :pocket="pocket" bg-class="!px-0 mt-1 mb-4">
      <ItemsHeader :pocket="pocket" class="ml-14 -mt-0.5" />
    </PageHeader>

    <UseDraggable v-slot="{ x, y }" :initial-value="{ x: 700, y: 100 }" class="absolute z-70 pointer-events-auto cursor-move select-none">
      Drag me! I am at {{ x }}, {{ y }}
    </UseDraggable>
    <ResizablePanelGroup
      direction="horizontal"
      class="h-[83vh] max-h-[83vh]"
    >
      <ResizablePanel :default-size="48" :min-size="20" class="bg-b1 rounded-2xl border-b3 inset-shadow-xxs flex justify-center">
        <ItemSets :pocket="pocket" />
      </ResizablePanel>
      <ResizableHandle
        class="bg-transparent w-6"
      />
      <ResizablePanel :min-size="10">
        <ResizablePanelGroup
          direction="vertical"
          class=""
        >
          <ResizablePanel :default-size="20" :min-size="10" class="bg-b1 rounded-2xl border-b3  inset-shadow-xxs">
            <PocketItemFilter :pocket="pocket" />
            <RadioFilterList
              :types="itemTypes"
              class="pl-2"
              @update:model="(e) => (ts.filterItemTypes = e)"
            />
          </ResizablePanel>
          <ResizableHandle
            class="bg-transparent !h-6"
          />
          <ResizablePanel class="bg-b1 rounded-2xl !border-b3 py-6 px-4  !inset-shadow-xxs">
            <div class="h-full w-full relative flex justify-center  rounded-2xl overflow-hidden">
              <PocketItemList :pocket="pocket" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    <ItemBar :pocket="pocket" />
  </div>
</template>

<style></style>
