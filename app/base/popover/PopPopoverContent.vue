<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { motion } from 'motion-v'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    PopoverContentProps & {
      class?: HTMLAttributes['class']
      arrowClass?: HTMLAttributes['class']
      to?: string
      sideOffset?: number
      align?: string
      scaleStart?: number
    }
  >(),
  {
    sideOffset: 0,
    align: 'center',
    scaleStart: 0.6,
  }
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const variants = {
  arrowHidden: {
    opacity: 0,
    scale: props.scaleStart,
    transition: {
      delay: 0,
      duration: 0,
    },
    transitionEnd: { visibility: 'hidden' },
  },
  hidden: {
    opacity: 0,
    scale: props.scaleStart,
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
      delay: 0.2,
    },
    visibility: 'visible',
  },
}
</script>

<template>
  <PopoverPortal :to="props.to">
    <AnimatePresence>
      <PopoverContent
        as-child
        :align="align"
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
              'z-50 w-72 rounded-lg border backdrop-blur-md drop-shadow-md !border-b3  bg-b1/90  p-4 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
              props.class,
            )
          ">
          <motion.div
            v-bind="$attrs"
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
          <CustomPopoverArrow
            initial="hidden"
            animate="visible"
            :variants="variants"
            exit="arrowHidden"
            :class="
              cn('text-b1/99 absolute  scale-y-90  !z-53', props.arrowClass)
            " />
        </motion.div>
      </PopoverContent>
    </AnimatePresence>
  </PopoverPortal>
</template>
