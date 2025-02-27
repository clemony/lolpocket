<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  pocket?: pocket
  dragDisabled?: boolean
  class?: HTMLAttributes['class']
}>()

const ItemLoad = defineAsyncComponent(() => import('components/items/Item.vue'))
const list = computed(() => {
  return [...useItemFilter()]
})

function onStart(event: DraggableEvent) {
  console.log('start drag')
}

function onEnd(event: DraggableEvent) {
  // console.log("💠 - handleDragEnd - event:", event)
  // console.log('hi')
  const draggedItem = event.item
  // console.log(draggedItem)
  const targetSet = event.to
  // console.log("💠 - handleDragEnd - targetSet:", targetSet)

  /*  if (targetSet && targetSet.items) {
    const isDuplicate = targetSet.items.some(item => item.name === draggedItem.name)

    if (isDuplicate) {
      console.log('Duplicate item found. Item not added.')
      event.item.remove()
    }
    else {
      targetSet.items.push(draggedItem)
    }
  } */
}

function onClone(event: DraggableEvent) {
  console.log('💠 - onClone - event:', event)
  console.log('clone')
}
</script>

<template>
  <transition-slide
    v-draggable="[
      list,
      {
        'group': {
          name: 'items',
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
    class="overflow-y-auto absolute inset-0 grid grid-flow-row auto-cols-auto select-none h-fit  grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-center gap-4 px-4  pb-10 pt-26"

    @end="onEnd"
    @clone="onClone"
    @start="onStart"
  >
    <Suspense>
      <template #default>
        <ItemLoad v-for="item in list" :key="item.id" :item="item" class="select-none" />
      </template>
      <template #fallback>
        <Skeleton class="size-full rounded-lg" />
      </template>
    </Suspense>
  </transition-slide>
</template>

<style></style>
