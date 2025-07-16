<script lang="ts" setup>
import type { DraggableEvent } from 'vue-draggable-plus'
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  class?: HTMLAttributes['class']
  num?: number
  split?: boolean
  set?: CalculatorSet
}>()

const emit = defineEmits(['update:set'])

const is = useItemStore()
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
    ghost-class="item-set-item-ghost"
    fallback-class="item-set-item-fallback"
    filter=".no-drag"
    :class="cn('grid items-center size-full justify-center place-self-center gap-4 group relative field-box p-4 w-150 grid-cols-6', { '': props.split, '': !props.split }, props.class)">
    <ItemCommand
      v-for="(itemId, i) in set" :key="itemId" :set-number="props.num"
      :set-index="i" :item-id="itemId" type="image" @update:set="e => emit('update:set', e)" />
  </div>
</template>