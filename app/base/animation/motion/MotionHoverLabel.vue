<script setup lang="ts">
import { motion } from "motion-v";

const wrapperVariants = {
  hidden: {},
  visible: {},
};
</script>

<template>
  <motion.label
    :variants="wrapperVariants"
    class="group flex cursor-pointer items-center gap-4"
    while-hover="visible"
    initial="hidden"
    exit="hidden"
  >
    <slot />
  </motion.label>
</template>
