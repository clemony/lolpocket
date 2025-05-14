<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import type { PrimitiveProps } from 'reka-ui'
import { buttonVariants } from './buttonIndex'
import type { ButtonVariants } from './buttonIndex'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'label',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </Primitive>
</template>
