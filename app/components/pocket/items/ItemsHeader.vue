<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const as = useAccountStore()
</script>

<template>
  <div class="w-full flex ">
    <Collapsible
      class="py-8 w-full"
      :default-open="true"
      arrow>
      <CollapsibleTrigger class="group/c flex items-center px-2.25 w-full  text-left max-w-184 gap-6 cursor-pointer">
        <h2 class="">
          Item Sets
        </h2>

        <icon
          name="up"
          class=" dst group-data-[state=open]/c:rotate-180" />
      </CollapsibleTrigger>

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
    </Collapsible>
  </div>
</template>

<style scoped></style>
