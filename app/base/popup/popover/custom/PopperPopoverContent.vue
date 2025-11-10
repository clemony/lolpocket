<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { motion } from 'motion-v'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    PopoverContentProps & { class?: HTMLAttributes['class'], to?: string }
  >(),
  {
    sideOffset: 4,
    align: 'center',
  }
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    transitionEnd: { visibility: 'hidden' },
  },
  visible: {
    maxWidth: '340px',
    maxHeight: '420px',
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
              `
                z-50 h-max w-max rounded-xl border !border-black-30
                bg-black-22/94 shadow-md drop-shadow-md backdrop-blur-lg
                outline-none
                **:not-[&_.icon]:**:text-white/80
                not-[.icon]:text-white/80
                group-data-[state=hidden]:**:opacity-0
                group-data-[state=visible]:**:opacity-100
              `,
            )
          ">
          <PopoverArrow
            class="
              icon translate-y-0.25 !text-black/80
              **:!text-black/80
            " />

          <motion.div
            :variants="wrapperVariants"
            initial="hidden"
            animate="visible"
            exit="hidden"
            :class="cn('size-full overflow-y-auto p-4', props.class)"
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
