<script setup lang="ts">
import type { AsTag, PrimitiveProps } from 'reka-ui'
import { elementVariants } from '@variants'
import { Primitive } from 'reka-ui'

const { as = 'element', class: className } = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    variant?: ElementVariants['variant']
    size?: ElementVariants['size']
    hover?: ElementVariants['hover']
    shape?: ElementVariants['shape']
    as?: AsTag | string
  }
>()
</script>

<template>
  <Primitive
    :as="as"
    v-bind="$attrs"
    :class="
      cn(
        '',
        elementVariants({ variant, size, hover, shape }),
        className,
      )
    ">
    <slot />
  </Primitive>
</template>
