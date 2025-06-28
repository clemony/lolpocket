<script setup lang="ts">
import { ListboxContent, ListboxFilter, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxItemIndicator, ListboxRoot, SplitterPanel as ResizablePanel } from 'reka-ui'

import { motion } from 'motion-v'

definePageMeta({
  section: 'calculator',
  icon: 'calc',
})

const is = useItemStore()

const target = ref()

console.log('💠 - is.calculatorSets:', is.calculatorSet)
</script>

<template>
  <ResizablePanelGroup class="size-full" direction="horizontal">
    <ResizablePanel :default-size="50" class="size-full relative pt-26 flex flex-col">
              <transition-slide group :offset="{ enter: [0, 16], leave: [0, 16] }" class="basis-1 grid items-center p-14">


                    <CalculatorSet :num="1" :set="is.calculatorSet" />




<!--                   <Field class="!flex hidden flex-row gap-3 items-center items-center pl-6 gap-4 w-fit bg-b2/30  drop-shadow-xs ">

                    <div class="basis-2 w-full">
<CalculatorSet :num="2" :set="is.calculatorSet2" />
</div>

</Field> -->
              </transition-slide>

              <Separator  />
      <CalculatorResults />
    </ResizablePanel>

    <ResizableHandle />

    <ResizablePanel
      class="flex justify-center h-full relative pt-8  overflow-y-auto">

<DraggableItemList  />


    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style scoped>

</style>
