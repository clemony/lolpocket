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
    :initial="{ maxWidth: 0, opacity: 0.6 }"
    :animate="{ maxWidth: '100%', opacity: 1 }"
    :exit="{ opacity: 0 }"
    :transition="{
      duration: 0.5,
    }"
    class="size-5 relative overflow-hidden grid place-items-center">
    <icon
      name="tick"
      :class="cn('shrink-0 absolute size-5 dst', className)" />
  </motion.div>
</template>
