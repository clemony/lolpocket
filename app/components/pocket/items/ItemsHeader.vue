<script lang="ts" setup></script>

<template>
  <div class="w-full">
    <h2 class="">
      Item Sets
    </h2>
    <p class="inline-block leading-6 tracking-tight">
      Drag items from the list at the right. Items are draggable & re-orderable
      within sets and between them. Select

      <icon
        class="drop-shadow-text text-bc mx-1 mb-1.5 inline-block size-4 shrink-0 **:stroke-[1.8]"
        name="gg:check-o"
      />

      a set and

      <span class="drop-shadow-text ml-1 text-lg">{{ getDeviceKey() }}</span>

      <span class="px-1 text-lg">+</span>

      <icon
        class="drop-shadow-text text-bc mr-1 mb-0.5 inline-block size-4.5 shrink-0 scale-x-105 scale-y-95"
        name="ph:mouse-left-click-fill"
      />

      an item from the main list to quick add. Drag entire sets to reorder set
      list.
    </p>
  </div>
</template>

<style scoped></style>
