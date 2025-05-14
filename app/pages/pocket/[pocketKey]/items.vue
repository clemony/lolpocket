<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const props = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'items',
  section: 'pocket',
})

const is = useItemStore()
const pocket = ref(props.pocket)

const tabs = ref('items')

const tabValues = [
  {
    name: '',
    value: 'filters',
    icon: 'menu',
  },

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
  <div class="size-full overflow-hidden  ">
    <ResizablePanelGroup
      direction="horizontal"
      class="size-full">
      <ResizablePanel :default-size="50" :min-size="20" class="bg-b1   flex  relative">
        <ItemSets :pocket="pocket" />
      </ResizablePanel>

      <TabResizeBar class="">
            <RadioGroup  v-model:model-value="tabs"   class="tabs absolute top-26 flex  flex-row-reverse flex-nowrap tabs-lift tabs-xl w-full grow pb-13.25 ">

        <TabResizeHandle v-for="tab in tabValues" :key="tab.name" :active="tabs == tab.value">
            <RadioGroupItem  :value="tab.value" class="peer hidden absolute pointer-events-none" />
          <icon :name="tab.icon" class="shrink-0 size-3.75 dst" />
          {{ tab.name }}
        </TabResizeHandle>

    </RadioGroup>
      </TabResizeBar>

      <ResizablePanel :min-size="35" class="shadow-warm-2 relative  overflow-hidden flex flex-col z-0 justify-end">
        <Field
          class="size-full  relative  transition-all duration-500 justify-center overflow-y-auto  " :style="{
            backgroundColor: 'color-mix(in oklch, var(--color-b2) 40%, white 60%)',
          }">
          <LazyDraggableItemList :pocket="pocket" :class="{ }" />
        </Field>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style></style>
