<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import { buttonVariants } from '~/assets/variants/variant-index'

interface Props extends PrimitiveProps {
  active?: any
  base?: any
  class?: HTMLAttributes['class']
  hover?: any
  shape?: any
  size?: any
  variant?: any
}
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ base, variant, size, shape, hover, active }), props.class)"
    :autofocus="false">
    <slot />
  </Primitive>
</template>
