<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<PopoverArrowProps & {
  class?: HTMLAttributes['class']
  variant?: PopoverContentVariants['variant']
}>()

const injectedVariant = inject<PopoverContentVariants['variant']>('popoverVariant')

const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwarded = useForwardProps(delegatedProps)

const { arrow } = popoverContentVariants({ variant: injectedVariant || props.variant || 'base' })
</script>

<template>
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-0 translate-y-[1px] opacity-20 dxs invert', arrow(), props.class)"
    :height="9"
    :width="18" />
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-1 z-50 overflow-hidden outline-none', arrow(), props.class)"
    :height="9"
    :width="18" />
</template>
