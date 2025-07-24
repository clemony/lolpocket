<script setup lang="ts">
const { tip, class: className } = defineProps<{
  tip?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button
    v-tippy="tip"
    :class="cn('btn-ghost btn btn-square btn-sm', className)">
    <slot />
  </button>
</template>