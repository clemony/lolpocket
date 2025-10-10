<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'
</script>

<template>
  <div
    v-draggable="[
      is().filtered,
      {
        group: {
          name: 'items',
          put: false,
          pull: 'clone',
          revertClone: true,
        },
        sort: false,
        bubbleScroll: false,
        scroll: false,
        delay: 0,
        chosenClass: 'item-set-item-chosen',
        ghostClass: 'draggable-icon-ghost',
        fallbackClass: 'draggable-icon-fallback',

        forceFallback: true,
        fallbackTolerance: 0,
        fallbackOnBody: true,

        /*         'clone': (item) => ({
          ...item,
          cloneId: `${item}-${Date.now()}`,
        }),*/
      },
    ]"
    class="flex flex-wrap select-none overscroll-auto justify-self-center justify-start gap-4 px-1 pb-10 pt-14">
    <LazyItemPopover
      v-for="item in is().filtered"
      :id="item"
      :key="item"
      class="size-20 aspect-square shadow-sm drop-shadow-sm rounded-lg" />
  </div>
</template>

<style></style>
