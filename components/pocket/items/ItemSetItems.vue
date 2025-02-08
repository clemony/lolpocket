<script setup lang="ts">
import { vDraggable, VueDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
  set: ItemSet
  limit?: number
}>()

const pocket = ref(props.pocket)
// console.log("💠 - pocket:", pocket)

/* function handleDragEnd(event: DraggableEvent) {
  const draggedItem = event.item
  console.log(draggedItem)
  const targetSet = event.to
  console.log("💠 - handleDragEnd - targetSet:", targetSet)

  if (targetSet && targetSet.) {
    const isDuplicate = targetSet.items.some(item => item.name === draggedItem.name)

    if (isDuplicate) {
      console.log('Duplicate item found. Item not added.')
      event.item.remove()
    }
    else {
      targetSet.items.push(draggedItem)
    }
  }
} */

function onStart(event: DraggableEvent) {
  // console.log('start drag')
}

function onEnd(event: DraggableEvent) {
  // console.log('end drag')
}
function onAdd(event: DraggableEvent) {
  /*  console.log("💠 - onAdd - event:", event.item)
  console.log('end drag') */
}
</script>

<template>
  <transition-slide
    :key="set.name" v-draggable="[
      set.items,
      {
        'group': {
          name: 'items',
          pull: 'clone',
          put: 'items',
          revertClone: false,
        },
        'bubbleScroll': false,
        'scroll': false,
        'delay': 0,
        'animation': 300,
        'force-fallback': true,
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
  >
    <Item
      v-for="item in set.items"
      :key="item.id"
      :item="item"
      :pocket="pocket"
      class="shadow-sm size-full shrink-0"
    />

    <Placeholder class="rounded-lg border-b3/50 inset-shadow-xs group-has-[.sortable-ghost]:hidden" />
  </transition-slide>

  <!-- <VueDraggable  :key="set.name"
      v-model="set.items"

        :group="{
          name: 'items',
          pull: true,
          put: [ 'items'],
          revertClone: false,
        }"
        :bubbleScroll="false"
        :scroll="false"
        :delay="0"
        :animation="300"
        :force-fallback="true"
        :fallbackTolerance="0"
        :fallbackOnBody="true"
    :offset="[0, -16]"
        filter=".no-drag"
    class="grid grid-flow-row auto-cols-auto  h-fit  grid-cols-[repeat(auto-fill,minmax(52px,1fr))] justify-center gap-3 group"
    :class="{ 'gap-5!': props.limit }"
    @end="onEnd"
    @start="onStart">

    <Item
      v-for="item in set.items"
      :key="item.id"
      :item="item"
      :pocket="pocket"
      class="shadow-sm size-full shrink-0"
    />

    <Placeholder class="rounded-lg border-b3/50 inset-shadow-xs group-has-[.sortable-ghost]:hidden" />
    </VueDraggable> -->
</template>

<style scoped></style>
