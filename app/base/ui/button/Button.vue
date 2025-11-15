<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

interface Props extends PrimitiveProps {
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  on?: ButtonVariants['on']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
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
        'group/button',
        buttonVariants({ base, variant, size, hover, on }),
        props.class,
      )
    "
    :autofocus="false">
    <slot />
  </Primitive>
</template>
