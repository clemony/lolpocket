<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'

import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from './bn'
import { Primitive } from 'radix-vue'
import { buttonVariants } from './bn'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
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
    class="items-center"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
