<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  pocket?: pocket
  dragDisabled?: boolean
  class?: HTMLAttributes['class']
}>()

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
  console.log('💠 - onClone - event:', event.data)
  console.log('clone')
}
</script>

<template>
  <div
    v-draggable="[
      list,
      {
        'group': {
          name: 'items',
          put: false,
          pull: 'clone',
          revertClone: true,
        },
        'sort': false,
        'bubbleScroll': false,
        'scroll': false,
        'delay': 0,

        'force-fallback': true,
        'fallbackTolerance': 0,
        'fallbackOnBody': true,

        'clone': (item) => ({
          ...item,
          cloneId: `${item.id}-${Date.now()}`,
        }),
      },
    ]"
    group
    class=""
    :class="cn('overflow-y-auto transitio-all duration-400 absolute inset-0 grid grid-flow-row auto-cols-auto select-none h-fit  grid-cols-[repeat(auto-fill,minmax(54px,1fr))] justify-center gap-4 px-4  pb-10 pt-26', props.class)"

    @end="onEnd"
    @clone="onClone"
    @start="onStart">
    <LazyItem v-for="item in list" :key="item.id" :item="item" class="select-none" />
  </div>
</template>

<style></style>
