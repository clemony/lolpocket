<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'reka-ui'
import { NumberFieldDecrement, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    NumberFieldDecrementProps & {
      class?: HTMLAttributes['class']

      size?: ButtonVariants['size']
      variant?: ButtonVariants['variant']
    }
  >(),
  {
    variant: 'inset',
    base: 'btn',
    hover: 'neutral',
  }
)

const delegatedProps = reactiveOmit(omitUIProps(props))
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement
    v-bind="forwarded"
    data-slot="decrement"
    :class="
      cn(
        'cursor-pointer disabled:cursor-not-allowed disabled:opacity-20',
        props.class,
      )
    "
  >
    <slot>
      <icon class="size-4" name="minus" />
    </slot>
  </NumberFieldDecrement>
</template>
