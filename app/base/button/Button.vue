<script setup lang="ts">
import type { VariantStyleProps } from 'assets/ts/variant-index'
import { buttonVariants } from 'assets/ts/variant-index'
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  variant?: VariantStyleProps ['variant']
  size?: VariantStyleProps ['size']
  shape?: VariantStyleProps ['shape']
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
    :class="cn(buttonVariants({ variant, size, shape }), props.class)">
    <slot />
  </Primitive>
</template>
