<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('text-bc/60 ml-auto text-xs tracking-widest', props.class)">
    <slot />
  </span>
</template>
