<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'
</script>

<template>
  <div class="overflow-y-auto size-full z-0 !overscroll-auto absolute inset-0">
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
          ghostClass: 'draggable-item-ghost',
          fallbackClass: 'draggable-item-fallback',

          forceFallback: true,
          fallbackTolerance: 0,
          fallbackOnBody: true,

        /*         'clone': (item) => ({
          ...item,
          cloneId: `${item}-${Date.now()}`,
        }),*/
        },
      ]"
      class="flex flex-wrap select-none overscroll-auto justify-self-center justify-start gap-4 px-10  pb-10 pt-14">
      <LazyPopoverItem
        v-for="item in is().filtered"
        :id="item"
        :key="item"
        hydrate-on-visible
        class="size-20 aspect-square shadow-sm drop-shadow-sm rounded-lg" />
    </div>
  </div>
</template>

<style></style>
