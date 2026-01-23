<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('text-b2-bc ml-auto text-sm tracking-widest', props.class)">
    <slot />
  </span>
</template>
