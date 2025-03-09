<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  class?: HTMLAttributes['class']
  num?: number
  set?: CalculatorSet
  split?: boolean
}>()

// @remove="(evt) => onRemove(evt, set)

const emit = defineEmits(['update:set'])
const is = useItemStore()
const set = computed (() => {
  return props.set
})

/* watch(
() => set.value,
(newVal) => {
 console.log("💠 - newVal:", newVal)
 console.log("💠 - is:", is.calculatorSet1)

}
) */
function onStart(event: DraggableEvent) {
}
function onEnd(event: DraggableEvent) {
}
function onAdd(event: DraggableEvent) {
}
</script>

<template>
  <div class=" py-4 pr-12 pl-10 items-center flex gap-7 relative">
    <div class="text-6 pt-2 font-light absolute dst -left-2 font-mono opacity-80">
      {{ props.num }}.
    </div>
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
      fallback-class="item-set-item-fallback"
      filter=".no-drag"
      class=" "
      :class="cn('grid items-center gap-4 group relative grid-cols-6', { '': props.split, '': !props.split }, props.class)"

      @end="onEnd"
      @start="onStart">
      <ItemCommand
        v-for="(item, i) in props.set" :key="i" :set="props.set"
        :i="i" :item="item" @update:set="e => emit('update:set', e)" type="image"/>
    </div>
  </div>
  <div class="join join-vertical">
  </div>
</template>