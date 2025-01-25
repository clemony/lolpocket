<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { vDraggable } from 'vue-draggable-plus';

const props = defineProps<{
  pocket?: pocket
  dragDisabled?: boolean
  class?: HTMLAttributes['class']
}>()
const ts = useTempStore()

const list = computed(() => {
  return useItemFilter()
})

const isDisabled = computed (() => {
  return props.dragDisabled
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
        'animation': 300,
        'force-fallback': true,
        'fallbackTolerance': 0,
        'fallbackOnBody': true,
      },
    ]"
    group
    :disabled="isDisabled"
    :class="cn('px-10  overflow-y-auto max-h-full grid grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(56px,1fr))] justify-center gap-2  pt-[12.8vh] pb-6 ', props.class)"
  >
  <div v-for="item in list" :key="item.id">
   <Popover
      :key="item.id" >
    <PopoverTrigger as-child>
      <img
        :src="`/img/item/${item.id}.webp`"
        :alt="`${item.name} Image`"
        class="aspect-square size-full rounded-lg"
      />
    </PopoverTrigger>
    <PopoverContent class="w-92 max-h-100 overflow-y-auto shadow-pretty">
     <ItemInfo :item="item" class="[&_h1]:!text-5 [&_.stat-grid]:!grid-cols-[2fr_1fr]"/>
    </PopoverContent>
  </Popover>
  </div>
  </transition-slide>
</template>

<style></style>
