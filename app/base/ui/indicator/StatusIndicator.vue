<script setup lang="ts">
const { color } = defineProps<{
  color?: HTMLAttributes['class']
}>()
</script>

<template>
  <span class="indicator-item size-[7px]! translate-x-0.75 -translate-y-0.75">
    <span
      :style="{
        backgroundColor: `var(--color-${color})`,
      }"
      class="absolute status size-[7px]! animate-ping" />
    <span
      :style="{
        backgroundColor: `var(--color-${color})`,
      }"
      class="absolute status size-[7px]!" />
  </span>
</template>
