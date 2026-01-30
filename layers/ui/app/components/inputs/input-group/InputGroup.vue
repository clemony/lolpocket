<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: HTMLAttributes['class']
      size?: InputGroupVariants['size']
      variant?: InputGroupVariants['variant']
      hover?: InputGroupVariants['hover']
    }
  >(),
  {
    size: '11',
  }
)
</script>

<template>
  <Primitive
    v-bind="props"
    data-slot="input-group"
    role="group"
    :class="cn(inputGroupVariants({ size, variant, hover }), props.class)"
  >
    <slot />
  </Primitive>
</template>
