<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
<<<<<<< HEAD
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<PopoverArrowProps & {
  class?: HTMLAttributes['class']
}>()

const injectedVariant = inject<PopoverContentVariants['variant']>('popoverVariant')

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)

const { arrow } = popoverContentVariants({ variant: injectedVariant ?? 'base' })
=======
import { motion } from 'motion-v'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<PopoverArrowProps & {
  variants?: any
  class?: HTMLAttributes['class']
  variant?: PopoverContentVariants['variant']
}>()

const forwarded = useForwardProps(props)
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <PopoverArrow
    v-bind="forwarded"
<<<<<<< HEAD
    :class="cn('invert opacity-90 dst translate-y-[1px]', arrow(), props.class)"
    :height="10"
    :width="16" />
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-50 w-64 outline-none overflow-hidden', arrow(), props.class)"
    :height="10"
    :width="16" />
=======
    as-child
    class="icon"
    :height="8"
    :width="8">
    <motion.div
      :variants="props.variants"
      initial="hidden"
      animate="visible"
      exit="hidden"
      :transition="{
        type: 'spring',
        duration: 0.1,
        bounce: 0.2,
      }"
      class="relative size-8 relative scale-x-110">
      <icon
        name="formkit:caretdown"
        :class=" cn(
          '!size-full z-0 icon absolute bottom-[8px] invert opacity-10  stroke-[0.5]  drop-shadow-xs', popoverArrowVariants({ variant }), props.class)" />

      <icon
        name="formkit:caretdown"
        :class=" cn('!size-full z-1 icon absolute bottom-[9px]  stroke-[0.5]  drop-shadow-xs mask-t-from-64% mask-t-to-66%', popoverArrowVariants({ variant }), props.class)" />
    </motion.div>
  </PopoverArrow>
>>>>>>> refs/remotes/origin/main
</template>
