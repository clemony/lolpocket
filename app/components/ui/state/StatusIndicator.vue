<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  color?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('tldr-10 inline-grid z-2 *:[grid-area:1/1] absolute ', props.class)">
    <div :class="cn('status  animate-ping bg-[#B666FF] ', props.color)"></div>

    <div :class="cn('status  bg-[#B666FF]', props.color)"></div>
  </div>
</template>