<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto text-1 tracking-widest text-bc/60', props.class)">
    <slot />
  </span>
</template>
