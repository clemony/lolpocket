<script lang="ts" setup>
import type { TabsIndicatorProps } from 'reka-ui'
import { motion } from 'motion-v'
import { TabsIndicator } from 'reka-ui'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<
  TabsIndicatorProps & {
    class?: HTMLAttributes['class']
    indicatorClass?: HTMLAttributes['class']
    orientation?: 'horizontal' | 'vertical'
    on?: ButtonVariants['on']
    base?: ButtonVariants['base']
    hover?: ButtonVariants['hover']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
  }
>(), {
  orientation: 'horizontal',
  variant: 'base'
})
const forwarded = reactiveOmit(props, 'class')

const variants = {
  horizontal: {
    width: 'calc(var(--reka-tabs-indicator-size))',
    transform: 'translateX(calc(var(--reka-tabs-indicator-position)))',
    transition: {
      duration: 0.3,
    },
  },
  vertical: {
    height: 'calc(var(--reka-tabs-indicator-size))',
    transform: 'translateY(calc(var(--reka-tabs-indicator-position)))',
    transition: {
      duration: 0.3,
    },
  },
}
</script>

<template>
  <TabsIndicator as-child>
    <motion.div
      v-bind="{ ...forwarded, ...$attrs }"
      :variants="variants"
      :initial="props.orientation === 'vertical' ? 'vertical' : 'horizontal'"
      :animate="props.orientation === 'vertical' ? 'vertical' : 'horizontal'"
      :style="{
        transform:
          props.orientation === 'vertical'
            ? 'translateY(calc(var(--reka-tabs-indicator-position)))'
            : 'translateX(calc(var(--reka-tabs-indicator-position)))',
      }"
      :class="
        cn(
          'absolute top-0 size-full rounded-lg transition-all',
          props.orientation === 'vertical' ? '!top-0 left-1 w-full' : 'py-0.5',
          props.class,
        )
      ">
      <motion.div
        :class="
          cn('size-full min-w-0! text-bc shadow-sm',
             buttonVariants({ base, variant, size, hover, on }),
             'rounded-lg fx-0',
             indicatorClass,
          )
        " />
    </motion.div>
  </TabsIndicator>
</template>
