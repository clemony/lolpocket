<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { as = 'div', class: className } = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    as?: string
  }
>()
</script>

<template>
  <Primitive
    :as="as"
    :class="
      cn(
        'rounded-box border border-p3/60 bg-p0 p-4 text-pc shadow-sm shadow-black/8 drop-shadow-sm drop-shadow-black/4',
        className,
      )
    ">
    <slot />
  </Primitive>
</template>
