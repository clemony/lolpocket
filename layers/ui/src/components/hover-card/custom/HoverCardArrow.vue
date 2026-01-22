<script setup lang="ts">
import type { HoverCardArrowProps } from 'reka-ui'
import { HoverCardArrow, useForwardProps } from 'reka-ui'

const props = defineProps<
  HoverCardArrowProps & {
    class?: HTMLAttributes['class']
    variant?: PopoverContentVariants['variant']
  }
>()

const injectedVariant
  = inject<PopoverContentVariants['variant']>('popoverVariant')
const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardProps(delegatedProps)

const { arrow } = popoverContentVariants({
  variant: injectedVariant ?? 'base',
})
</script>

<template>
  <HoverCardArrow
    v-bind="forwarded"
    :class="cn('translate-y-[1px] opacity-90 dst invert', arrow(), props.class)"
    :height="10"
    :width="16"
    rounded />

  <HoverCardArrow
    :height="10"
    :width="16"
    v-bind="forwarded"
    :class="cn('z-50 w-64 overflow-hidden outline-none', arrow(), props.class)"
    rounded />
</template>
