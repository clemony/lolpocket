<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-3 text-bc/60', props.class)">
    <slot />
  </p>
</template>
