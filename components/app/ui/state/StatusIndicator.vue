<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
    color?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="" :class="cn('tldr-10 inline-grid z-2 *:[grid-area:1/1] absolute top-0.75 right-1 scale-95', props.class)">
    <div class="status status-lg saturate-130 animate-ping" :class="cn('!bg-challenger ', props.color)"></div>
    <div class="status status-lg saturate-130 bg-challenger" :class="{'!bg-challenger ': props.color}"></div>
  </div>
</template>