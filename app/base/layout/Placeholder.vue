<script setup lang="ts">
import type { AsTag, PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'
import { labelVariants } from '~/assets/ts/variant-index'

const { as = 'label', class: className, } = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  variant?: any
  size?: any
  hover?: any
  as?: AsTag | string
}>()
</script>

<template>
  <Primitive
    :as="as"
    v-bind="$attrs"
    :class="cn('group/placeholder pointer-events-none size-full items-center justify-center gap-2 self-center aspect-square btn btn-square !p-0 ', labelVariants({ variant, size, hover }), className)">
    <slot />
  </Primitive>
</template>
