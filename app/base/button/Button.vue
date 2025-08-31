<script setup lang="ts">
import { buttonVariants } from 'assets/ts/variant-index'
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  variant?: any
  size?: any
  hover?: any
  shape?: any
  class?: HTMLAttributes['class']
}
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size, shape, hover }), props.class)">
    <slot />
  </Primitive>
</template>
