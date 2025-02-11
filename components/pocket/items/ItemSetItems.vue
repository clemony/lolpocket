<script setup lang="ts">
import { set } from '@vueuse/core';
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
  set: ItemSet
  limit?: number
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
  <transition-slide
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
        
  'removeOnSpill': true,
        'fallbackTolerance': 0,
        'fallbackOnBody': true,
      },
    ]"
    :offset="[0, -16]"
    group
    filter=".no-drag"
    class="grid grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(52px,1fr))] justify-center gap-3 group"
    :class="{ 'gap-5!': props.limit }"
    @end="onEnd"
    @start="onStart"
    @remove="(evt) => onRemove(evt, itemSet)"
  >
    <Item
      v-for="(item, i) in itemSet"
      :key="item.id"
      :item="item"
      :pocket="pocket"
      class="shadow-sm size-full shrink-0"
      :class="{'rotate-out-center': removingItems[item?.id ?? `item-${i}`]}"
    />
    <Placeholder class="rounded-lg border-b3/50 inset-shadow-xs group-has-[.sortable-ghost]:hidden" />
  </transition-slide>
</template>

<style scoped></style>