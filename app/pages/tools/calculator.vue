<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from "reka-ui"

definePageMeta({
  name: "calculator",
  icon: "teenyicons:calculator-outline",
  iconClass: "scale-90 **:stroke-1.2",
  level: 2,
  order: 6,
  path: "/tools/calculator",
})

console.log("💠 - is().calculatorSets:", is().calculatorSet)
</script>

<template>
  <ResizablePanelGroup class="size-full" direction="horizontal">
    <ResizablePanel
      class="relative flex size-full flex-col pt-26"
      :default-size="50">
      <Collapsible
        class="grid basis-1 items-center p-14"
        group
        :offset="{ enter: [0, 16], leave: [0, 16] }">
        <div class="relative">
          <CalculatorSet :num="1" :set="is().calculatorSet" />
          <CollapsibleTrigger
            class="btn absolute top-0 right-0 btn-square btn-ghost">
            hi
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent class="CollapsibleContent pt-14">
          <CalculatorSet :num="2" :set="is().calculatorSet2" />
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
