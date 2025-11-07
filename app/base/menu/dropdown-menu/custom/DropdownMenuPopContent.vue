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
  <DropdownMenuContent
    as-child
    :align="align"
    v-bind="$attrs">
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
          'z-50 w-(--reka-dropdown-menu-trigger-width) !rounded-lg border backdrop-blur-lg drop-shadow-md !border-b3  bg-b1/94  p-1 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
          className,
        )
      ">
      <slot />
    </motion.div>
  </DropdownMenuContent>
</template>
