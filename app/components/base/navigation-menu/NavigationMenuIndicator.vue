<script setup lang="ts">
import { motion } from 'motion-v'

import type { NavigationMenuIndicatorProps } from 'reka-ui'
import { NavigationMenuIndicator, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuIndicatorProps & {
  class?: HTMLAttributes['class']
sideOffset?: number
alignOffset?: number
}>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
const variants = {
  visible: {
    opacity: 1,
    transform: 'translate(0, -2px)',
    scale: 1,
  },
  hidden: {
    opacity: 0,
    transform: 'translate(0, 12px)',
    scale: 0.6,
  },
}
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwarded" as-child>
    <motion.div
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden"
    :style="{
      top: `calc(100% + ${props.sideOffset}px`,
left: `calc(var(--reka-navigation-menu-indicator-position) + ${props.alignOffset}px)`,
    }"
    :class="cn('absolute  z-3 flex size-9  items-end justify-center overflow-hidden ', props.class)">
<!--     <div class="relative drop-shadow-[1px_1px_1px_var(--color-black/15)]  top-[86%] h-[24px] w-[24px] rotate-[45deg] bg-white border border-b4/70" /> -->


    <icon name="popover-caret-up" :class="cn('!size-9 relative  border-red-500 border text-b1 stroke-2 text-shadow-sm *:ring *:ring-black *:stroke-b4 drop-shadow-xs ', props.class)" />
    </motion.div>
  </NavigationMenuIndicator>
</template>