<script setup lang="ts">
import { motion } from 'motion-v'
import {
  ListboxContent,
  ListboxFilter,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  SplitterPanel as ResizablePanel,
} from 'reka-ui'

definePageMeta({
  name: 'calculator',
  icon: 'teenyicons:calculator-outline',
  iconClass: 'scale-90 **:stroke-1.2',
  level: 2,
  order: 6,
  path: '/tools/calculator',
})

console.log('💠 - is().calculatorSets:', is().calculatorSet)
</script>

<template>
  <ResizablePanelGroup
    class="size-full"
    direction="horizontal">
    <ResizablePanel
      :default-size="50"
      class="relative flex size-full flex-col pt-26">
      <Collapsible
        group
        :offset="{ enter: [0, 16], leave: [0, 16] }"
        class="grid basis-1 items-center p-14">
        <div class="relative">
          <CalculatorSet
            :num="1"
            :set="is().calculatorSet" />
          <CollapsibleTrigger
            class="btn btn-square btn-ghost absolute top-0 right-0">
            hi
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent class="CollapsibleContent pt-14">
          <CalculatorSet
            :num="2"
            :set="is().calculatorSet2" />
        </CollapsibleContent>
      </Collapsible>

      <Separator />
      <CalculatorResults />
    </ResizablePanel>

    <ResizableHandle />

    <ResizablePanel
      class="relative flex h-full justify-center overflow-y-auto pt-8">
      <DraggableItemList />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped></style>
