<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { id, class: className } = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  id: number
}>()

const ix = useIndexStore()
</script>

<template>
  <Primitive v-bind="$props" :class="cn('', className)">
    {{ ix.mapIdById(id) }}
  </Primitive>
</template>