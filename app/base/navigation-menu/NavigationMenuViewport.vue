<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'
import type { NavigationMenuViewportProps } from 'reka-ui'
import { NavigationMenuViewport, useForwardProps } from 'reka-ui'

const props = defineProps<
  NavigationMenuViewportProps & {
    class?: HTMLAttributes['class']
    align?: Align
    wrapperClass?: HTMLAttributes['class']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)

const target = ref<HTMLElement | null>(null)

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
}
</script>

<template>
  <div :class="cn('absolute left-0 top-full grid justify-center')">
    <AnimatePresence>
      <NavigationMenuViewport
        ref="target"
        :align="props.align"
        v-bind="forwarded"
        as-child>
        <motion.div
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden"
          :style="{
            width: 'var(--reka-navigation-menu-viewport-width)',
            height: 'var(--reka-navigation-menu-viewport-height)',
          }"
          :class="
            cn(
              '  bg-blend-screen items-center bg-b1/92 backdrop-blur-md overflow-hidden  border border-b4/70 rounded-xl  text-bc shadow-lg shadow-black/10 relative justify-center grid ',
              props.class,
            )
          ">
          <slot />
        </motion.div>
      </NavigationMenuViewport>
    </AnimatePresence>
  </div>
</template>
