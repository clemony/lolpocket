<script lang="ts" setup>
import { motion } from 'motion-v'

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}
</script>

<template>
  <motion.li

    :variants="variants"
    initial="hidden"
    animate="visible"
    exit="hidden"
    class="py-2 px-3 hover:bg-b3/60 hover:bg-noise hover:border-b3 border border-transparent text-bc flex items-center gap-3  rounded-xl">
    <slot />
  </motion.li>
</template>