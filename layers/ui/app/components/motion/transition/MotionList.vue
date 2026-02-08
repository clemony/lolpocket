<script setup lang="ts">
import { motion } from 'motion-v'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <motion.div
    layout
    :class="className">
    <AnimatePresence>
      <motion.div
        v-for="(_, i) in $slots.default?.()"
        :key="i"
        layout
        :initial="{ opacity: 0, y: 8 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: 8 }"
        :transition="{ type: 'spring', bounce: 0.15 }">
        <slot :name="i" />
      </motion.div>
    </AnimatePresence>
  </motion.div>
</template>