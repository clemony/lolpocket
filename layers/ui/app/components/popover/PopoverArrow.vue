<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<
  PopoverArrowProps & {
    class?: HTMLAttributes['class']
    variant?: any
  }
>()

const delegatedProps = reactiveOmit(props, 'class', 'variant')
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PopoverArrow
    v-bind="forwarded"
    :class="
      cn('z-0 translate-y-px opacity-20 dxs invert', props.class)
    "
    :height="9"
    :width="18" />
  <PopoverArrow
    v-bind="forwarded"
    :class="cn('z-50 overflow-hidden outline-none', props.class)"
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
