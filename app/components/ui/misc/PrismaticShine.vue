<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <MotionMin :animate="{ opacity: 1 }" :exit="{ opacity: 0 }" :transition="{ duration: 0.1 }" :class="cn('size-full absolute top-0 left-0   pointer-events-none  tldr-20 object-cover', props.class)">
    <video-background src="/video/prismatic-shine.webm" class="size-full object-cover aspect-square pointer-events-none"></video-background>
  </MotionMin>
</template>