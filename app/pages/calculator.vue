<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator, ListboxRoot, SplitterPanel as ResizablePanel } from 'reka-ui'

import { motion } from 'motion-v'

definePageMeta({

  level: 1,
  order: 6,
  icon: 'calc',

})

const is = useItemStore()

const target = ref()

console.log('💠 - is.calculatorSets:', is.calculatorSet)
</script>

<template>
  <ResizablePanelGroup
    class="size-full"
    direction="horizontal">
    <ResizablePanel
      :default-size="50"
      class="size-full relative pt-26 flex flex-col">
      <Collapsible
        group
        :offset="{ enter: [0, 16], leave: [0, 16] }"
        class="basis-1 grid items-center p-14">
        <div class=" relative">
          <CalculatorSet
            :num="1"
            :set="is.calculatorSet" />
          <CollapsibleTrigger class="absolute right-0 top-0 btn btn-square btn-ghost">
            hi
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent class="CollapsibleContent pt-14">
          <CalculatorSet
            :num="2"
            :set="is.calculatorSet2" />
        </CollapsibleContent>
      </Collapsible>

      <Separator />
      <CalculatorResults />
    </ResizablePanel>

    <ResizableHandle />

    <ResizablePanel
      class="flex justify-center h-full relative pt-8  overflow-y-auto">
      <DraggableItemList />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped>

</style>
