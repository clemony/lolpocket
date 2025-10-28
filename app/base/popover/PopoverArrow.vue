<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<PopoverArrowProps & {
  class?: HTMLAttributes['class']
}>()

const injectedVariant = inject<PopoverContentVariants['variant']>('popoverVariant')

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)

const { arrow } = popoverContentVariants({ variant: injectedVariant ?? 'base' })
</script>

<template>
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('invert opacity-90 dst translate-y-[1px]', arrow(), props.class)"
    :height="10"
    :width="16" />
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-50 w-64 outline-none overflow-hidden', arrow(), props.class)"
    :height="10"
    :width="16" />
</template>
