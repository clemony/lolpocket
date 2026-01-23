<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'reka-ui'
import { NumberFieldDecrement, useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<
  NumberFieldDecrementProps & {
    base?: ButtonVariants['base']
    class?: HTMLAttributes['class']
    hover?: ButtonVariants['hover']
    size?: ButtonVariants['size']
    variant?: ButtonVariants['variant']
  }
>(), {
  base: 'btn',
  hover: 'neutral',
  size: 'sq-9',
  variant: 'base'
})

const delegatedProps = reactiveOmit(omitUIProps(props))
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    :class="
      cn('cursor-pointer disabled:cursor-not-allowed disabled:opacity-20',
         buttonVariants({ base, variant, size, hover }),
         props.class,
      )
    ">
    <slot>
      <icon
        name="minus"
        class="size-4" />
    </slot>
  </NumberFieldDecrement>
</template>
