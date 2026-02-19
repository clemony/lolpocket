<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <TransitionFade
    :class="
      cn(
        'pointer-events-none absolute top-0 left-0 z-3 size-full object-cover transition-all duration-500',
        props.class
      )
    ">
    <!--     <video-background
      class="pointer-events-none aspect-square size-full scale-110 object-cover"
      src="/video/prismatic-shine.webm" /> -->
  </TransitionFade>
</template>
