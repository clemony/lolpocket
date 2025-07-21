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
  defineProps<PopoverContentProps & { class?: HTMLAttributes['class'], to?: string }>(),
  {
    align: 'center',
    sideOffset: 4,
  },
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
console.log('💠 - forwarded:', forwarded)

const variants = {
  visible: {
    opacity: 1,
    maxHeight: '420px',
    maxWidth: '340px',
    visibility: 'visible',
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.4,
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
      <PopoverContent as-child>
        <motion.div
          :variants="variants" initial="hidden" animate="visible" exit="hidden" :transition="{
            type: 'spring',
            duration: 0.3,
            bounce: 0.2,
          }"
          v-bind="{ forwarded }"
          :class="
            cn(
              'z-50 w-72 rounded-xl border  backdrop-blur-lg drop-shadow-md !border-black-30  bg-black-22/94 text-nc/80 p-4 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
              props.class,
            )
          ">
          <CustomPopoverArrow class="" />

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
