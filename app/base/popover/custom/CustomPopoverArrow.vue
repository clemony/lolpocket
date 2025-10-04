<script lang="ts" setup>
import { motion } from 'motion-v'
import { PopoverArrow } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
  variants?: any
}>()
</script>

<template>
  <PopoverArrow
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
        :class="
          cn(
            '!size-full z-0 icon absolute bottom-[8px] text-neutral/77 invert opacity-10  stroke-[0.5]  drop-shadow-xs',
            props.class,
          )
        " />

      <icon
        name="formkit:caretdown"
        :class="
          cn(
            '!size-full z-1 icon absolute bottom-[9px] text-neutral/77  stroke-[0.5]  drop-shadow-xs mask-t-from-64% mask-t-to-66%',
            props.class,
          )
        " />
    </motion.div>
  </PopoverArrow>
</template>
