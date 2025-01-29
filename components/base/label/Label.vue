<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { LabelVariants } from './lindex'
import { Primitive } from 'radix-vue'
import { labelVariants } from './lindex'

interface Props extends PrimitiveProps {
  variant?: LabelVariants['variant']
  size?: LabelVariants['size']
  button?: LabelVariants['button']
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
    :class="
      cn(
        labelVariants({
          variant,
          size,
          button,
        }),
        { 'grid place-items-center': props.variant },
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
