<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from "reka-ui"

definePageMeta({
  name: "calculator",
  prefix: "Tools",
  icon: "i-ui-calc",
  description: "Min-max your builds with stat analysis.",
  class: "scale-99 **:stroke-[1.6]"
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
