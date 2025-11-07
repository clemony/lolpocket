<script setup lang="ts">
const { color } = defineProps<{
  color?: HTMLAttributes['class']
}>()
</script>

<template>
  <span class="indicator-item !size-[7px] -translate-y-0.75 translate-x-0.75">
    <span
      :style="{
        backgroundColor: `var(--color-${color})`,
      }"
      class="!size-[7px] status animate-ping absolute" />
    <span
      :style="{
        backgroundColor: `var(--color-${color})`,
      }"
      class="!size-[7px] status absolute" />
  </span>
</template>