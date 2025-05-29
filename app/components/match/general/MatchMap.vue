<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { id, class: className } = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  id: number
}>()

const { mapNameById } = await useIndexLookup()
</script>

<template>
  <Primitive v-bind="$props" :class="cn('', className)">
    {{ mapNameById(id) }}
  </Primitive>
</template>