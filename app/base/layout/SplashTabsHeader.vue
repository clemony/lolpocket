<script setup lang="ts">
import { motion } from 'motion-v'

const iconVariants = {
  open: {
    height: 'calc(var(--spacing) * 22)',
    width: 'calc(var(--spacing) * 22)',
  },
  closed: {
    height: 'calc(var(--spacing) * 16)',
    width: 'calc(var(--spacing) * 16)',
  },
}

const headerVariants = {
  open: {
    fontSize: 'var(--text-xxs2)',
  },
  closed: {
    fontSize: 'var(--text-xl',
  },
}
</script>

<template>
  <div class="relative flex items-center w-120 h-22 items-center gap-6">
    <motion.div
      as-child
      :variants="iconVariants">
      <slot name="icon" />
    </motion.div>

    <div class="flex flex-col grow justify-center gap-1.5">
      <motion.div
        class="flex items-center gap-4"
        :variants="headerVariants">
        <slot name="header" />
      </motion.div>

      <motion.div class="flex items-center lowercase gap-4 pl-0.5 font-normal">
        <slot name="text" />
      </motion.div>
    </div>
  </div>
</template>
