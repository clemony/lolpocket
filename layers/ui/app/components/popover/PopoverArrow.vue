<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<
  PopoverArrowProps & {
    class?: HTMLAttributes['class']
    variant?: PopoverContentVariants['variant']
  }
>()

const injectedVariant
  = inject<PopoverContentVariants['variant']>('popoverVariant')

const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwarded = useForwardProps(delegatedProps)

const { arrow } = popoverContentVariants({
  variant: injectedVariant || props.variant || 'base',
})
</script>

<template>
  <PopoverArrow
    v-bind="forwarded"
    :class="
      cn('dxs z-0 translate-y-px opacity-20 invert', arrow(), props.class)
    "
    :height="9"
    :width="18" />
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-50 overflow-hidden outline-none', arrow(), props.class)"
    :height="9"
    :width="18" />

  <!--  <PopoverArrow
    v-bind="forwarded"
    as-child>
    <div
      :class="
        cn('tippy-svg-arrow popover-arrow', props.class)
      ">
      <Icon
        name="lp-ui:popover-arrow" />
    </div>
  </PopoverArrow> -->
</template>
