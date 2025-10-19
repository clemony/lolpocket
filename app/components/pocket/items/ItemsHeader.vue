<script lang="ts" setup>
import { getDeviceKey } from '~/utils/config/handleDevice'
</script>

<template>
  <div class="w-full">
    <h2 class="">
      Item Sets
    </h2>
    <p class="tracking-tight leading-6 inline-block">
      Drag items from the list at the right. Items are draggable &
      re-orderable within sets and between them. Select

      <icon
        name="gg:check-o"
        class="size-4 drop-shadow-text mb-1.5 shrink-0 mx-1 inline-block **:stroke-[1.8] text-bc" />

      a set and

      <span class="text-4 ml-1 drop-shadow-text">{{ getDeviceKey() }}</span>

      <span class="text-4 px-1">+</span>

      <icon
        name="ph:mouse-left-click-fill"
        class="size-4.5 drop-shadow-text scale-y-95 scale-x-105 shrink-0 mr-1 mb-0.5 inline-block text-bc" />

      an item from the main list to quick add. Drag entire sets to reorder set list.
    </p>
  </div>
</template>

<style scoped></style>
