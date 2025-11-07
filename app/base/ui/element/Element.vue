<script setup lang="ts">
import type { AsTag, PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { as = 'div', class: className } = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    variant?: ElementVariants['variant']
    size?: ElementVariants['size']
    hover?: ElementVariants['hover']
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
        elementVariants({ variant, size, hover }),
        className,
      )
    ">
    <slot />
  </Primitive>
</template>
