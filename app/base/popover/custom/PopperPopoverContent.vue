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
      <PopoverContent
        :side-offset="-12"
        as-child>
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
              'z-50 w-max h-max rounded-xl border  backdrop-blur-lg drop-shadow-md !border-black-30  bg-black-22/94 not-[.icon]:text-white/80 **:[not-[.icon]]:text-white/80 text-bc shadow-md outline-none group-data-[state=visible]:**:opacity-100 group-data-[state=hidden]:**:opacity-0',
            )
          ">
          <CustomPopoverArrow class="!text-black/80 translate-y-0.25 " />

          <motion.div
            :variants="wrapperVariants"
            initial="hidden"
            animate="visible"
            exit="hidden"
            :class="cn('size-full p-4  overflow-y-auto',
                       props.class)"
            class=""
            :transition="{
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
