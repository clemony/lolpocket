<script lang="ts" setup>
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <motion.div
    v-bind="$attrs"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :exit="{ opacity: 0 }"
    :class="cn('', className)"
    :transition="{ duration: 0.4, type: 'spring', bounce: 0.35 }">
    <slot />
  </motion.div>
</template>
