<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="" :class="cn('tldr-10 inline-grid z-2 *:[grid-area:1/1] absolute top-0.75 right-1 scale-95', props.class)">
    <div class="status status-lg !bg-challenger saturate-130 animate-ping"></div>
    <div class="status status-lg saturate-130 !bg-challenger"></div>
  </div>
</template>