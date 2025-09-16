<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'

const props = defineProps<{
  class?: HTMLAttributes['class']
  autoPlay?: boolean
}>()
</script>

<template>
  <div
    v-if="props.autoPlay"
    :class="cn('size-full absolute top-0 left-0 object-cover', props.class)">
    <video-background
      src="/video/particles-4.webm"
      class="size-full object-cover aspect-square"></video-background>
  </div>

  <AnimatePresence v-else>
    <motion.div
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.1 }"
      :class="cn('size-full absolute top-0 left-0 object-cover', props.class)">
      <video-background
        src="/video/particles.webm"
        class="size-full object-cover aspect-square"></video-background>
    </motion.div>
  </AnimatePresence>
</template>
