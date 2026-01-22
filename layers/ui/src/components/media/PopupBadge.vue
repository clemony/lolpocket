<script setup lang="ts">
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(
  defineProps<{
    delay?: number
  }>(),
  {
    delay: 0.8,
  },
)
</script>

<template>
  <AnimatePresence>
    <motion.span
      v-bind="$attrs"
      :animate="{ scale: [0, 1] }"
      :transition="{ delay: props.delay, type: 'spring' }"
      class="
        indicator-item top-1 right-1 badge rounded-full px-1.75 font-mono
        text-xs badge-sm
      ">
      <slot />
    </motion.span>
  </AnimatePresence>
</template>
