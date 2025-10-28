<script setup lang="ts">
import type { PopoverTriggerProps } from 'reka-ui'
import { PopoverTrigger, useForwardProps } from 'reka-ui'

interface Props extends PopoverTriggerProps {
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}
const props = withDefaults(defineProps<Props>(), {
  base: 'btn',
  size: 'md',
  variant: 'none'
})
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PopoverTrigger
    v-bind="forwarded"
    :class="cn(buttonVariants({ base, variant, size, hover, active }), '', props.class)">
    <slot />
  </PopoverTrigger>
</template>
