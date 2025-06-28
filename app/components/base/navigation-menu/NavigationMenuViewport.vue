<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'
import type { NavigationMenuViewportProps } from 'reka-ui'
import {
  NavigationMenuViewport,
  useForwardProps,
} from 'reka-ui'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'], align?: Align }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)

const variants = {
  visible: {
    opacity: 1,
    transform: 'translate(0, 0)',
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
  <div class="absolute left-0 top-full flex justify-center  ">
    <AnimatePresence>
      <NavigationMenuViewport
      :align="props.align"
        v-bind="forwarded"
          :class="
            cn(
              'origin-top-center bg-blend-screen  bg-b1/84 backdrop-blur-md relative mt-1.5  h(--reka-navigation-menu-viewport-height)  overflow-hidden  border border-b3 rounded-xl text-bc shadow-lg shadow-black/10 w-(--reka-navigation-menu-viewport-width)',
              props.class,
            )
          " as-child>
        <motion.div
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden" />
          <slot  />

      </NavigationMenuViewport>
    </AnimatePresence>
  </div>
</template>
