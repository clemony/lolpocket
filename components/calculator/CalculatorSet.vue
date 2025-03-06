<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  class?: HTMLAttributes['class']
  index?: number
}>()

function onStart(event: DraggableEvent) {
}
function onEnd(event: DraggableEvent) {
}
function onAdd(event: DraggableEvent) {
}
interface CalculatorSet {
  1: Item
  2: Item
  3: Item
  4: Item
  5: Item
  6: Item
}
const set: CalculatorSet = {
  1: createItem(),
  2: createItem(),
  3: createItem(),
  4: createItem(),
  5: createItem(),
  6: createItem(),
}

// @remove="(evt) => onRemove(evt, set)
</script>

<template>

    <div
      v-draggable="[
        set,
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
      ghost-class="item-set-item-ghost"
      fallbackClass="item-set-item-fallback"
      filter=".no-drag"
      class="rounded-box bg-b1 border border-b3/40 shadow-md py-8 px-12 grid grid-cols-6 gap-4 group"

      @end="onEnd"
      @start="onStart">

    <Popover
        v-for="(item, i) in set"
        :key="i" >
        <LazyCalculatorItem :item="item" :i="i"  />

        </Popover>

    </div>

</template>