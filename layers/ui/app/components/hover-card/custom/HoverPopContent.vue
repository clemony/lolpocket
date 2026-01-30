<script setup lang="ts">
import type { HoverCardContentProps } from 'reka-ui'
import { motion } from 'motion-v'
import { HoverCardContent, HoverCardPortal, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<HoverCardContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  }
)

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
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
      delay: 0,
    },
    visibility: 'visible',
  },
}
</script>

<template>
  <HoverCardPortal>
    <AnimatePresence>
      <HoverCardContent v-bind="forwarded" as-child>
        <motion.div
          v-bind="{ forwarded }"
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden"
          :transition="{
            type: 'spring',
            duration: 0.2,
            bounce: 0.3,
          }"
          :class="
            cn(
              'border-b3! bg-b1/94 text-bc z-50 w-72 rounded-lg border p-2 shadow-md drop-shadow-md backdrop-blur-lg outline-none group-data-[state=hidden]:**:opacity-0 group-data-[state=visible]:**:opacity-100',
              props.class,
            )
          "
        >
          <motion.div
            class="size-full"
            :variants="wrapperVariants"
            initial="hidden"
            animate="visible"
            exit="hidden"
            :transition="{
              type: 'spring',
              bounce: 0.25,
              duration: 0.4,
            }"
          >
            <slot />
          </motion.div>
        </motion.div>
      </HoverCardContent>
    </AnimatePresence>
  </HoverCardPortal>
</template>
