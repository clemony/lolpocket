<script setup lang="ts">
import { motion } from 'motion-v'
import type { HoverCardContentProps } from 'reka-ui'
import {
  HoverCardContent,

  HoverCardPortal,
  useForwardProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<HoverCardContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  },
)

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)

const variants = {
  visible: {
    opacity: 1,
    visibility: 'visible',
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.6,
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
            duration: 0.3,
            bounce: 0.2,
          }"
          v-bind="{ forwarded }"
          :class="
            cn(
              'z-50 w-72 rounded-xl border backdrop-blur-lg drop-shadow-md !border-b3  bg-b1/94  p-2 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
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
