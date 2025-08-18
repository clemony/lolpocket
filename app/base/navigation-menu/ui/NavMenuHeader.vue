<script setup lang="ts">
import { motion } from 'motion-v'

const variants = {
  hidden: {
    display: 'none',
    opacity: 0,
  },
  visible: {
    display: 'inline',
    opacity: 1,
  },
}
</script>

<template>
  <NavigationMenuItem class="max-w-full h-12 pr-2 flex flex-row flex-nowrap items-start w-full gap-3  justify-start  overflow-hidden">
    <div class="w-11 h-full place-self-center grid place-items-center shrink-0">
      <slot name="icon" />
    </div>

    <motion.div
      :variants="variants"
      class="w-full  overflow-hidden">
      <slot name="content" />
    </motion.div>
  </NavigationMenuItem>
</template>