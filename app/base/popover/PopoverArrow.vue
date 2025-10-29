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
    :class="cn('invert z-0 opacity-90 dst translate-y-[1px]', arrow(), props.class)"
    :height="10"
    :width="16" />
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-50 w-64 z-1 outline-none overflow-hidden', arrow(), props.class)"
    :height="10"
    :width="16" />
</template>
