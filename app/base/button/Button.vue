<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { buttonVariants } from '~/assets/ts/variant-index'

interface Props extends PrimitiveProps {
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
    :class="cn(buttonVariants({ variant, size, shape, hover }), props.class)">
    <slot />
  </Primitive>
</template>
