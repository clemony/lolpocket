<script setup lang="ts">
import { motion } from "motion-v";

const variants = {
  hidden: {
    display: "none",
    opacity: 0,
  },
  visible: {
    display: "inline",
    opacity: 1,
  },
};
</script>

<template>
  <NavigationMenuItem
    class="flex h-12 w-full max-w-full flex-row flex-nowrap items-start justify-start gap-3 overflow-hidden pr-2"
  >
    <div class="grid h-full w-11 shrink-0 place-items-center place-self-center">
      <slot name="icon" />
    </div>

    <motion.div :variants="variants" class="w-full overflow-hidden">
      <slot name="content" />
    </motion.div>
  </NavigationMenuItem>
</template>
