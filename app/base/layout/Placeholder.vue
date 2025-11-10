<script setup lang="ts">
import type { AsTag, PrimitiveProps } from 'reka-ui'
import { labelVariants } from '@variants'
import { Primitive } from 'reka-ui'

const { as = 'label', class: className } = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
    variant?: LabelVariants['variant']
    size?: LabelVariants['size']
    hover?: LabelVariants['hover']
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
        `
          group/placeholder btn pointer-events-none aspect-square btn-square
          size-full items-center justify-center gap-2 self-center !p-0
        `,
        labelVariants({ variant, size, hover }),
        className,
      )
    ">
    <slot />
  </Primitive>
</template>
