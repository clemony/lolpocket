<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  duration: number
}>()

const time = computed (() => {
  const a = props.duration / 60
  const b = a.toFixed(2)
  return b.toString().replace('.', ':')
})
</script>

<template>
  <Primitive v-bind="props">
    {{ time }}
  </Primitive>
</template>