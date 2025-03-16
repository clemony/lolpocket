<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  match: any
}>()

const match = computed (() => {
  return props.match
})

const time = computed (() => {
  const a = match.value.gameDuration / 60
  const b = a.toFixed(2)
  return b.toString().replace('.', ':')
})
console.log('💠 - time - time:', time.value)
</script>

<template>
  <Primitive v-bind="props">
    {{ time }}
  </Primitive>
</template>