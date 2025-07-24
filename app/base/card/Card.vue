<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { class: className, as = 'div' } = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  as?: string
}>()
</script>

<template>
  <Primitive
    :as="as"
    :class="cn('bg-b1 rounded-box px-4 py-4 text-bc shadow-warm-soft drop-shadow-sm border border-b3/60', className)">
    <slot />
  </Primitive>
</template>