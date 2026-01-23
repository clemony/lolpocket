<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto text-sm tracking-widest opacity-60', props.class)">
    <slot />
  </span>
</template>
