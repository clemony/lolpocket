<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('underline decoration-dashed', className)">
    <slot />
  </span>
</template>