<script lang="ts" setup>
import type { TabsIndicatorProps } from 'reka-ui'
import { motion } from 'motion-v'
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
<<<<<<< HEAD

    active?: ButtonVariants['active']
    base?: ButtonVariants['base']
    hover?: ButtonVariants['hover']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
=======
>>>>>>> refs/remotes/origin/main
  }
>()
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
  <TabsIndicator
    v-bind="{ ...forwarded, ...$attrs }"
    as-child
    class="z-0 !min-w-0"
    :class="{
      'h-[81%]': props.orientation !== 'vertical',
      'w-[81%]': props.orientation === 'vertical',
    }">
    <motion.div
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
          ' top-1 absolute transition-all rounded-lg ',
          { '!top-0 left-1': props.orientation === 'vertical' },
          props.class,
        )
      ">
      <motion.div
        class="h-full w-full rounded-lg !min-w-0 text-bc shadow"
        :class="
          cn(
            '  bg-b1',
            {
              ' ring-b3/20 !from-b1 from-70%  !bg-gradient-to-br !to-b2/20': !props.contrast && props.round,
              'shadow-sm shadow-black/3 h-full ':
                props.orientation === 'vertical',
              '!bg-neutral/82 border-n3 border drop-shadow-sm inset-shadow-sm inset-shadow-b3/20 rounded-lg':
                props.contrast,
              '!rounded-full    shadow-outline ring  backdrop-blur-sm !shadow-black/8 mt-0.5 !aspect-square':
                props.round,
              '!rounded-full  !to-b2/90  ring ring-b3/20 !bg-gradient-to-br   !from-b2 inset-shadow-xs !aspect-square scale-90 opacity-96 ':
                props.roundDisabled,
            },
<<<<<<< HEAD

            buttonVariants({ base, variant, size, hover, active }),
=======
>>>>>>> refs/remotes/origin/main
            indicatorClass,
          )
        " />
    </motion.div>
  </TabsIndicator>
</template>
