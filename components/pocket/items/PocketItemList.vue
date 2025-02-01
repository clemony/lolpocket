<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { vDraggable } from 'vue-draggable-plus';

const props = defineProps<{
  pocket?: pocket
  dragDisabled?: boolean
  class?: HTMLAttributes['class']
}>()

const list = computed(() => {
  return useItemFilter()
})


</script>

<template>

  <transition-slide
    v-draggable="[
      list,
      {
        'group': {
          name: 'items',
          pull: 'clone',
          put: false,
          revertClone: true,
        },
        'sort': false,
        'bubbleScroll': false,
        'scroll': false,
        'delay': 0,

        'force-fallback': true,
        'fallbackTolerance': 0,
        'fallbackOnBody': true,
      },
    ]"
    group
    class="pl-10 pr-2 overflow-y-auto max-h-full grid grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-center gap-2   py-6 "
  >
    <div v-for="item in list" :key="item.id">
      <Item :item="item" />
    </div>
  </transition-slide>
</template>

<style></style>
