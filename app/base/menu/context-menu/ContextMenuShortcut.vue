<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto text-2 tracking-widest text-b2-bc', props.class)">
    <slot />
  </span>
</template>
