<script lang="ts" setup>
import { motion } from "motion-v"

defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <motion.div
    class="relative grid size-5 place-items-center overflow-hidden"
    v-bind="$attrs"
    :initial="{ maxWidth: 0, opacity: 0.6 }"
    :animate="{ maxWidth: '100%', opacity: 1 }"
    :exit="{ opacity: 0 }"
    :transition="{
      duration: 0.5,
    }">
    <icon
      name="tick"
      :class="cn('absolute size-5 shrink-0 ds-2xs', className)" />
  </motion.div>
</template>
