<script setup lang="ts">
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})

const {
  sideOffset = 4,
  align = 'center',
  class: className,
  scaleStart = 0.6,
} = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  align?: Align
  scaleStart?: number
}>()

const variants = {
  hidden: {
    opacity: 0,
    scale: scaleStart,
    transitionEnd: { visibility: 'hidden' },
  },
  visible: {
    opacity: 1,
    scale: 1,
    visibility: 'visible',
  },
}

const wrapperVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
    transitionEnd: { visibility: 'hidden' },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
    },
    visibility: 'visible',
  },
}
</script>

<template>
  <DropdownMenuContent v-bind="$attrs" as-child :align="align">
    <motion.div
      :variants="variants"
      initial="hidden"
      animate="visible"
      exit="hidden"
      :transition="{
        type: 'spring',
        duration: 0.3,
        bounce: 0.2,
      }"
      :class="
        cn(
          'border-b3! bg-b1/94 text-bc z-50 w-(--reka-dropdown-menu-trigger-width) rounded-lg! border p-1 shadow-md drop-shadow-md backdrop-blur-lg outline-none group-data-[state=hidden]:**:opacity-0 group-data-[state=visible]:**:opacity-100',
          className,
        )
      "
    >
      <slot />
    </motion.div>
  </DropdownMenuContent>
</template>
