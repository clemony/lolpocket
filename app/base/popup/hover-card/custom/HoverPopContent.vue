<script setup lang="ts">
import type { HoverCardContentProps } from 'reka-ui'
import { motion } from 'motion-v'
import { HoverCardContent, HoverCardPortal, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

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
      <HoverCardContent
        as-child
        v-bind="forwarded">
        <motion.div
          :variants="variants"
          initial="hidden"
          animate="visible"
          exit="hidden"
          :transition="{
            type: 'spring',
            duration: 0.2,
            bounce: 0.3,
          }"
          v-bind="{ forwarded }"
          :class="
            cn(
              'z-50 w-72 rounded-lg border backdrop-blur-lg drop-shadow-md !border-b3  bg-b1/94  p-2 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
              props.class,
            )
          ">
          <motion.div
            :variants="wrapperVariants"
            initial="hidden"
            animate="visible"
            exit="hidden"
            class="size-full"
            :transition="{
              type: 'spring',
              bounce: 0.25,
              duration: 0.4,
            }">
            <slot />
          </motion.div>
        </motion.div>
      </HoverCardContent>
    </AnimatePresence>
  </HoverCardPortal>
</template>
