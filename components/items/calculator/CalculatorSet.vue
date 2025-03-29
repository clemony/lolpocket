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

const ans = useAnalysisStore()

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
  <div class=" py-4 pl-4 pr-8 items-center grid grid-cols-[60px_1fr_90px] gap-4 relative w-full place-items-center">
    <div class="text-8 text-right flex items-center justify-end font-black font-serif size-full pb-4 dst  pr-3 ">
      {{ props.num + 1 }}
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
      :class="cn('grid items-center size-full justify-center place-self-center gap-4 group relative grid-cols-6', { '': props.split, '': !props.split }, props.class)"

      @end="onEnd"
      @start="onStart">
      <ItemCommand
        v-for="(item, i) in props.set" :key="i" :set="props.set"
        :i="i" :item="item" type="image" @update:set="e => emit('update:set', e)" />
    </div>
    <div class="grid grid-cols-2 place-items-center size-full pb-4 pr-2">
      <RadioGroup v-model:model-value="ans.calculateSet" :disabled="set == ans.calculateSet2">
        <CustomRadioItem :value="set" />
      </RadioGroup>

      <RadioGroup v-model:model-value="ans.calculateSet2" :disabled="set == ans.calculateSet">
        <CustomRadioItem :value="set" />
      </RadioGroup>
    </div>
  </div>
</template>