<script lang="ts" setup>
import { motion } from 'motion-v'
import type { TabsIndicatorProps } from 'reka-ui'
import { TabsIndicator } from 'reka-ui'

defineOptions({ inheritAttrs: false })

const props = defineProps<
  TabsIndicatorProps & {
    class?: HTMLAttributes['class']
    orientation?: 'horizontal' | 'vertical'
    contrast?: boolean
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
    :class="{ 'h-[100%]': props.orientation != 'vertical', 'w-[100%]': props.orientation == 'vertical' }">
    <motion.div
      :variants="variants"
      :animate="props.orientation == 'vertical' ? 'vertical' : 'horizontal'"
      :style="{
        transform: props.orientation === 'vertical'
          ? 'translateY(calc(var(--reka-tabs-indicator-position)))'
          : 'translateX(calc(var(--reka-tabs-indicator-position)))',
      }"
      :class="cn(' -top-0 absolute transition-all rounded-lg ', { '!top-0 left-1': props.orientation == 'vertical' }, props.class)">
      <motion.div
        class="h-full w-full rounded-lg bg-b1 text-bc shadow"
        :class="cn('   ', { 'shadow-sm shadow-black/3 !bg-b1/90 ': props.orientation == 'vertical', 'bg-n1/80 border-accent border drop-shadow-sm ': props.contrast })" />
    </motion.div>
  </TabsIndicator>
</template>
