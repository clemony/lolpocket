<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-md text-pc/60', props.class)">
    <slot />
  </p>
</template>
