<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <motion.div
    :animate="{ opacity: 1 }"
    :exit="{ opacity: 0 }"
    :transition="{ duration: 0.1 }"
    :class="cn('size-full absolute top-0 left-0 z-3  pointer-events-none  tldr-20 object-cover', props.class)">
    <video-background
      src="/video/prismatic-shine.webm"
      class="size-full object-cover aspect-square pointer-events-none"></video-background>
  </motion.div>
</template>