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
    shape?: LabelVariants['shape']
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
        'group/placeholder pointer-events-none size-full items-center justify-center gap-2 self-center aspect-square btn btn-square !p-0 ',
        labelVariants({ variant, size, hover, shape }),
        className,
      )
    ">
    <slot />
  </Primitive>
</template>
