<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <AnimatePresence>
    <motion.div :animate="{ opacity: 1 }" :exit="{ opacity: 0 }" :transition="{ duration: 0.1 }" :class="cn('size-full object-cover', props.class)">
      <video-background src="/video/prismatic-shine.webm" class="size-full object-cover aspect-square"></video-background>
    </motion.div>
  </AnimatePresence>
</template>