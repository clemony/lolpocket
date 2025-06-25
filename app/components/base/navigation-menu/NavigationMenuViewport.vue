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
    transform: 'translate(0, -12px)',
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
        :style="{
          backdropFilter: 'blur(40px)',
        }"
          :class="
            cn(
              'origin-top-center  bg-b1/90 backdrop-blur-md relative mt-1.5  h(--reka-navigation-menu-viewport-height)  overflow-hidden  border border-b2 rounded-lg text-bc shadow  md:w-(--reka-navigation-menu-viewport-width)',
              props.class,
            )
          " as-child>
        <motion.div
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden" />
      </NavigationMenuViewport>
    </AnimatePresence>
  </div>
</template>
