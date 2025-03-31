<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
    color?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="" :class="cn('tldr-10 inline-grid z-2 *:[grid-area:1/1] absolute ', props.class)">
    <div class="status  animate-ping" :class="cn('!bg-[#B666FF] ', props.color)"></div>
    <div class="status  bg-[#B666FF]" :class="{'!bg-[#B666FF]': props.color}"></div>
  </div>
</template>