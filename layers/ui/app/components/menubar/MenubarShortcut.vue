<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    :class="cn('text-bc/70 ml-auto pr-1.5 text-sm tracking-widest', props.class)">
    <slot />
  </span>
</template>
