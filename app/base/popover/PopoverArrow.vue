<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
import { motion } from 'motion-v'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<PopoverArrowProps & {
  variants?: any
  class?: HTMLAttributes['class']
  variant?: PopoverContentVariants['variant']
}>()

const forwarded = useForwardProps(props)
</script>

<template>
  <PopoverArrow
    v-bind="forwarded"
    as-child
    class="icon"
    :height="8"
    :width="8">
    <motion.div
      :variants="props.variants"
      initial="hidden"
      animate="visible"
      exit="hidden"
      :transition="{
        type: 'spring',
        duration: 0.1,
        bounce: 0.2,
      }"
      class="relative size-8 relative scale-x-110">
      <icon
        name="formkit:caretdown"
        :class=" cn(
          '!size-full z-0 icon absolute bottom-[8px] invert opacity-10  stroke-[0.5]  drop-shadow-xs', popoverArrowVariants({ variant }), props.class)" />

      <icon
        name="formkit:caretdown"
        :class=" cn('!size-full z-1 icon absolute bottom-[9px]  stroke-[0.5]  drop-shadow-xs mask-t-from-64% mask-t-to-66%', popoverArrowVariants({ variant }), props.class)" />
    </motion.div>
  </PopoverArrow>
</template>
