<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']

  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as
    :as-child="asChild"
    :class="
      cn(
        'group/button group/btn',

        props.class,
      )
    "
    :autofocus="false"
  >
    <slot />
  </Primitive>
</template>
