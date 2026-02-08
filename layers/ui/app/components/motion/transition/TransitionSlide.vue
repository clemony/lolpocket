<script lang="ts" setup>
import { motion, stagger } from 'motion-v'

const {
  class: className,
} = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <motion.div
    layout
    :class="cn(className)"
    :transition="{
      delayChildren: stagger(0.1),
      type: 'spring',
      bounce: 0.2,

    }">
    <AnimatePresence>
      <slot />
    </AnimatePresence>
  </motion.div>
</template>
