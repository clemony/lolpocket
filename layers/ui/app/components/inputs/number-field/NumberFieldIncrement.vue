<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'reka-ui'
import { NumberFieldIncrement, useForwardProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    NumberFieldIncrementProps & {
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
  <NumberFieldIncrement
    v-bind="forwarded"
    data-slot="increment"
    :class="
      cn(
        'cursor-pointer disabled:cursor-not-allowed disabled:opacity-20',

        props.class,
      )
    "
  >
    <slot>
      <icon class="size-4" name="add" />
    </slot>
  </NumberFieldIncrement>
</template>
