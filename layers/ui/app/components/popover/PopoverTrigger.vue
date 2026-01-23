<script setup lang="ts">
import type { PopoverTriggerProps } from 'reka-ui'
import { PopoverTrigger, useForwardProps } from 'reka-ui'

interface Props extends PopoverTriggerProps {
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  on?: ButtonVariants['on']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}
const props = withDefaults(defineProps<Props>(), {
  base: 'btn',
  size: 'md',
  variant: 'none',
})
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PopoverTrigger
    v-bind="forwarded"
    :class="
      cn(
        'group/pop',
        buttonVariants({ base, variant, size, hover, on }),
        '',
        props.class,
      )
    ">
    <slot />
  </PopoverTrigger>
</template>
