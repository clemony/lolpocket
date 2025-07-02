<!-- <script setup lang="ts">
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
    :class="cn('absolute  pointer-events-none z-3 grid  place-items-center  ', props.class)">

<div class="grid w-10 h-7 relative  place-items-center mask-bottom-90  overflow-hidden"></div>
  <svg fill="var(--color-b1)"
  :class="cn('!size-10 absolute -scale-x-90 -rotate-180 top-0 text-b1/92 stroke-4  *:stroke-b3 drop-shadow-[0_0_1px] drop-shadow-black/10 ', props.class)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
  </div>
    </motion.div>
  </NavigationMenuIndicator>
</template> -->

<!--     <icon name="popover-caret-up" :class="cn('!size-10 absolute  -top-0.5 text-b1/92 stroke-4 text-shadow-sm *:stroke-b4 drop-shadow-xs drop-shadow-black/30 ', props.class)" /> -->
<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuIndicator, type NavigationMenuIndicatorProps, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="cn('top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in', props.class)"
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuIndicator>
</template>