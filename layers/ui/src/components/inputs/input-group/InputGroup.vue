<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  size?: InputGroupVariants['size']
  variant?: InputGroupVariants['variant']
  hover?: InputGroupVariants['hover']
}>(), {
  size: '11'
})
</script>

<template>
  <Primitive
    data-slot="input-group"
    role="group"
    v-bind="props"
    :class="cn(inputGroupVariants({ size, variant, hover }), props.class)">
    <slot />
  </Primitive>
</template>
