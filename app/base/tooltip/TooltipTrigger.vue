<script setup lang="ts">
import type { TooltipTriggerProps } from 'reka-ui'
import { TooltipTrigger } from 'reka-ui'

const props = withDefaults(defineProps<TooltipTriggerProps & {
  on?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}>(), {
  as: 'button',
  base: 'none',
  hover: 'none',
  on: 'none',
  variant: 'none'
})

const forwarded = reactiveOmit(props, 'class', 'on', 'base', 'hover', 'size', 'variant')
</script>

<template>
  <TooltipTrigger
    data-slot="tooltip-trigger"
    :class="cn(buttonVariants({ base, variant, size, hover, active: on }), props.class)"
    v-bind="props">
    <slot />
  </TooltipTrigger>
</template>
