<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: Pocket
  set: ItemSet
  class?: HTMLAttributes['class']
}>()
const pocket = ref(props.pocket)
function onStart(event: DraggableEvent) {
}
function onEnd(event: DraggableEvent) {
}
function onAdd(event: DraggableEvent) {
}

const itemSet = ref(props.set.items)
</script>

<template>
  <div
    :key="set.name" v-draggable="[
      itemSet,
      {
        'group': {
          name: 'items',
          pull: true,
          put: 'items',
        },
        'bubbleScroll': false,
        'scroll': false,
        'delay': 0,
        'animation': 300,
        'force-fallback': true,
        'chosenClass': 'item-set-item-chosen',
        'ghostClass': 'item-set-item-ghost',
        'removeOnSpill': true,
        'fallbackTolerance': 0,
        'fallbackOnBody': true,
      },
    ]"
    :offset="[0, -16]"
    group
    fallbackClass="item-set-item-fallback"
    filter=".no-drag"
    class="flex   h-fit  flex-wrap justify-start gap-3 group"

    @end="onEnd"
    @start="onStart"
    @remove="(evt) => onRemove(evt, itemSet)">
    <Popover
      v-for="(item, i) in itemSet"
      :key="item">
      <PopoverTrigger as-child class=" shrink-0 !size-19 ">
        <Item
          :id="item"
          :pocket="pocket"
          class="shadow-sm shrink-0 !size-19  *:rounded-lg"
          :class="{ 'rotate-out-center': removingItems[item ?? `item-${i}`] }"
          @click.prevent />
      </PopoverTrigger>
      <LazyCustomPopoverContent class="p-2 w-44">
        <CustomPopoverArrow />
        <LazyItemData
          :id="item" />
        <!-- <LazyItemInSetMenu v-else :pocket="pocket" :set="props.set" :item="item" @update:popover="showData = true" /> -->
      </LazyCustomPopoverContent>
    </Popover>
    <Placeholder class="rounded-lg border-0 !size-18 shadow-sm shadow-black/7  bg-b3/70  group-has-[.sortable-ghost]:hidden" />
  </div>
</template>

<style scoped>
</style>