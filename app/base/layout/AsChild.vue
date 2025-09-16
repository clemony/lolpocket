<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<PrimitiveProps>(), {
  as: 'span',
})
</script>

<template>
  <Primitive
    v-bind="props"
    as-child>
    <slot />
  </Primitive>
</template>
