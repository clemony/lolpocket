<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const as = useAccountStore()
</script>

<template>
  <div class="w-full flex ">
    <Motion as-child>
  <Collapsible v-model:open="as.itemSetTipIsOpen" class="py-8 w-184" arrow>
    <CollapsibleTrigger class="group/c flex items-center pl-2.25 w-full justify-start text-left max-w-184 gap-6 cursor-pointer">
      <h2 class="dst font-semibold">
          Sets
        </h2>
        <icon name="up-sm" class=" dst group-data-[state=open]/c:rotate-180" />
    </CollapsibleTrigger>
        <Motion as-child>
    <CollapsibleContent class="CollapsibleContent justify-start flex flex-col">
        <p class="items-center tracking-tight inline-block p-3">
          Drag items from the list at the right. Items are draggable & re-orderable within sets and between them. Select

          <icon
            name="gg:check-o"
            class="size-5 drop-shadow-text mb-1.5 shrink-0 mx-1 inline-block text-bc" />

          a set and

          <span class="text-5 ml-1 drop-shadow-text">{{ getDeviceKey() }}</span>
          <span class="text-4 px-1"> + </span>
          <icon
            name="ph:mouse-left-click-fill"
            class="size-5 drop-shadow-text scale-y-95 scale-x-105 shrink-0 mr-1 mb-1.25 inline-block text-bc" />

          an item from the main list to quick add. Sets, themselves, can be dragged into your preferred order.
        </p>
 
   
    </CollapsibleContent>
  </Motion>
  </Collapsible>
  </Motion>
      </div>
</template>

<style scoped></style>
