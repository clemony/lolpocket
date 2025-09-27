<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <TransitionFade
    :class="
      cn(
        'size-full absolute top-0 left-0 z-3 transition-all duration-500  pointer-events-none   object-cover',
        props.class,
      )
    ">
    <video-background
      src="/video/prismatic-shine.webm"
      class="size-full object-cover aspect-square pointer-events-none"></video-background>
  </TransitionFade>
</template>
