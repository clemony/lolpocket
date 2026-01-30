<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('opacity-50', className)">
    {{ getDeviceKey() }}
    <slot />
  </span>
</template>
