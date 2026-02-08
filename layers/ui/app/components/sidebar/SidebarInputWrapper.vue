<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label :class="cn('input relative mt-2 h-12 rounded-lg bg-p0', className)">
    <slot />
  </label>
</template>
