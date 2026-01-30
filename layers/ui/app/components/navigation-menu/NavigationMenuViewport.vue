<script setup lang="ts">
import type { NavigationMenuViewportProps } from 'reka-ui'
import { AnimatePresence, motion } from 'motion-v'
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

const target = useTemplateRef<HTMLElement | null>('target')

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
}
</script>

<template>
  <div :class="cn('absolute top-full left-0 grid justify-center')">
    <AnimatePresence>
      <NavigationMenuViewport
        v-bind="forwarded"
        ref="target"
        :align="props.align"
        as-child
      >
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
              'border-b4/70 bg-b1/92 text-bc relative grid items-center justify-center overflow-hidden rounded-xl border bg-blend-screen shadow-lg shadow-black/10 backdrop-blur-md',
              props.class,
            )
          "
        >
          <slot />
        </motion.div>
      </NavigationMenuViewport>
    </AnimatePresence>
  </div>
</template>
