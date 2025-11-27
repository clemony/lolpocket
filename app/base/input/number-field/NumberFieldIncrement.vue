<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'reka-ui'
import { NumberFieldIncrement, useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<
  NumberFieldIncrementProps & {
    base?: ButtonVariants['base']
    class?: HTMLAttributes['class']
    hover?: ButtonVariants['hover']
    on?: ButtonVariants['on']
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
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    :class="
      cn('cursor-pointer disabled:cursor-not-allowed disabled:opacity-20',
         buttonVariants({ base, variant, size, hover, on }),
         props.class,
      )
    ">
    <slot>
      <icon
        name="add"
        class="h-4 w-4" />
    </slot>
  </NumberFieldIncrement>
</template>
