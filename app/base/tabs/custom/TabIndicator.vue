<script lang="ts" setup>
import { motion } from 'motion-v'
import type { TabsIndicatorProps } from 'reka-ui'
import { TabsIndicator } from 'reka-ui'

defineOptions({ inheritAttrs: false })

const props = defineProps<
  TabsIndicatorProps & {
    class?: HTMLAttributes['class']
    indicatorClass?: HTMLAttributes['class']
    orientation?: 'horizontal' | 'vertical'
    contrast?: boolean
    round?: boolean
    roundDisabled?: boolean
  }
>()
const forwarded = reactiveOmit(props, 'class')

const variants = {
  horizontal: {
    transform: 'translateX(calc(var(--reka-tabs-indicator-position)))',
    width: 'calc(var(--reka-tabs-indicator-size))',
    transition: {
      duration: 0.3,
    },
  },
  vertical: {
    transform: 'translateY(calc(var(--reka-tabs-indicator-position)))',
    height: 'calc(var(--reka-tabs-indicator-size))',
    transition: {
      duration: 0.5,
    },
  },
}
</script>

<template>
  <TabsIndicator
    v-bind="{ ...forwarded, ...$attrs }"
    as-child
    :class="{ 'h-[81%]': props.orientation != 'vertical', 'w-[98%]': props.orientation == 'vertical' }">
    <motion.div
      :variants="variants"
      :animate="props.orientation == 'vertical' ? 'vertical' : 'horizontal'"
      :style="{
        transform: props.orientation === 'vertical'
          ? 'translateY(calc(var(--reka-tabs-indicator-position)))'
          : 'translateX(calc(var(--reka-tabs-indicator-position)))',
      }"
      :class="cn(' top-1 absolute transition-all rounded-lg ', { '!top-0 left-1': props.orientation == 'vertical' }, props.class)">
      <motion.div
        class="h-full w-full rounded-lg  text-bc shadow"
        :class="cn('  ', { 'bg-b1 ': !props.round, 'shadow-sm shadow-black/3 bg-b1/90 ': props.orientation == 'vertical', '!bg-n1/82 border-n3 border drop-shadow-sm inset-shadow-sm inset-shadow-b3/20 rounded-xl rounded-lg-2': props.contrast, '!rounded-full  !to-b2/20 rounded-full  shadow-outline ring ring-b3/20 !bg-gradient-to-br backdrop-blur-sm  !from-b1 from-70% !shadow-black/8 mt-0.5 !aspect-square': props.round, '!rounded-full  !to-b2/90  ring ring-b3/20 !bg-gradient-to-br   !from-b2 inset-shadow-xs !aspect-square scale-90 opacity-96 ': props.roundDisabled }, indicatorClass)" />
    </motion.div>
  </TabsIndicator>
</template>
