<script lang="ts" setup>
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
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
    exit="hidden">
    <label
      class=" btn-ghost-dark group "
      :class="cn('', className)" @click="console.log('click')">
      <slot />
    </label>
  </motion.li>
</template>