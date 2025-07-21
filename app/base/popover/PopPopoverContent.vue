<script setup lang="ts">
import { motion } from 'motion-v'

import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import {
  PopoverContent,
  PopoverPortal,
  useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<PopoverContentProps & {
    class?: HTMLAttributes['class']
    to?: string,
    sideOffset?: number
    align?: string
    scaleStart?: number
   }>(),
  {
    align: 'center',
    sideOffset: 4,
    scaleStart: 0.6,
  },
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
console.log('💠 - forwarded:', forwarded)

const variants = {
  visible: {
    opacity: 1,
    visibility: 'visible',
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: props.scaleStart,
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
  <PopoverPortal :to="props.to">
    <AnimatePresence>
      <PopoverContent as-child :align="align" v-bind="forwarded">
        <motion.div
          :variants="variants" initial="hidden" animate="visible" exit="hidden" :transition="{
            type: 'spring',
            duration: 0.3,
            bounce: 0.2,
          }"
          v-bind="{ forwarded }"
          :class="
            cn(
              'z-50 w-72 rounded-xl border backdrop-blur-lg drop-shadow-md !border-b3  bg-b1/94  p-4 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
              props.class,
            )
          ">
          <motion.div
            :variants="wrapperVariants" initial="hidden" animate="visible" exit="hidden" class="size-full" :transition="{
              type: 'spring',
              bounce: 0.25,
              duration: 0.4,
            }">
            <slot />
          </motion.div>
        </motion.div>
      </PopoverContent>
    </AnimatePresence>
  </PopoverPortal>
</template>
