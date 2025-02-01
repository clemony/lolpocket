<script lang="ts" setup>
import type { DraggableEvent } from 'vue-draggable-plus'
import { vDraggable } from 'vue-draggable-plus'

const emit = defineEmits(['update:drag'])
const target = ref()
const { isOutside } = useMouseInElement(target)

const as = useAccountStore()

const list = computedAsync (() => {
  return as.favoriteItems
})

const isDragging = ref(false)

function onStart(event: DraggableEvent) {
  isDragging.value = true
}

watchEffect(() => {
  if (isOutside.value && isDragging.value) {
    emit('update:drag', isDragging.value)
  }
})

function onEnd(event: DraggableEvent) {
  isDragging.value = false
  emit('update:drag', isDragging.value)
}
</script>

<template>
  <div ref="target" class="">
    <h1>Favorite Items</h1>
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
      class="overflow-y-auto max-h-full grid grid-flow-row auto-cols-auto  h-fit  grid-cols-5 justify-center gap-2   py-6 "
      @start="onStart" @end="onEnd"
    >
      <div v-for="item in list" :key="item.id">
        <Item :item="item" />
      </div>
    </transition-slide>
  </div>
</template>

<style scoped>

</style>
