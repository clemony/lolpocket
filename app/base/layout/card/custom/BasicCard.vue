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
      cn('rounded-box border border-b3/60 bg-b1 px-4 py-4 text-bc shadow-sm shadow-black/8 drop-shadow-sm drop-shadow-black/4',
        className,
      )
    ">
    <slot />
  </Primitive>
</template>
