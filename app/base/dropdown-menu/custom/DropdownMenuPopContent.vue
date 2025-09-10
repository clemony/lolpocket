<script setup lang="ts">
import { motion } from 'motion-v'

defineOptions({
  inheritAttrs: false,
})

const { align = 'center', sideOffset = 4, scaleStart = 0.6, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  align?: Align
  scaleStart?: number
}>()

const variants = {
  visible: {
    opacity: 1,
    visibility: 'visible',
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: scaleStart,
    transitionEnd: { visibility: 'hidden' },
  },
}

const wrapperVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    visibility: 'visible',
    transition: {

      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    scale: 1,
    transitionEnd: { visibility: 'hidden' },
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
