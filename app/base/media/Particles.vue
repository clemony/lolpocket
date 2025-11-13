<script lang="ts" setup>
import { AnimatePresence, motion } from "motion-v";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  autoPlay?: boolean;
}>();
</script>

<template>
  <div
    v-if="props.autoPlay"
    :class="cn('absolute top-0 left-0 size-full object-cover', props.class)"
  >
    <video-background
      src="/video/particles-4.webm"
      class="aspect-square size-full object-cover"
    ></video-background>
  </div>

  <AnimatePresence v-else>
    <motion.div
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.1 }"
      :class="cn('absolute top-0 left-0 size-full object-cover', props.class)"
    >
      <video-background
        src="/video/particles.webm"
        class="aspect-square size-full object-cover"
      ></video-background>
    </motion.div>
  </AnimatePresence>
</template>
