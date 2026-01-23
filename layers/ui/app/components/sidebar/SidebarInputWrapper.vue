<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label :class="cn('input bg-b1 relative mt-2 h-12 rounded-lg', className)">
    <slot />
  </label>
</template>
