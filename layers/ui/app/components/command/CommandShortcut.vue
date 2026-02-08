<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto text-xs tracking-widest text-pc/60', props.class)">
    <slot />
  </span>
</template>
