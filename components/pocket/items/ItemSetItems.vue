<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket: pocket
  set: ItemSet
  limit?: number
}>()

const pocket = ref(props.pocket)

function handleDragEnd(event) {
  console.log('hi')
  const draggedItem = event.item
  console.log(draggedItem)
  const targetSet = event.to

  if (targetSet && targetSet.items) {
    const isDuplicate = targetSet.items.some(item => item.name === draggedItem.name)

    if (isDuplicate) {
      console.log('Duplicate item found. Item not added.')
      event.item.remove()
    }
    else {
      targetSet.items.push(draggedItem)
    }
  }
}
</script>

<template>
  <transition-slide
    :key="set.key" v-draggable="[
      set.items,
      {
        'group': {
          name: 'items',
          pull: true,
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
    @end="handleDragEnd"
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
</template>

<style scoped></style>
