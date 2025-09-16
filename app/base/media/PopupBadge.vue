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
  }
)
</script>

<template>
  <AnimatePresence>
    <motion.span
      v-bind="$attrs"
      :animate="{ scale: [0, 1] }"
      :transition="{ delay: props.delay, type: 'spring' }"
      class="indicator-item badge font-mono badge-sm px-1.75 top-1 right-1 rounded-full text-xxs">
      <slot />
    </motion.span>
  </AnimatePresence>
</template>
