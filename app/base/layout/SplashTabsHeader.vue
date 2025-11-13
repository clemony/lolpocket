<script setup lang="ts">
import { motion } from "motion-v";

const iconVariants = {
  closed: {
    width: "calc(var(--spacing) * 16)",
    height: "calc(var(--spacing) * 16)",
  },
  open: {
    width: "calc(var(--spacing) * 22)",
    height: "calc(var(--spacing) * 22)",
  },
};

const headerVariants = {
  closed: {
    fontSize: "var(--text-6",
  },
  open: {
    fontSize: "var(--text-12)",
  },
};
</script>

<template>
  <div class="relative flex h-22 w-120 items-center gap-6">
    <motion.div as-child :variants="iconVariants">
      <slot name="icon" />
    </motion.div>

    <div class="flex grow flex-col justify-center gap-1.5">
      <motion.div class="flex items-center gap-4" :variants="headerVariants">
        <slot name="header" />
      </motion.div>

      <motion.div class="flex items-center gap-4 pl-0.5 font-normal lowercase">
        <slot name="text" />
      </motion.div>
    </div>
  </div>
</template>
