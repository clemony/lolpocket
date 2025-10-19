<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

interface Props extends PrimitiveProps {
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  shape?: ButtonVariants['shape']
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
    :class="cn(buttonVariants({ base, variant, size, shape, hover, active }), props.class)"
    :autofocus="false">
    <slot />
  </Primitive>
</template>
