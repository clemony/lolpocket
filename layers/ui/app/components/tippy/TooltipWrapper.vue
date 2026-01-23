<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <div :class="cn('tippy-content', className)">
    <slot />
  </div>
</template>