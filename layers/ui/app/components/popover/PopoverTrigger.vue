<script setup lang="ts">
import type { PopoverTriggerProps } from 'reka-ui'
import { PopoverTrigger, useForwardProps } from 'reka-ui'

interface Props extends PopoverTriggerProps {
  class?: HTMLAttributes['class']

  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}
const props = withDefaults(defineProps<Props>(), {
  base: 'btn',
  size: 'md',
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

        '',
        props.class,
      )
    "
  >
    <slot />
  </PopoverTrigger>
</template>
