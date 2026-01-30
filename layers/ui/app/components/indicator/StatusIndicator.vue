<script setup lang="ts">
const { color } = defineProps<{
  color?: HTMLAttributes['class']
}>()
</script>

<template>
  <span class="indicator-item size-[7px]! translate-x-0.75 -translate-y-0.75">
    <span
      class="status absolute size-[7px]! animate-ping"
      :style="{
        backgroundColor: `var(--color-${color})`,
      }"
    />
    <span
      class="status absolute size-[7px]!"
      :style="{
        backgroundColor: `var(--color-${color})`,
      }"
    />
  </span>
</template>
