<script setup lang="ts">
import { motion } from 'motion-v'

const wrapperVariants = {
  hidden: {},
  visible: {},
}
</script>

<template>
  <motion.label
    class="group flex cursor-pointer items-center gap-4"
    :variants="wrapperVariants"
    while-hover="visible"
    initial="hidden"
    exit="hidden"
  >
    <slot />
  </motion.label>
</template>
