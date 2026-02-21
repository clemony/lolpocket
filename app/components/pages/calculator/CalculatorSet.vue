<script lang="ts" setup>
import { vDraggable } from "vue-draggable-plus"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  num?: number
  split?: boolean
  set?: CalculatorSet
}>()

const emit = defineEmits(["update:set"])
</script>

<template>
  <div
    v-draggable="[
      set,
      {
        group: {
          name: 'items',
          pull: true,
          put: 'items',
        },
        bubbleScroll: false,
        scroll: false,
        delay: 0,
        animation: 300,
        'force-fallback': true,

        removeOnSpill: true,
        fallbackTolerance: 0,
        fallbackOnBody: true,
      },
    ]"
    ghost-class="item-set-item-ghost"
    fallback-class="item-set-item-fallback"
    filter=".no-drag"
    :class="
      cn(
        'field-box group relative grid size-full w-150 grid-cols-6 items-center justify-center gap-4 place-self-center p-4',
        props.class
      )
    ">
    <ItemCommand
      v-for="(itemId, i) in set"
      :key="itemId"
      :set-number="props.num"
      :set-index="Number(i)"
      :item-id="itemId"
      type="image"
      @update:set="(e) => emit('update:set', e)" />
  </div>
</template>
