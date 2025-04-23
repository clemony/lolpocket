<script lang="ts" setup>
import { motion } from 'motion-v'
import { TabsIndicator } from 'reka-ui'
import type { TabsIndicatorProps } from 'reka-ui'

defineOptions({ inheritAttrs: false })

const props = defineProps<
  TabsIndicatorProps & {
    class?: HTMLAttributes['class']
    orientation?: 'horizontal' | 'vertical'
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
  <TabsIndicator v-bind="{ ...forwarded, ...$attrs }" as-child :class="{ 'h-[81%]': props.orientation != 'vertical', 'w-[98%]': props.orientation == 'vertical' }">
    <motion.div
      :variants="variants"
      :animate="props.orientation == 'vertical' ? 'vertical' : 'horizontal'"
      :style="{
        transform: props.orientation === 'vertical'
          ? 'translateY(calc(var(--reka-tabs-indicator-position)))'
          : 'translateX(calc(var(--reka-tabs-indicator-position)))',
      }"
      :class="cn(' top-1 absolute transition-all  ', { '!top-0 left-1': props.orientation == 'vertical' }, props.class)">
      <motion.div
        class="h-full w-full rounded-lg bg-b1 text-bc shadow"
        :class="cn('   ', { 'shadow-sm shadow-black/3 !bg-b1/90 ': props.orientation == 'vertical' })" />
    </motion.div>
  </TabsIndicator>
</template>
