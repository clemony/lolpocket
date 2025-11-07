<script setup lang="ts">
import type { HoverCardContentProps } from 'reka-ui'
import { HoverCardContent, HoverCardPortal, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<HoverCardContentProps & {
    class?: HTMLAttributes['class']
    variant?: PopoverContentVariants['variant']
  }>(),
  {
    sideOffset: 4,
  }
)
const { base } = popoverContentVariants({ variant: props.variant })
const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
provide('popoverVariant', props.variant)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwarded"
      :class="cn('z-50 w-64 outline-none overflow-hidden', base(), props.class)">
      <slot :variant />
    </HoverCardContent>
  </HoverCardPortal>
</template>
