<script setup lang="ts">
import { motion } from 'motion-v'

const wrapperVariants = {
    hidden: {
    },
    visible: {
    }
}
</script>

<template>

<motion.label :variants="wrapperVariants" class="flex gap-4 items-center group cursor-pointer" while-hover="visible" initial="hidden" exit="hidden">
    <slot  />
</motion.label>
</template>